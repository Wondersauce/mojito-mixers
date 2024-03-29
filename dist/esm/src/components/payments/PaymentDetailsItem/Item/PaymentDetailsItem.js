import { __rest } from '../../../../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { PaymentDetailsFragment } from '../Fragment/PaymentDetailsFragment.js';
import { SavedItem } from '../../SavedItem/SavedItem.js';

const PAYMENT_METHOD_CC_ITEM_LABELS = {
    select: "Use Card",
};
const PAYMENT_METHOD_ACH_ITEM_LABELS = {
    select: "Use Bank",
};
const PAYMENT_METHOD_WIRE_ITEM_LABELS = {
    select: "Use Wire",
};
const PAYMENT_METHOD_CRYPTO_ITEM_LABELS = {
    select: "Use Wallet",
};
const PAYMENT_METHOD_ITEM_LABELS = {
    CreditCard: PAYMENT_METHOD_CC_ITEM_LABELS,
    ACH: PAYMENT_METHOD_ACH_ITEM_LABELS,
    Wire: PAYMENT_METHOD_WIRE_ITEM_LABELS,
    Crypto: PAYMENT_METHOD_CRYPTO_ITEM_LABELS,
};
const PaymentDetailsItem = (_a) => {
    var { data: savedPaymentMethod, additionalProps: savedItemProps, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    index } = _a, boxProps = __rest(_a, ["data", "additionalProps", "children", "index"]);
    let disabled = savedItemProps === null || savedItemProps === void 0 ? void 0 : savedItemProps.disabled;
    let status;
    if (savedPaymentMethod.status === "pending") {
        disabled = disabled || "selectOnly";
        // TODO: Should there be a way to re-fetch to see if payment methods in "pending" state move to "complete"?
        status = {
            label: "Awaiting Approval",
            tooltip: "Sorry, this payment method is awaiting approval and can't be used yet. Please, try again later.",
            color: "warning",
        };
    }
    else if (savedPaymentMethod.status === "failed") {
        disabled = disabled || "selectOnly";
        status = {
            label: "Error",
            tooltip: "Sorry, there was an error with this payment method. Please, remove it and try again.",
            color: "error",
        };
    }
    return (React__default.createElement(SavedItem, Object.assign({}, savedItemProps, { variant: "row", labels: PAYMENT_METHOD_ITEM_LABELS[savedPaymentMethod.type], disabled: disabled, status: status, id: savedPaymentMethod.id, boxProps: boxProps, cvvLabel: savedPaymentMethod.type === "CreditCard" ? savedItemProps === null || savedItemProps === void 0 ? void 0 : savedItemProps.cvvLabel : undefined, cvvError: savedPaymentMethod.type === "CreditCard" ? savedItemProps === null || savedItemProps === void 0 ? void 0 : savedItemProps.cvvError : undefined, onCvvChange: savedPaymentMethod.type === "CreditCard" ? savedItemProps === null || savedItemProps === void 0 ? void 0 : savedItemProps.onCvvChange : undefined }),
        React__default.createElement(PaymentDetailsFragment, { savedPaymentMethod: savedPaymentMethod })));
};

export { PaymentDetailsItem };
//# sourceMappingURL=PaymentDetailsItem.js.map
