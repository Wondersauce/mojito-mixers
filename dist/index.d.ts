/// <reference types="react" />
import React$1, { ErrorInfo } from 'react';
import { Theme, ThemeOptions, SxProps } from '@mui/material/styles';
export { Theme as CheckoutModalTheme, ThemeOptions as CheckoutModalThemeOptions } from '@mui/material/styles';
import { ApolloError, ApolloClient, NormalizedCacheObject } from '@apollo/client';

declare type UserFormat = "username" | "email" | "name";

declare type PaymentType = "CreditCard" | "ACH" | "Wire" | "Crypto";

declare type LotType = "auction" | "buyNow";
interface CheckoutItemInfo {
    lotID: string;
    lotType: LotType;
    name: string;
    description: string;
    imageSrc: string;
    imageBackground: string;
    collectionItemId: string;
    totalSupply: number;
    remainingSupply: number;
    units: number;
    fee: number;
}
interface CheckoutItem extends CheckoutItemInfo {
    unitPrice: number;
    taxes: number;
    totalPrice: number;
}

declare type ShippingMethod = "custom wallet" | "multisig wallet";
interface CheckoutEventData {
    step: number;
    stepName: string;
    departmentCategory: "NFT";
    paymentType?: PaymentType;
    shippingMethod: ShippingMethod;
    checkoutItems: CheckoutItem[];
    currency: "USD";
    revenue: number;
    fees: number;
    tax?: number;
    total: number;
    processorPaymentID?: string;
    paymentID?: string;
}
declare type CheckoutModalNavigateType = "navigate:authentication" | "navigate:billing" | "navigate:payment" | "navigate:purchasing" | "navigate:confirmation" | "navigate:error";
declare type CheckoutModalEventType = "event:paymentSuccess" | "event:paymentError";
declare type CheckoutEventType = CheckoutModalNavigateType | CheckoutModalEventType;

declare type ConsentType = "disclaimer" | "checkbox" | "circle";

interface SelectOption<V = string | number> {
    value: V;
    label: string;
}

interface Network {
    id: string;
    name: string;
}

declare const FULL_NAME_FIELD = "fullName";
declare const EMAIL_FIELD = "email";
declare const PHONE_FIELD = "phone";
declare const STREET_FIELD = "street";
declare const APARTMENT_FIELD = "apartment";
declare const ZIP_CODE_FIELD = "zipCode";
declare const CITY_FIELD = "city";
declare const STATE_FIELD = "state";
declare const COUNTRY_FIELD = "country";
declare type BillingInfo = {
    [FULL_NAME_FIELD]: string;
    [EMAIL_FIELD]: string;
    [PHONE_FIELD]: string;
    [STREET_FIELD]: string;
    [APARTMENT_FIELD]: string;
    [ZIP_CODE_FIELD]: string;
    [CITY_FIELD]: string;
    [STATE_FIELD]: SelectOption;
    [COUNTRY_FIELD]: SelectOption;
};

declare type CircleFieldErrorAt = "billing" | "payment";
interface CircleFieldErrors {
    summary: string;
    billing?: Record<string, string>;
    payment?: Record<string, string>;
    unknown?: Record<string, string>;
    firstAt: CircleFieldErrorAt;
}

declare type FlowType = "" | "3DS" | "Plaid" | "Coinbase";
interface CheckoutModalInfoCommon {
    url?: string;
    fromLocalhost?: boolean;
    orgID: string;
    invoiceID: string;
    invoiceCountdownStart: number;
    billingInfo: string | BillingInfo;
}
interface CheckoutModalInfo3DS extends CheckoutModalInfoCommon {
    processorPaymentID: string;
    paymentID: string;
    paymentInfo: string;
    checkoutItems: CheckoutItemInfo[];
}
interface CheckoutModalInfoPlaid extends CheckoutModalInfoCommon {
    linkToken: string;
}
interface CheckoutModalStateCommon extends CheckoutModalInfoCommon {
    flowType: FlowType;
    checkoutStep: CheckoutModalStep | "";
    receivedRedirectUri?: string;
    savedInfoUsed: boolean;
    continueFlow: boolean;
}
interface CheckoutModalState3DS extends CheckoutModalStateCommon, CheckoutModalInfo3DS {
    purchaseSuccess: boolean;
    purchaseError: boolean;
}
declare type CheckoutModalStatePlaid = CheckoutModalStateCommon & CheckoutModalInfoPlaid;
declare type CheckoutModalStateCombined = CheckoutModalState3DS & CheckoutModalStatePlaid;

