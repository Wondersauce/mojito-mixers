import React from "react";
import { UserFormat } from "../../../domain/auth/authentication.interfaces";
import { PaymentType } from "../../../domain/payment/payment.interfaces";
import { CheckoutEventData, CheckoutEventType } from "../../../domain/events/events.interfaces";
import { CheckoutItemInfo } from "../../../domain/product/product.interfaces";
import { Theme, SxProps } from "@mui/material/styles";
import { ConsentType } from "../../shared/ConsentText/ConsentText";
import { CheckoutModalError } from "./CheckoutOverlay.hooks";
import { ProvidersInjectorProps } from "../../shared/ProvidersInjector/ProvidersInjector";
import { PUIDictionary } from "../../../domain/dictionary/dictionary.interfaces";
import { Network } from "../../../domain/network/network.interfaces";
import { CreditCardNetwork } from "../../../domain/react-payment-inputs/react-payment-inputs.utils";
import { LoaderMode } from "../useOpenCloseCheckoutModal/useOpenCloseCheckoutModal";
export interface PUICheckoutOverlayProps {
    open: boolean;
    onClose: () => void;
    onGoTo?: () => void;
    goToHref?: string;
    goToLabel?: string;
    loaderMode?: LoaderMode;
    paymentErrorParam?: string;
    onRemoveUrlParams: (cleanURL: string) => void;
    guestCheckoutEnabled?: boolean;
    productConfirmationEnabled?: boolean;
    vertexEnabled?: boolean;
    threeDSEnabled?: boolean;
    logoSrc?: string;
    logoSx?: SxProps<Theme>;
    loaderImageSrc?: string;
    purchasingImageSrc?: string;
    purchasingMessages?: false | string[];
    successImageSrc?: string;
    errorImageSrc?: string;
    userFormat?: UserFormat;
    acceptedPaymentTypes?: PaymentType[];
    acceptedCreditCardNetworks?: CreditCardNetwork[];
    network?: Network;
    paymentLimits?: Partial<Record<PaymentType, number>>;
    dictionary?: Partial<PUIDictionary>;
    consentType?: ConsentType;
    orgID: string;
    invoiceID?: string;
    checkoutItems: CheckoutItemInfo[];
    onLogin: () => void;
    isAuthenticated?: boolean;
    isAuthenticatedLoading?: boolean;
    debug?: boolean;
    onEvent?: (eventType: CheckoutEventType, eventData: CheckoutEventData) => void;
    onError?: (error: CheckoutModalError) => void;
}
export declare type PUICheckoutProps = PUICheckoutOverlayProps & ProvidersInjectorProps;
export declare const PUICheckoutOverlay: React.FC<PUICheckoutOverlayProps>;
export declare const PUICheckout: React.FC<PUICheckoutProps>;
