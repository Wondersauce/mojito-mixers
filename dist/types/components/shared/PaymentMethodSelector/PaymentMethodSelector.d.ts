import React from "react";
import { PaymentType } from "../../../domain/payment/payment.interfaces";
interface PaymentMethodSelectorProps {
    paymentMethods: PaymentType[];
    selectedPaymentMethod: PaymentType;
    onPaymentMethodChange: (paymentMethod: PaymentType) => void;
}
interface PaymentMethodOptionProps {
    label: string;
    icon: JSX.Element;
}
export declare const PAYMENT_METHOD_OPTION_PROPS: Record<PaymentType, PaymentMethodOptionProps>;
export declare const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps>;
export {};