declare type CheckoutModalErrorAt = "close" | "reset" | "authentication" | "billing" | "payment" | "purchasing";
interface CheckoutModalError {
    at?: CheckoutModalErrorAt;
    error?: ApolloError | Error;
    circleFieldErrors?: CircleFieldErrors;
    errorMessage: string;
}
declare type CheckoutModalStep = "authentication" | "billing" | "payment" | "purchasing" | "confirmation" | "error";

interface AuthorizedApolloProviderProps {
    apolloClient?: ApolloClient<NormalizedCacheObject> | null;
    uri: string;
    getAuthenticationToken: (() => Promise<string | undefined>) | null;
    children?: React$1.ReactNode;
}

interface CommonProviderProps {
    onCatch?: (error: Error, errorInfo?: ErrorInfo) => void | true;
}
interface ThemeProviderProps extends CommonProviderProps {
    theme?: Theme;
    themeOptions?: ThemeOptions;
}
declare type ProvidersInjectorProps = ThemeProviderProps & AuthorizedApolloProviderProps;

declare type PUIDictionarySingleLine = string | React.ReactElement;
declare type PUIDictionaryMultiLine = PUIDictionarySingleLine[];
declare type PUIDictionary = {
    walletInfo: PUIDictionarySingleLine;
    walletMultiSigTooltip: PUIDictionarySingleLine;
    wirePaymentsDisclaimer: PUIDictionaryMultiLine;
    purchaseInstructions: PUIDictionaryMultiLine;
    privacyHref?: string;
    termsOfUseHref?: string;
    goToMarketplaceHref?: string;
    goToMarketplaceLabel?: string;
    goToHref?: string;
    goToLabel?: string;
};
declare type PUIDictionaryKeys = keyof PUIDictionary;

declare type CreditCardNetwork = "amex" | "dinersclub" | "discover" | "hipercard" | "jcb" | "unionpay" | "mastercard" | "maestro" | "elo" | "visa" | "placeholder";

interface PUIRouterOptions {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
    replace?: boolean;
    reason?: string;
}

