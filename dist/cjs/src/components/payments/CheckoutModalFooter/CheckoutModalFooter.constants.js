'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LockIcon = require('@mui/icons-material/Lock');
var ChevronRightIcon = require('@mui/icons-material/ChevronRight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var LockIcon__default = /*#__PURE__*/_interopDefaultLegacy(LockIcon);
var ChevronRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronRightIcon);

const LABELS_BY_VARIANT = {
    toGuestCheckout: "Guest Check Out",
    toPayment: "Continue to Payment",
    toConfirmation: "Purchase",
    toPlaid: "Purchase with Plaid",
    toReview: "Review Information",
    toMarketplace: "Back to Marketplace",
};
const ICONS_BY_VARIANT = {
    toGuestCheckout: null,
    toPayment: ChevronRightIcon__default["default"],
    toConfirmation: LockIcon__default["default"],
    toPlaid: LockIcon__default["default"],
    toReview: null,
    toMarketplace: null,
};

exports.ICONS_BY_VARIANT = ICONS_BY_VARIANT;
exports.LABELS_BY_VARIANT = LABELS_BY_VARIANT;
//# sourceMappingURL=CheckoutModalFooter.constants.js.map
