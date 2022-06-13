import { PaymentLimits } from "../domain/payment/payment.utils";
import { CheckoutItem } from "../domain/product/product.interfaces";
import { PaymentType } from "../domain/payment/payment.interfaces";
export interface UseLimitsReturn {
    limits?: PaymentLimits;
    loading: boolean;
    refetch: () => void;
    limitExceededMessage: string;
}
export declare function useLimits(checkoutItem: CheckoutItem, acceptedPaymentTypes: PaymentType[], paymentType?: PaymentType): UseLimitsReturn;
