import LockIcon from '@mui/icons-material/Lock';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
    toPayment: ChevronRightIcon,
    toConfirmation: LockIcon,
    toPlaid: LockIcon,
    toReview: null,
    toMarketplace: null,
};

export { ICONS_BY_VARIANT, LABELS_BY_VARIANT };
//# sourceMappingURL=CheckoutModalFooter.constants.js.map
