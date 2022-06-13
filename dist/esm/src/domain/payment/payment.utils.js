import images from 'react-payment-inputs/images';
import { p as getExpiryDateError } from '../../../node_modules/react-payment-inputs/es/utils/validator-0f41e23d.js';
import 'react';
import 'styled-components';
import '../../../node_modules/react-payment-inputs/es/PaymentInputsWrapper.js';
import { CREDIT_CARD_NETWORKS, getCardTypeByValue } from '../react-payment-inputs/react-payment-inputs.utils.js';

function getCreditCardNetworkFromNumber(cardNumber) {
    var _a;
    return ((_a = getCardTypeByValue(cardNumber)) === null || _a === void 0 ? void 0 : _a.type) || "";
}
function getCreditCardNetworkFromLabel(network = "") {
    if (!network)
        return "";
    const creditCardNetwork = network.toLowerCase().replace(/\s/g, "");
    return CREDIT_CARD_NETWORKS.includes(creditCardNetwork) ? creditCardNetwork : "";
}
function getCreditCardNetworkImageFromLabel(network = "") {
    return getCreditCardNetworkFromLabel(network) || "placeholder";
}
function standaloneGetCardImageProps(network = "") {
    // See https://github.com/medipass/react-payment-inputs/blob/master/src/usePaymentInputs.js#L452
    const creditCardNetworkImage = getCreditCardNetworkImageFromLabel(network);
    return {
        "aria-label": network,
        children: images[creditCardNetworkImage] || images.placeholder,
        width: "1.5em",
        height: "1em",
        viewBox: "0 0 24 16",
    };
}
const getExpiryDateIsValid = (expiryDate) => !getExpiryDateError(expiryDate);
function getCvvIsValid(cvv = "", network = "", networks = [], required = true) {
    // if (required && !cvv) return false;
    // if (!required && !cvv) return true;
    const cvvLength = cvv.length;
    let cvvExpectedLength = "3 or 4";
    if ((!network && networks.length > 0 && !networks.includes("amex")) || network !== "amex") {
        cvvExpectedLength = 3;
    }
    else if ((!network && networks.length === 1 && networks.includes("amex")) || network === "amex") {
        cvvExpectedLength = 4;
    }
    return cvv ? {
        cvvLength,
        cvvExpectedLength,
        isCvvValid: cvvLength === cvvExpectedLength || ((cvvLength === 3 || cvvLength === 4) && cvvExpectedLength === "3 or 4"),
    } : {
        cvvLength,
        cvvExpectedLength,
        isCvvValid: !required,
    };
}
function transformRawRemainingItemLimit(rawRemainingItemLimit, itemsCount = 0) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    return {
        CreditCard: {
            purchase: ((_b = (_a = rawRemainingItemLimit === null || rawRemainingItemLimit === void 0 ? void 0 : rawRemainingItemLimit.creditCard) === null || _a === void 0 ? void 0 : _a.remainingTransaction) !== null && _b !== void 0 ? _b : Infinity) + itemsCount,
            total: ((_d = (_c = rawRemainingItemLimit === null || rawRemainingItemLimit === void 0 ? void 0 : rawRemainingItemLimit.creditCard) === null || _c === void 0 ? void 0 : _c.remainingTotal) !== null && _d !== void 0 ? _d : Infinity) + itemsCount,
        },
        ACH: {
            purchase: ((_f = (_e = rawRemainingItemLimit === null || rawRemainingItemLimit === void 0 ? void 0 : rawRemainingItemLimit.ach) === null || _e === void 0 ? void 0 : _e.remainingTransaction) !== null && _f !== void 0 ? _f : Infinity) + itemsCount,
            total: ((_h = (_g = rawRemainingItemLimit === null || rawRemainingItemLimit === void 0 ? void 0 : rawRemainingItemLimit.ach) === null || _g === void 0 ? void 0 : _g.remainingTotal) !== null && _h !== void 0 ? _h : Infinity) + itemsCount,
        },
        Wire: {
            purchase: ((_k = (_j = rawRemainingItemLimit === null || rawRemainingItemLimit === void 0 ? void 0 : rawRemainingItemLimit.wire) === null || _j === void 0 ? void 0 : _j.remainingTransaction) !== null && _k !== void 0 ? _k : Infinity) + itemsCount,
            total: ((_m = (_l = rawRemainingItemLimit === null || rawRemainingItemLimit === void 0 ? void 0 : rawRemainingItemLimit.wire) === null || _l === void 0 ? void 0 : _l.remainingTotal) !== null && _m !== void 0 ? _m : Infinity) + itemsCount,
        },
        // TODO: Update once crypto is added to ValidatePaymentLimitOutput:
        Crypto: {
            purchase: ((_p = (_o = rawRemainingItemLimit === null || rawRemainingItemLimit === void 0 ? void 0 : rawRemainingItemLimit.crypto) === null || _o === void 0 ? void 0 : _o.remainingTransaction) !== null && _p !== void 0 ? _p : Infinity) + itemsCount,
            total: ((_r = (_q = rawRemainingItemLimit === null || rawRemainingItemLimit === void 0 ? void 0 : rawRemainingItemLimit.crypto) === null || _q === void 0 ? void 0 : _q.remainingTotal) !== null && _r !== void 0 ? _r : Infinity) + itemsCount,
        },
    };
}

export { getCreditCardNetworkFromLabel, getCreditCardNetworkFromNumber, getCreditCardNetworkImageFromLabel, getCvvIsValid, getExpiryDateIsValid, standaloneGetCardImageProps, transformRawRemainingItemLimit };
//# sourceMappingURL=payment.utils.js.map
