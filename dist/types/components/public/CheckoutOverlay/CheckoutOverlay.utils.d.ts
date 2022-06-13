import { CheckoutModalInfo, CheckoutModalInfo3DS, CheckoutModalInfoPlaid, CheckoutModalStateCombined } from "./CheckoutOverlay.types";
export declare function isCheckoutModalInfo3DS(checkoutModalInfo: Partial<CheckoutModalInfo3DS | CheckoutModalInfoPlaid>): checkoutModalInfo is CheckoutModalInfo3DS;
export declare function isCheckoutModalInfoPlaid(checkoutModalInfo: Partial<CheckoutModalInfo3DS | CheckoutModalInfoPlaid>): checkoutModalInfo is CheckoutModalInfoPlaid;
export declare function persistCheckoutModalInfo(info: CheckoutModalInfo): void;
export declare function persistCheckoutModalInfoRedirectURI(redirectUri: string): void;
export declare function persistCheckoutModalInfoUsed(used?: boolean): void;
export declare function clearPersistedInfo(): void;
export interface GetCheckoutModalStateOptions {
    paymentIdParam?: string;
    noClear?: boolean;
}
export declare function getCheckoutModalState({ paymentIdParam, noClear, }: GetCheckoutModalStateOptions): CheckoutModalStateCombined;
export declare function isInitiallyOpen(paymentIdParam?: string): boolean;
