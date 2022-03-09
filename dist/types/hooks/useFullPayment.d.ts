import { CheckoutModalError, SelectedPaymentMethod } from "../components/public/CheckoutOverlay/CheckoutOverlay.hooks";
import { SavedPaymentMethod } from "../domain/circle/circle.interfaces";
import { PaymentStatus } from "../domain/payment/payment.interfaces";
export interface UseFullPaymentOptions {
    orgID: string;
    invoiceID: string;
    savedPaymentMethods: SavedPaymentMethod[];
    selectedPaymentMethod: SelectedPaymentMethod;
    walletAddress: string | null;
    debug?: boolean;
}
export interface FullPaymentState {
    paymentStatus: PaymentStatus;
    circlePaymentID: string;
    paymentID: string;
    paymentError?: string | CheckoutModalError;
}
export declare function useFullPayment({ orgID, invoiceID, savedPaymentMethods, selectedPaymentMethod, walletAddress, debug, }: UseFullPaymentOptions): [FullPaymentState, () => Promise<void>];
