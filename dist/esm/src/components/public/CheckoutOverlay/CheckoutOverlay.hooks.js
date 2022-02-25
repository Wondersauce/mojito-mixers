import { useState, useCallback } from 'react';
import { ERROR_PURCHASE } from '../../../domain/errors/errors.constants.js';
import { resetStepperProgress } from '../../payments/CheckoutStepper/CheckoutStepper.js';
import { continueFlows } from './CheckoutOverlay.utils.js';

const CHECKOUT_STEPS = ["authentication", "billing", "payment", "purchasing", "confirmation"];
function useCheckoutModalState({ invoiceID: initialInvoiceID = null, productConfirmationEnabled, isAuthenticated, onError, }) {
    const startAt = !isAuthenticated || productConfirmationEnabled ? "authentication" : "billing";
    const [{ checkoutStep, checkoutError, isDialogBlocked, }, setCheckoutModalState] = useState({
        checkoutStep: startAt,
        isDialogBlocked: false,
    });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
        billingInfo: "",
        paymentInfo: "",
        cvv: "",
    });
    const [{ invoiceID, paymentReferenceNumber, }, setPurchaseState] = useState({
        invoiceID: initialInvoiceID || null,
        paymentReferenceNumber: "",
    });
    const initModalState = useCallback(() => {
        // Make sure the progress tracker in BillingView and PaymentView is properly animated:
        resetStepperProgress();
        // Once authentication has loaded, we know if we need to skip the product confirmation step or not. Also, when the
        // modal is re-opened, we need to reset its state, taking into account if we need to resume a Plaid OAuth flow:s
        const savedFlow = continueFlows();
        // if (savedFlow.checkoutStep !== "") {
        //   clearPersistedInfo();
        //   clearPlaidInfo();
        // }
        setCheckoutModalState({
            checkoutStep: savedFlow.checkoutStep || startAt,
            checkoutError: savedFlow.checkoutError,
            isDialogBlocked: false,
        });
        // setCheckoutModalState({ checkoutStep: "error", checkoutError: { errorMessage: "test" } });
        // setCheckoutModalState({ checkoutStep: "purchasing" });
        setSelectedPaymentMethod({
            billingInfo: savedFlow.billingInfo || "",
            paymentInfo: savedFlow.paymentInfo || "",
            cvv: "",
        });
        setPurchaseState({
            invoiceID: savedFlow.invoiceID || "",
            paymentReferenceNumber: savedFlow.paymentReferenceNumber || "",
        });
    }, [startAt]);
    const goBack = useCallback(() => {
        setCheckoutModalState(({ checkoutStep, checkoutError }) => ({
            checkoutStep: CHECKOUT_STEPS[Math.max(CHECKOUT_STEPS.indexOf(checkoutStep) - 1, 0)],
            checkoutError,
            isDialogBlocked: false,
        }));
    }, []);
    const goNext = useCallback(() => {
        setCheckoutModalState(({ checkoutStep, checkoutError }) => ({
            checkoutStep: CHECKOUT_STEPS[Math.min(CHECKOUT_STEPS.indexOf(checkoutStep) + 1, CHECKOUT_STEPS.length - 1)],
            checkoutError,
            isDialogBlocked: false,
        }));
    }, []);
    const goTo = useCallback((checkoutStep = startAt, error) => {
        setCheckoutModalState((prevCheckoutModalState) => {
            let checkoutError;
            if (error === null)
                checkoutError = undefined;
            else if (!error)
                checkoutError = prevCheckoutModalState.checkoutError;
            else if (typeof error === "string")
                checkoutError = { errorMessage: error };
            else
                checkoutError = error;
            return checkoutError ? { checkoutStep, checkoutError, isDialogBlocked: false } : { checkoutStep, isDialogBlocked: false };
        });
    }, [startAt]);
    const setError = useCallback((error) => {
        const nextCheckoutError = typeof error === "string" ? { errorMessage: error || ERROR_PURCHASE().errorMessage } : error;
        if (onError)
            onError(nextCheckoutError);
        setCheckoutModalState({
            checkoutStep: "error",
            checkoutError: nextCheckoutError,
            isDialogBlocked: false,
        });
    }, [onError]);
    const setIsDialogBlocked = useCallback((isDialogBlocked) => {
        setCheckoutModalState(({ checkoutStep, checkoutError }) => ({
            checkoutStep,
            checkoutError,
            isDialogBlocked,
        }));
    }, []);
    const setInvoiceID = useCallback((invoiceID) => {
        setPurchaseState({ invoiceID, paymentReferenceNumber: "" });
    }, []);
    const setPaymentReferenceNumber = useCallback((paymentReferenceNumber) => {
        setPurchaseState(({ invoiceID }) => ({ invoiceID, paymentReferenceNumber }));
    }, []);
    return {
        // CheckoutModalState:
        checkoutStep,
        checkoutError,
        isDialogBlocked,
        initModalState,
        goBack,
        goNext,
        goTo,
        setError,
        setIsDialogBlocked,
        // SelectedPaymentMethod:
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        // PurchaseState:
        invoiceID,
        paymentReferenceNumber,
        setInvoiceID,
        setPaymentReferenceNumber,
    };
}

export { CHECKOUT_STEPS, useCheckoutModalState };
//# sourceMappingURL=CheckoutOverlay.hooks.js.map