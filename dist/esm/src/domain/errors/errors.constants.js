import { withFullNameErrorMessage } from '../../utils/validationUtils.js';

const BUILT_IN_ERRORS = ["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "AggregateError", "InternalError"];
const DEFAULT_ERROR_AT = "reset";
function createError(errorMessage, at) {
    const errorCreator = (error) => ({
        error,
        errorMessage,
        at,
    });
    errorCreator.errorMessage = errorMessage;
    return errorCreator;
}
// Generic:
const ERROR_GENERIC = createError("An unexpected error happened.", "close");
const ERROR_LOADING = createError("Loading error details...", "close");
const ERROR_LOADING_TIMEOUT = createError("The purchase could not be completed.", "payment");
// CheckoutModal:
const ERROR_LOADING_USER = createError("User could not be loaded.", "reset");
const ERROR_LOADING_PAYMENT_METHODS = createError("Payment methods could not be loaded.", "reset");
const ERROR_LOADING_INVOICE = createError("Invoice could not be loaded.", "reset");
const ERROR_INVOICE_TIMEOUT = createError("Your product reservation expired. Please, try to complete the purchase again in time.", "reset");
// PurchasingView / useFullPayment:
const ERROR_PURCHASE_TIMEOUT = createError("The purchase could not be completed in time.", "purchasing");
const ERROR_PURCHASE_NO_ITEMS = createError("No items to purchase.", "close");
const ERROR_PURCHASE_NO_UNITS = createError("No units to purchase.", "close");
const ERROR_PURCHASE_LOADING_ITEMS = createError("Purchase items could not be loaded.", "close");
const ERROR_PURCHASE_CREATING_INVOICE = createError("Invoice could not be created.", "reset");
const ERROR_PURCHASE_SELECTED_PAYMENT_METHOD = createError("Could not find the selected payment method.", "reset");
const ERROR_PURCHASE_CREATING_PAYMENT_METHOD = createError("Payment method could not be saved.", "billing");
const ERROR_PURCHASE_CVV = createError("Could not verify CVV.", "payment");
const ERROR_PURCHASE_PAYING = createError("Payment failed.", "purchasing");
// MAPPED ERRORS:
const MAPPED_ERRORS = {
    "lot auction not started": {
        errorLocation: "close",
        errorMessage: "The auction has not started yet.",
    },
    "payment limit exceeded": {
        errorLocation: "close",
        errorMessage: "You have already bought the maximum number of NFTs allowed for this sale.",
    },
    "name should contains first and last name": {
        errorLocation: "billing",
        fieldName: "fullName",
        errorMessage: withFullNameErrorMessage({ label: "Full Name" }),
    },
};

export { BUILT_IN_ERRORS, DEFAULT_ERROR_AT, ERROR_GENERIC, ERROR_INVOICE_TIMEOUT, ERROR_LOADING, ERROR_LOADING_INVOICE, ERROR_LOADING_PAYMENT_METHODS, ERROR_LOADING_TIMEOUT, ERROR_LOADING_USER, ERROR_PURCHASE_CREATING_INVOICE, ERROR_PURCHASE_CREATING_PAYMENT_METHOD, ERROR_PURCHASE_CVV, ERROR_PURCHASE_LOADING_ITEMS, ERROR_PURCHASE_NO_ITEMS, ERROR_PURCHASE_NO_UNITS, ERROR_PURCHASE_PAYING, ERROR_PURCHASE_SELECTED_PAYMENT_METHOD, ERROR_PURCHASE_TIMEOUT, MAPPED_ERRORS };
//# sourceMappingURL=errors.constants.js.map