declare type LoaderMode$1 = "default" | "success" | "error";
interface PUICheckoutOverlayProps {
    open: boolean;
    onClose?: () => void;
    onGoTo: (pathnameOrUrl: string, options?: PUIRouterOptions) => void;
    loaderMode?: LoaderMode$1;
    paymentIdParam?: string;
    paymentErrorParam?: string;
    guestCheckoutEnabled?: boolean;
    productConfirmationEnabled?: boolean;
    vertexEnabled?: boolean;
    threeDSEnabled?: boolean;
    coinbaseSuccessURL?: string;
    coinbaseErrorURL?: string;
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
declare type PUICheckoutProps = PUICheckoutOverlayProps & ProvidersInjectorProps;
declare type PUICheckoutComponentProps = Partial<PUICheckoutProps> & Pick<PUICheckoutProps, "open" | "loaderMode" | "paymentErrorParam">;
declare const PUICheckout: React$1.FC<PUICheckoutProps>;

interface SuccessViewProps {
    successImageSrc?: string;
}

interface PUIStaticSuccessOverlayProps extends SuccessViewProps {
    logoSrc?: string;
    logoSx?: SxProps<Theme>;
}

interface PUISuccessOverlayProps extends PUIStaticSuccessOverlayProps {
    onGoTo: (pathnameOrUrl: string, options?: PUIRouterOptions) => void;
}
declare type PUISuccessProps$1 = PUISuccessOverlayProps & ThemeProviderProps;
declare const PUISuccess: React$1.FC<PUISuccessProps$1>;

interface ErrorViewProps {
    checkoutError?: CheckoutModalError;
    reviewHref?: string;
    errorImageSrc?: string;
    onFixError?: (errorMessage: string) => Promise<false>;
    onClose?: () => void;
    debug?: boolean;
}

interface PUIStaticErrorOverlayProps extends ErrorViewProps {
    logoSrc?: string;
    logoSx?: SxProps<Theme>;
}

interface PUIErrorOverlayProps extends PUIStaticErrorOverlayProps {
    onGoTo: (pathnameOrUrl: string, options?: PUIRouterOptions) => void;
}
declare type PUIErrorProps = PUIErrorOverlayProps & ProvidersInjectorProps;
declare const PUIError: React$1.FC<PUIErrorProps>;

interface PUIPlaidOverlayProps {
    onRedirect: (pathnameOrUrl: string) => void;
}
declare type PUISuccessProps = PUIPlaidOverlayProps & ThemeProviderProps;
declare const PUIPlaid: React$1.FC<PUISuccessProps>;

declare type LoaderMode = "default" | "success" | "error";
interface UseOpenCloseCheckoutModalState {
    loaderMode: LoaderMode;
    isOpen: boolean;
}
interface UseOpenCloseCheckoutModalReturn extends UseOpenCloseCheckoutModalState {
    onOpen: () => void;
    onClose: () => void;
}
interface UseOpenCloseCheckoutModalOptions {
    paymentIdParam?: string;
    paymentErrorParam?: string;
}
declare function useOpenCloseCheckoutModal({ paymentIdParam, paymentErrorParam, }: UseOpenCloseCheckoutModalOptions): UseOpenCloseCheckoutModalReturn;

declare function continuePlaidOAuthFlow(): boolean;

declare function persistCheckoutModalInfoRedirectURI(redirectUri: string): void;
declare function persistCheckoutModalInfoUsed(used?: boolean): void;
interface GetCheckoutModalStateOptions {
    paymentIdParam?: string;
    noClear?: boolean;
}
declare function getCheckoutModalState({ paymentIdParam, noClear, }: GetCheckoutModalStateOptions): CheckoutModalStateCombined;

declare const extendDefaultTheme: (themeOptions?: ThemeOptions) => Theme;
declare const MOJITO_LIGHT_THEME: Theme;
declare const MOJITO_DARK_THEME: Theme;

declare const THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY = "paymentId";
declare const THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY = "paymentError";

interface PalettePaymentUI {
    progressBar?: string;
    paymentMethodSelectorBorder?: string;
    paymentMethodSelectorBackground?: string;
    mainButtonBackground?: string;
    mainButtonBorderWidth?: number;
}

export { CheckoutEventData, CheckoutEventType, CheckoutItem, CheckoutModalError, CheckoutModalErrorAt, CircleFieldErrorAt, CircleFieldErrors, LoaderMode$1 as LoaderMode, MOJITO_DARK_THEME, MOJITO_LIGHT_THEME, PUICheckout, PUICheckoutComponentProps, PUICheckoutProps, PUIDictionary, PUIDictionaryKeys, PUIDictionaryMultiLine, PUIDictionarySingleLine, PUIError, PUIErrorProps, PUIPlaid, PUIRouterOptions, PUISuccess, PUISuccessProps$1 as PUISuccessProps, PalettePaymentUI, PaymentType, THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY, THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY, UserFormat, continuePlaidOAuthFlow, extendDefaultTheme, getCheckoutModalState, persistCheckoutModalInfoRedirectURI, persistCheckoutModalInfoUsed, useOpenCloseCheckoutModal };
