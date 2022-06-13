'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var circle_utils = require('../../../domain/circle/circle.utils.js');
var errors_constants = require('../../../domain/errors/errors.constants.js');
var wallet_utils = require('../../../domain/wallet/wallet.utils.js');
var formatUtils = require('../../../utils/formatUtils.js');
var CheckoutStepper = require('../../payments/CheckoutStepper/CheckoutStepper.js');
var CheckoutOverlay_utils = require('./CheckoutOverlay.utils.js');

exports.CheckoutModalStepIndex = void 0;
(function (CheckoutModalStepIndex) {
    CheckoutModalStepIndex[CheckoutModalStepIndex["authentication"] = 0] = "authentication";
    CheckoutModalStepIndex[CheckoutModalStepIndex["billing"] = 1] = "billing";
    CheckoutModalStepIndex[CheckoutModalStepIndex["payment"] = 2] = "payment";
    CheckoutModalStepIndex[CheckoutModalStepIndex["purchasing"] = 3] = "purchasing";
    CheckoutModalStepIndex[CheckoutModalStepIndex["confirmation"] = 4] = "confirmation";
    CheckoutModalStepIndex[CheckoutModalStepIndex["error"] = 5] = "error";
})(exports.CheckoutModalStepIndex || (exports.CheckoutModalStepIndex = {}));
const CHECKOUT_STEPS = ["authentication", "billing", "payment", "purchasing", "confirmation"];
const WALLET_ADDRESS_FIELD_STEPS = ["billing", "payment"];
function useCheckoutModalState({ orgID: parentOrgID, invoiceID: parentInvoiceID = null, paymentIdParam, productConfirmationEnabled, vertexEnabled, isAuthenticated, onError, debug, }) {
    const startAt = !isAuthenticated || productConfirmationEnabled ? "authentication" : "billing";
    const [{ checkoutStep, checkoutError, isDialogBlocked, }, setCheckoutModalState] = React.useState({
        checkoutStep: startAt,
        isDialogBlocked: false,
    });
    const [persistedData, setPersistedData] = React.useState({
        orgID: parentOrgID,
        checkoutItems: [],
        goToMarketplaceHref: "",
    });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState({
        billingInfo: "",
        paymentInfo: "",
        paymentType: "",
        cvv: "",
    });
    const [{ invoiceID, invoiceCountdownStart, taxes, wallet, processorPaymentID, paymentID, }, setPurchaseState] = React.useState({
        invoiceID: parentInvoiceID || null,
        invoiceCountdownStart: null,
        taxes: vertexEnabled ? { status: "incomplete" } : null,
        wallet: null,
        processorPaymentID: "",
        paymentID: "",
    });
    const initModalState = React.useCallback(() => {
        if (debug)
            console.log("\n⚙️ Init Modal State!\n\n");
        // Make sure the progress tracker in BillingView and PaymentView is properly animated:
        CheckoutStepper.resetStepperProgress();
        // Once authentication has loaded, we know if we need to skip the product confirmation step or not. Also, when the
        // modal is re-opened, we need to reset its state, taking into account if we need to resume a Plaid OAuth flow:s
        const checkoutModalState = CheckoutOverlay_utils.getCheckoutModalState({ paymentIdParam });
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
    const goBack = React.useCallback(() => {
        setCheckoutModalState(({ checkoutStep: prevCheckoutStep, checkoutError: prevCheckoutError }) => ({
            checkoutStep: CHECKOUT_STEPS[Math.max(CHECKOUT_STEPS.indexOf(prevCheckoutStep) - 1, 0)],
            checkoutError: prevCheckoutError,
            isDialogBlocked: false,
        }));
    }, []);
    const goNext = React.useCallback(() => {
        if (!wallet_utils.isValidWalletAddress(wallet) && WALLET_ADDRESS_FIELD_STEPS.includes(checkoutStep))
            return;
        setCheckoutModalState(({ checkoutStep: prevCheckoutStep, checkoutError: prevCheckoutError }) => ({
            checkoutStep: CHECKOUT_STEPS[Math.min(CHECKOUT_STEPS.indexOf(prevCheckoutStep) + 1, CHECKOUT_STEPS.length - 1)],
            checkoutError: prevCheckoutError,
            isDialogBlocked: false,
        }));
    }, [checkoutStep, wallet]);
    const goTo = React.useCallback((nextCheckoutStep = startAt, nextCheckoutError) => {
        setCheckoutModalState((prevCheckoutModalState) => {
            return nextCheckoutError
                ? { checkoutStep: nextCheckoutStep, checkoutError: nextCheckoutError, isDialogBlocked: false }
                : { checkoutStep: nextCheckoutStep, checkoutError: prevCheckoutModalState.checkoutError, isDialogBlocked: false };
        });
    }, [startAt]);
    const setError = React.useCallback((errorParam) => {
        const nextCheckoutError = typeof errorParam === "object" ? errorParam : {
            errorMessage: errorParam || errors_constants.ERROR_GENERIC.errorMessage,
        };
        const { error } = nextCheckoutError;
        if (error) {
            const circleFieldErrors = circle_utils.parseCircleError(error);
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
                    .map(errorMessagePart => errors_constants.MAPPED_ERRORS[formatUtils.fullTrim(errorMessagePart)])
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
    const setIsDialogBlocked = React.useCallback((nextIsDialogBlocked) => {
        setCheckoutModalState(prevCheckoutModalState => (Object.assign(Object.assign({}, prevCheckoutModalState), { isDialogBlocked: nextIsDialogBlocked })));
    }, []);
    const setInvoiceID = React.useCallback((nextInvoiceID, nextInvoiceCountdownStart) => {
        setPurchaseState(prevPurchaseState => (Object.assign(Object.assign({}, prevPurchaseState), { invoiceID: nextInvoiceID, invoiceCountdownStart: nextInvoiceCountdownStart, processorPaymentID: "", paymentID: "" })));
    }, []);
    const setTaxes = React.useCallback((nextTaxes) => {
        setPurchaseState(prevPurchaseState => (Object.assign(Object.assign({}, prevPurchaseState), { taxes: nextTaxes })));
    }, []);
    const setWalletAddress = React.useCallback((nextWallet) => {
        setPurchaseState(prevPurchaseState => (Object.assign(Object.assign({}, prevPurchaseState), { wallet: nextWallet })));
    }, []);
    const setPayments = React.useCallback((nextProcessorPaymentID, nextPaymentID) => {
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

exports.CHECKOUT_STEPS = CHECKOUT_STEPS;
exports.useCheckoutModalState = useCheckoutModalState;
//# sourceMappingURL=CheckoutOverlay.hooks.js.map
