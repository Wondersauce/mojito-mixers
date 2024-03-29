// Dev / Debug Stuff:
const DEV_DEBUG_COUNTER_EXPIRATION_MS = 1000;
const DEV_DEBUG_COUNTER_CLICKS_NEEDED = 16;
const DEV_SKIP_PAYMENT_REDIRECT_IN_LOCALHOST = false;
const DEV_DEBUG_ENABLED_KEY = "DEV_DEBUG_ENABLED";
// Errors:
const ASYNC_ERROR_MAX_WAIT_MS = 16000; // (16 sec) Max. wait time for ErrorView.tsx to fallback to ERROR_GENERIC if errorMessage is not provided.
// Invoice / Reservation:
const RESERVATION_COUNTDOWN_FROM_MIN = 15;
const RESERVATION_COUNTDOWN_FROM_MS = RESERVATION_COUNTDOWN_FROM_MIN * 60 * 1000;
const RESERVATION_COUNTDOWN_REFRESH_RATE_MS = 1000;
// Purchase:
const PURCHASING_MIN_WAIT_MS = 2500; // PurchasingView will be visible for at least 2.5 seconds (but it will rarely be that low)
const PURCHASING_MESSAGES_INTERVAL_MS = 5000; // PurchasingView will loop over the following messages, one every 5 seconds.
const PURCHASING_MESSAGES_DEFAULT = [
    "Muddling mint and lime.",
    "Topping up with club soda.",
    "Adding rum, lime juice and ice.",
    "Shaking things up!",
];
// Payment Method:
const PAYMENT_CREATION_INTERVAL_MS = 5000; // (5 sec) Polling interval for GetPaymentMethodStatus.
const PAYMENT_CREATION_MAX_WAIT_MS = 120000; // (2 min) Max. wait time for GetPaymentMethodStatus (to get status === "complete").
const PAYMENT_CREATION_TIMEOUT_MS = PAYMENT_CREATION_MAX_WAIT_MS * 2; // (4 min) Max. time a user would be stuck in the PurchasingView before throwing an error (for all the above).
const PAYMENT_NOTIFICATION_INTERVAL_MS = 2500; // (2.5 sec) Polling interval for GetPaymentNotificationQuery in PurchasingView.
const PAYMENT_NOTIFICATION_ERROR_MAX_WAIT_MS = ASYNC_ERROR_MAX_WAIT_MS - 1000; // (15 sec) Max. wait time for GetPaymentNotificationQuery to get the error details in ErrorOverlay.tsx.
// Storage:
const CHECKOUT_MODAL_INFO_KEY_PREFIX = "CHECKOUT_MODAL_INFO__";
const CHECKOUT_MODAL_INFO_KEY_REGEXP = /^CHECKOUT_MODAL_INFO__/;
const CHECKOUT_MODAL_INFO_KEY = (key = "") => `${CHECKOUT_MODAL_INFO_KEY_PREFIX}${key}`;
const CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX = "PLAID";
const CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY = "CHECKOUT_MODAL_INFO_REDIRECT_URI";
const CHECKOUT_MODAL_INFO_USED_KEY = "CHECKOUT_MODAL_INFO_USED";
// Plaid:
const PLAID_STORAGE_EXPIRATION_MS = 15 * 60000; // 15 minutes (Plaid requires filling in some data).
const PLAID_OAUTH_FLOW_URL_SEARCH = "?oauth_state_id=";
// 3DS:
const THREEDS_STORAGE_EXPIRATION_MS = 7 * 60000; // 7 minutes (3DS will also ask for some information (in PROD only)).
const THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY = "paymentId";
const THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY = "paymentError";
const THREEDS_SUCCESS_URL_REG_EXP = /success/;
const THREEDS_ERROR_URL_REG_EXP = /payments\/(error|failure)/;
const THREEDS_REDIRECT_DELAY_MS = 1000; // (1 sec) Small delay before redirecting users to 3DS' page (PurchasingView => 3DS)
const THREEDS_SUCCESS_REDIRECT_DELAY_MS = 5000; // Success page redirects users automatically after 5 seconds (SuccessView => ConfirmationView)
const COINBASE_URL_REG_EXP = /coinbase/;

export { ASYNC_ERROR_MAX_WAIT_MS, CHECKOUT_MODAL_INFO_KEY, CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX, CHECKOUT_MODAL_INFO_KEY_PREFIX, CHECKOUT_MODAL_INFO_KEY_REGEXP, CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY, CHECKOUT_MODAL_INFO_USED_KEY, COINBASE_URL_REG_EXP, DEV_DEBUG_COUNTER_CLICKS_NEEDED, DEV_DEBUG_COUNTER_EXPIRATION_MS, DEV_DEBUG_ENABLED_KEY, DEV_SKIP_PAYMENT_REDIRECT_IN_LOCALHOST, PAYMENT_CREATION_INTERVAL_MS, PAYMENT_CREATION_MAX_WAIT_MS, PAYMENT_CREATION_TIMEOUT_MS, PAYMENT_NOTIFICATION_ERROR_MAX_WAIT_MS, PAYMENT_NOTIFICATION_INTERVAL_MS, PLAID_OAUTH_FLOW_URL_SEARCH, PLAID_STORAGE_EXPIRATION_MS, PURCHASING_MESSAGES_DEFAULT, PURCHASING_MESSAGES_INTERVAL_MS, PURCHASING_MIN_WAIT_MS, RESERVATION_COUNTDOWN_FROM_MIN, RESERVATION_COUNTDOWN_FROM_MS, RESERVATION_COUNTDOWN_REFRESH_RATE_MS, THREEDS_ERROR_URL_REG_EXP, THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY, THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY, THREEDS_REDIRECT_DELAY_MS, THREEDS_STORAGE_EXPIRATION_MS, THREEDS_SUCCESS_REDIRECT_DELAY_MS, THREEDS_SUCCESS_URL_REG_EXP };
//# sourceMappingURL=config.js.map
