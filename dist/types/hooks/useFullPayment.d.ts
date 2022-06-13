import { CheckoutModalError, SelectedPaymentMethod } from "../components/public/CheckoutOverlay/CheckoutOverlay.hooks";
import { SavedPaymentMethod } from "../domain/circle/circle.interfaces";
import { PaymentStatus } from "../domain/payment/payment.interfaces";
import { CheckoutItem } from "../domain/product/product.interfaces";
import { Wallet } from "../domain/wallet/wallet.interfaces";
export declare function getLastPaymentMethodID(): string;
export interface UseFullPaymentOptions {
    orgID: string;
    invoiceID: string;
    checkoutItems: CheckoutItem[];
    savedPaymentMethods: SavedPaymentMethod[];
    selectedPaymentMethod: SelectedPaymentMethod;
    wallet: null | string | Wallet;
    coinbaseSuccessURL?: string;
    coinbaseErrorURL?: string;
    debug?: boolean;
}
export interface FullPaymentState {
    paymentStatus: PaymentStatus;
    paymentMethodID: string;
    processorPaymentID: string;
    paymentID: string;
    hostedURL: string;
    paymentError?: string | CheckoutModalError;
}
export declare function useFullPayment({ orgID, invoiceID, checkoutItems, savedPaymentMethods, selectedPaymentMethod, wallet, coinbaseSuccessURL, coinbaseErrorURL, debug, }: UseFullPaymentOptions): [FullPaymentState, (discountCodeID?: string) => Promise<void>];
