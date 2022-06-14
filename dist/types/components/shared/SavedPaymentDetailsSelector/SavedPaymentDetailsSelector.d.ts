import React from "react";
import { SavedPaymentMethod } from "../../../domain/circle/circle.interfaces";
import { ConsentType } from "../ConsentText/ConsentText";
import { PaymentType } from "../../../domain/payment/payment.interfaces";
import { CreditCardNetwork } from "../../../domain/react-payment-inputs/react-payment-inputs.utils";
import { CheckoutItem } from "../../../domain/product/product.interfaces";
export interface SavedPaymentDetailsSelectorProps {
    acceptedPaymentTypes: PaymentType[];
    showLoader: boolean;
    acceptedCreditCardNetworks?: CreditCardNetwork[];
    savedPaymentMethods: SavedPaymentMethod[];
    selectedPaymentMethodId?: string;
    onNew: () => void;
    onDelete: (paymentMethodId: string) => void;
    onPick: (paymentMethodId: string) => void;
    onCvvSelected: (cvv: string) => void;
    onNext: () => void;
    onClose: () => void;
    onAttemptSubmit: () => void;
    consentType?: ConsentType;
    checkoutItems: CheckoutItem[];
    debug?: boolean;
}
export declare const SavedPaymentDetailsSelector: React.FC<SavedPaymentDetailsSelectorProps>;
