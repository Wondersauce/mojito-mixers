import React from "react";
import { ConsentType } from "../../shared/ConsentText/ConsentText";
export declare type CheckoutModalFooterVariant = "toGuestCheckout" | "toPayment" | "toConfirmation" | "toPlaid" | "toReview" | "toMarketplace";
export interface CheckoutModalFooterProps {
    variant: CheckoutModalFooterVariant;
    guestCheckoutEnabled?: boolean;
    consentType?: ConsentType;
    submitHref?: string;
    submitLabel?: string;
    submitDisabled?: boolean;
    submitLoading?: boolean;
    onSubmitClicked?: (canSubmit: boolean) => void | Promise<void | false>;
    closeHref?: string;
    closeLabel?: string;
    closeDisabled?: boolean;
    onCloseClicked?: () => void;
    goToHref?: string;
    goToLabel?: string;
    onGoTo?: (pathnameOrUrl: string) => void;
}
export declare const CheckoutModalFooter: React.FC<CheckoutModalFooterProps>;
