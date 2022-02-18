import React from "react";
import { UserFormat } from "../../../domain/auth/authentication.interfaces";
import { PaymentType } from "../../../domain/payment/payment.interfaces";
import { CheckoutItem } from "../../../domain/product/product.interfaces";
import { Theme, ThemeOptions, SxProps } from "@mui/material/styles";
import { ConsentType } from "../../shared/ConsentText/ConsentText";
import { CheckoutModalError } from "./CheckoutModal.hooks";
export interface CheckoutModalProps {
    open: boolean;
    onClose: () => void;
    guestCheckoutEnabled?: boolean;
    productConfirmationEnabled?: boolean;
    theme?: Theme;
    themeOptions?: ThemeOptions;
    logoSrc: string;
    logoSx?: SxProps<Theme>;
    loaderImageSrc: string;
    purchasingImageSrc: string;
    purchasingMessages?: false | string[];
    errorImageSrc: string;
    userFormat: UserFormat;
    acceptedPaymentTypes: PaymentType[];
    paymentLimits?: Partial<Record<PaymentType, number>>;
    purchaseInstructions: string;
    consentType?: ConsentType;
    privacyHref?: string;
    termsOfUseHref?: string;
    orgID: string;
    invoiceID?: string;
    checkoutItems: CheckoutItem[];
    onLogin: () => void;
    isAuthenticated?: boolean;
    isAuthenticatedLoading?: boolean;
    debug?: boolean;
    onError?: (error: CheckoutModalError) => void;
    onMarketingOptInChange?: (marketingOptIn: boolean) => void;
}
export declare const CheckoutModal: React.FC<CheckoutModalProps>;
