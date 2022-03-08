'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Debug Mode:
const COUNTER_EXPIRATION_MS = 1000;
const COUNTER_CLICKS_NEEDED = 16;
// Invoice / Reservation:
const RESERVATION_COUNTDOWN_FROM_MIN = 15;
const RESERVATION_COUNTDOWN_FROM_MS = RESERVATION_COUNTDOWN_FROM_MIN * 60 * 1000;
const RESERVATION_COUNTDOWN_REFRESH_RATE_MS = 1000;
// Purchase:
const PURCHASING_MIN_WAIT_MS = 3000; // PurchasingView will be visible for at least 3 seconds.
const PURCHASING_MESSAGES_INTERVAL_MS = 5000; // PurchasingView will loop over the following messages, one every 5 seconds.
const PURCHASING_MESSAGES_DEFAULT = [
    "Muddling mint and lime.",
    "Topping up with club soda.",
    "Adding rum, lime juice and ice.",
    "Shaking things up!",
];
const PAYMENT_NOTIFICATION_INTERVAL_MS = 1500; // Polling interval for GetPaymentNotificationQuery.
// Plaid:
const PLAID_STORAGE_EXPIRATION_MS = 1000 * 60 * 15; // 15 minutes (Plaid requires filling in some data).
const PLAID_OAUTH_FLOW_INFO_KEY = "PLAID_OAUTH_FLOW_INFO";
const PLAID_OAUTH_FLOW_RECEIVED_REDIRECT_URI_KEY = "PLAID_OAUTH_FLOW_RECEIVED_REDIRECT_URI";
const PLAID_OAUTH_FLOW_STATE_USED_KEY = "PLAID_OAUTH_FLOW_STATE_USED";
const PLAID_OAUTH_FLOW_URL_SEARCH = "?oauth_state_id=";
// 3DS:
const THREEDS_STORAGE_EXPIRATION_MS = 1000 * 60 * 7; // 7 minutes (3DS will also ask for some information (in PROD only)).
const THREEDS_FLOW_INFO_KEY = "THREEDS_FLOW_INFO";
const THREEDS_FLOW_RECEIVED_REDIRECT_URI_KEY = "THREEDS_FLOW_RECEIVED_REDIRECT_URI";
const THREEDS_FLOW_STATE_USED_KEY = "THREEDS_FLOW_STATE_USED";
const THREEDS_FLOW_URL_SEARCH = "?paymentId=";
const THREEDS_SUCCESS_REDIRECT_DELAY_MS = 5000; // Success page redirects users automatically after 5 seconds.

exports.COUNTER_CLICKS_NEEDED = COUNTER_CLICKS_NEEDED;
exports.COUNTER_EXPIRATION_MS = COUNTER_EXPIRATION_MS;
exports.PAYMENT_NOTIFICATION_INTERVAL_MS = PAYMENT_NOTIFICATION_INTERVAL_MS;
exports.PLAID_OAUTH_FLOW_INFO_KEY = PLAID_OAUTH_FLOW_INFO_KEY;
exports.PLAID_OAUTH_FLOW_RECEIVED_REDIRECT_URI_KEY = PLAID_OAUTH_FLOW_RECEIVED_REDIRECT_URI_KEY;
exports.PLAID_OAUTH_FLOW_STATE_USED_KEY = PLAID_OAUTH_FLOW_STATE_USED_KEY;
exports.PLAID_OAUTH_FLOW_URL_SEARCH = PLAID_OAUTH_FLOW_URL_SEARCH;
exports.PLAID_STORAGE_EXPIRATION_MS = PLAID_STORAGE_EXPIRATION_MS;
exports.PURCHASING_MESSAGES_DEFAULT = PURCHASING_MESSAGES_DEFAULT;
exports.PURCHASING_MESSAGES_INTERVAL_MS = PURCHASING_MESSAGES_INTERVAL_MS;
exports.PURCHASING_MIN_WAIT_MS = PURCHASING_MIN_WAIT_MS;
exports.RESERVATION_COUNTDOWN_FROM_MIN = RESERVATION_COUNTDOWN_FROM_MIN;
exports.RESERVATION_COUNTDOWN_FROM_MS = RESERVATION_COUNTDOWN_FROM_MS;
exports.RESERVATION_COUNTDOWN_REFRESH_RATE_MS = RESERVATION_COUNTDOWN_REFRESH_RATE_MS;
exports.THREEDS_FLOW_INFO_KEY = THREEDS_FLOW_INFO_KEY;
exports.THREEDS_FLOW_RECEIVED_REDIRECT_URI_KEY = THREEDS_FLOW_RECEIVED_REDIRECT_URI_KEY;
exports.THREEDS_FLOW_STATE_USED_KEY = THREEDS_FLOW_STATE_USED_KEY;
exports.THREEDS_FLOW_URL_SEARCH = THREEDS_FLOW_URL_SEARCH;
exports.THREEDS_STORAGE_EXPIRATION_MS = THREEDS_STORAGE_EXPIRATION_MS;
exports.THREEDS_SUCCESS_REDIRECT_DELAY_MS = THREEDS_SUCCESS_REDIRECT_DELAY_MS;
//# sourceMappingURL=config.js.map
