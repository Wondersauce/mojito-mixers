import { ACH_MASK_PREFIX, CREDIT_CARD_MASK_PREFIX, GENERIC_MASK_PREFIX } from '../../../domain/payment/payment.constants.js';

function isSavedPaymentMethod(paymentMethodInfo) {
    return !!paymentMethodInfo && paymentMethodInfo.hasOwnProperty("id");
}
function getFormattedPaymentMethod(paymentMethodInfo) {
    let isMasked = false;
    let paymentType = "CreditCard";
    let displayValue = "";
    let network = "";
    if (isSavedPaymentMethod(paymentMethodInfo)) {
        isMasked = true;
        if (paymentMethodInfo.type === "ACH") {
            paymentType = "ACH";
            displayValue = `${ACH_MASK_PREFIX} ${paymentMethodInfo.accountNumber}`;
        }
        else if (paymentMethodInfo.type === "CreditCard") {
            paymentType = "CreditCard";
            displayValue = `${CREDIT_CARD_MASK_PREFIX} ${paymentMethodInfo.last4Digit}`;
            network = paymentMethodInfo.network;
        }
        else if (paymentMethodInfo.type === "Crypto") {
            paymentType = "Crypto";
            displayValue = `${paymentMethodInfo.id}`;
        }
    }
    else if (paymentMethodInfo) {
        if (paymentMethodInfo.hasOwnProperty("cardNumber")) {
            displayValue = paymentMethodInfo.cardNumber;
        }
        else if (paymentMethodInfo.hasOwnProperty("accountNumber")) {
            displayValue = paymentMethodInfo.accountId;
        }
        else {
            isMasked = true;
            displayValue = GENERIC_MASK_PREFIX;
        }
    }
    else {
        isMasked = true;
        displayValue = GENERIC_MASK_PREFIX;
    }
    return {
        isMasked,
        paymentType,
        displayValue,
        network,
    };
}

export { getFormattedPaymentMethod };
//# sourceMappingURL=PurchaseConfirmationBillingDetails.utils.js.map
