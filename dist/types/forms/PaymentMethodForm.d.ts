import React from "react";
import { PaymentMethod, PaymentType } from "../domain/payment/payment.interfaces";
import { ConsentType } from "../components/shared/ConsentText/ConsentText";
import { CheckoutModalError } from "../components/payments/CheckoutModal/CheckoutModal.hooks";
export interface PaymentMethodFormProps {
    acceptedPaymentTypes: PaymentType[];
    defaultValues?: PaymentMethod;
    checkoutError?: CheckoutModalError;
    onPlaidLinkClicked: () => void;
    onSaved?: () => void;
    onClose: () => void;
    onSubmit: (data: PaymentMethod) => void;
    consentType: ConsentType;
    privacyHref: string;
    termsOfUseHref: string;
    debug?: boolean;
}
export declare const PaymentMethodForm: React.FC<PaymentMethodFormProps>;
