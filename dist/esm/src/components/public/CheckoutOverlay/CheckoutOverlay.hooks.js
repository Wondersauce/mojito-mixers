import { useState, useCallback } from 'react';
import { parseCircleError } from '../../../domain/circle/circle.utils.js';
import { MAPPED_ERRORS, ERROR_GENERIC } from '../../../domain/errors/errors.constants.js';
import { isValidWalletAddress } from '../../../domain/wallet/wallet.utils.js';
import { fullTrim } from '../../../utils/formatUtils.js';
import { resetStepperProgress } from '../../payments/CheckoutStepper/CheckoutStepper.js';
import { getCheckoutModalState } from './CheckoutOverlay.utils.js';

var CheckoutModalStepIndex;
(function (CheckoutModalStepIndex) {
    CheckoutModalStepIndex[CheckoutModalStepIndex["authentication"] = 0] = "authentication";
    CheckoutModalStepIndex[CheckoutModalStepIndex["billing"] = 1] = "billing";
    CheckoutModalStepIndex[CheckoutModalStepIndex["payment"] = 2] = "payment";
    CheckoutModalStepIndex[CheckoutModalStepIndex["purchasing"] = 3] = "purchasing";
    CheckoutModalStepIndex[CheckoutModalStepIndex["confirmation"] = 4] = "confirmation";
    CheckoutModalStepIndex[CheckoutModalStepIndex["error"] = 5] = "error";
})(CheckoutModalStepIndex || (CheckoutModalStepIndex = {}));
const CHECKOUT_STEPS = ["authentication", "billing", "payment", "purchasing", "confirmation"];
const WALLET_ADDRESS_FIELD_STEPS = ["billing", "payment"];
function useCheckoutModalState({ orgID: parentOrgID, invoiceID: parentInvoiceID = null, paymentIdParam, productConfirmationEnabled, vertexEnabled, isAuthenticated, onError, debug, }) {
    const startAt = !isAuthenticated || productConfirmationEnabled ? "authentication" : "billing";
    const [{ checkoutStep, checkoutError, isDialogBlocked, }, setCheckoutModalState] = useState({
        checkoutStep: startAt,
        isDialogBlocked: false,
    });
    const [persistedData, setPersistedData] = useState({
        orgID: parentOrgID,
        checkoutItems: [],
        goToMarketplaceHref: "",
    });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
        billingInfo: "",
        paymentInfo: "",
        paymentType: "",
        cvv: "",
    });
    const [{ invoiceID, invoiceCountdownStart, taxes, wallet, processorPaymentID, paymentID, }, setPurchaseState] = useState({
        invoiceID: parentInvoiceID || null,
        invoiceCountdownStart: null,
        taxes: vertexEnabled ? { status: "incomplete" } : null,
        wallet: null,
        processorPaymentID: "",
        paymentID: "",
    });
    const initModalState = useCallback(() => {
        if (debug)
            console.log("\n⚙️ Init Modal State!\n\n");
        // Make sure the progress tracker in BillingView and PaymentView is properly animated:
        resetStepperProgress();
        // Once authentication has loaded, we know if we need to skip the product confirmation step or not. Also, when the
        // modal is re-opened, we need to reset its state, taking into account if we need to resume a Plaid OAuth flow:s
        const checkoutModalState = getCheckoutModalState({ paymentIdParam });
        setCheckoutModalState({
            checkoutStep: checkoutModalState.checkoutStep || startAt,
            isDialogBlocked: false,
        });
        setPersistedData({
            orgID: checkoutModalState.orgID,
            checkoutItems: checkoutModalState.checkoutItems,
            goToMarketplaceHref: checkoutModalState.url || "",
        });
        // setCheckoutModalState({ checkoutStep: "error", checkoutError: { errorMessage: "test" } });
        // setCheckoutModalState({ checkoutStep: "purchasing" });
        let paymentType = "";
        if (checkoutModalState.flowType === "3DS") {
            paymentType = "CreditCard";
        }
        else if (checkoutModalState.flowType === "Plaid") {
            paymentType = "ACH";
        }
        else if (checkoutModalState.flowType === "Coinbase") {
            paymentType = "Crypto";
        }
        setSelectedPaymentMethod({
            billingInfo: checkoutModalState.billingInfo || "",
            paymentInfo: checkoutModalState.paymentInfo || "",
            paymentType,
            cvv: "",
        });
        setPurchaseState({
            invoiceID: parentInvoiceID || (checkoutModalState.invoiceID || ""),
            invoiceCountdownStart: parentInvoiceID ? Date.now() : (checkoutModalState.invoiceCountdownStart || null),
            taxes: vertexEnabled ? { status: "incomplete" } : null,
            wallet: null,
            processorPaymentID: checkoutModalState.processorPaymentID || "",
            paymentID: checkoutModalState.paymentID || "",
        });
        return checkoutModalState;
    }, [debug, startAt, parentInvoiceID, paymentIdParam, vertexEnabled]);
    const goBack = useCallback(() => {
        setCheckoutModalState(({ checkoutStep: prevCheckoutStep, checkoutError: prevCheckoutError }) => ({
            checkoutStep: CHECKOUT_STEPS[Math.max(CHECKOUT_STEPS.indexOf(prevCheckoutStep) - 1, 0)],
            checkoutError: prevCheckoutError,
            isDialogBlocked: false,
        }));
    }, []);
    const goNext = useCallback(() => {
        if (!isValidWalletAddress(wallet) && WALLET_ADDRESS_FIELD_STEPS.includes(checkoutStep))
            return;
        setCheckoutModalState(({ checkoutStep: prevCheckoutStep, checkoutError: prevCheckoutError }) => ({
            checkoutStep: CHECKOUT_STEPS[Math.min(CHECKOUT_STEPS.indexOf(prevCheckoutStep) + 1, CHECKOUT_STEPS.length - 1)],
            checkoutError: prevCheckoutError,
            isDialogBlocked: false,
        }));
    }, [checkoutStep, wallet]);
    const goTo = useCallback((nextCheckoutStep = startAt, nextCheckoutError) => {
        setCheckoutModalState((prevCheckoutModalState) => {
            return nextCheckoutError
                ? { checkoutStep: nextCheckoutStep, checkoutError: nextCheckoutError, isDialogBlocked: false }
                : { checkoutStep: nextCheckoutStep, checkoutError: prevCheckoutModalState.checkoutError, isDialogBlocked: false };
        });
    }, [startAt]);
    const setError = useCallback((errorParam) => {
        const nextCheckoutError = typeof errorParam === "object" ? errorParam : {
            errorMessage: errorParam || ERROR_GENERIC.errorMessage,
        };
        const { error } = nextCheckoutError;
        if (error) {
            const circleFieldErrors = parseCircleError(error);
            if (circleFieldErrors && Object.keys(circleFieldErrors).length > 2) {
                // There's already some specific errors from Circle:
                nextCheckoutError.circleFieldErrors = circleFieldErrors;
            }
            else if (circleFieldErrors) {
                // If only 2 keys are present, those are firstAt and summary, so we need to try to map the generic error to a
                // more specific one:
                const errorMessageParts = circleFieldErrors.summary.split(": ").reverse();
                const mappedErrorObject = Object
                    .values(errorMessageParts)
                    .map(errorMessagePart => MAPPED_ERRORS[fullTrim(errorMessagePart)])
                    .find(mappedError => !!mappedError);
                if (mappedErrorObject) {
                    const { errorLocation, fieldName } = mappedErrorObject;
                    const errorInForms = (errorLocation === "billing" || errorLocation === "payment") && fieldName;
                    if (errorInForms) {
                        nextCheckoutError.circleFieldErrors = {
                            firstAt: errorLocation,
                            summary: mappedErrorObject.errorMessage,
                            [errorLocation]: {
                                [fieldName]: mappedErrorObject.errorMessage,
                            },
                        };
                    }
                    else {
                        nextCheckoutError.at = mappedErrorObject.errorLocation || nextCheckoutError.at;
                        nextCheckoutError.errorMessage = mappedErrorObject.errorMessage || nextCheckoutError.errorMessage;
                    }
                }
            }
        }
        if (onError)
            onError(nextCheckoutError);
        setCheckoutModalState({
            checkoutStep: "error",
            checkoutError: nextCheckoutError,
            isDialogBlocked: false,
        });
    }, [onError]);
    const setIsDialogBlocked = useCallback((nextIsDialogBlocked) => {
        setCheckoutModalState(prevCheckoutModalState => (Object.assign(Object.assign({}, prevCheckoutModalState), { isDialogBlocked: nextIsDialogBlocked })));
    }, []);
    const setInvoiceID = useCallback((nextInvoiceID, nextInvoiceCountdownStart) => {
        setPurchaseState(prevPurchaseState => (Object.assign(Object.assign({}, prevPurchaseState), { invoiceID: nextInvoiceID, invoiceCountdownStart: nextInvoiceCountdownStart, processorPaymentID: "", paymentID: "" })));
    }, []);
    const setTaxes = useCallback((nextTaxes) => {
        setPurchaseState(prevPurchaseState => (Object.assign(Object.assign({}, prevPurchaseState), { taxes: nextTaxes })));
    }, []);
    const setWalletAddress = useCallback((nextWallet) => {
        setPurchaseState(prevPurchaseState => (Object.assign(Object.assign({}, prevPurchaseState), { wallet: nextWallet })));
    }, []);
    const setPayments = useCallback((nextProcessorPaymentID, nextPaymentID) => {
        setPurchaseState(prevPurchaseState => (Object.assign(Object.assign({}, prevPurchaseState), { processorPaymentID: nextProcessorPaymentID, paymentID: nextPaymentID })));
    }, []);
    return {
        // CheckoutModalState:
        startAt,
        checkoutStep,
        checkoutError,
        isDialogBlocked,
        initModalState,
        goBack,
        goNext,
        goTo,
        setError,
        setIsDialogBlocked,
        // Data that can be persisted:
        orgID: persistedData.orgID || parentOrgID,
        checkoutItems: persistedData.checkoutItems,
        goToMarketplaceHref: persistedData.goToMarketplaceHref,
        // SelectedPaymentMethod:
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        // PurchaseState:
        invoiceID,
        invoiceCountdownStart,
        setInvoiceID,
        taxes,
        setTaxes,
        wallet,
        setWalletAddress,
        processorPaymentID,
        paymentID,
        setPayments,
    };
}

export { CHECKOUT_STEPS, CheckoutModalStepIndex, useCheckoutModalState };
//# sourceMappingURL=CheckoutOverlay.hooks.js.map
