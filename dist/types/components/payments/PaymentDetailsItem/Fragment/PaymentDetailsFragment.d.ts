import React from "react";
import { SavedPaymentMethod } from "../../../../domain/circle/circle.interfaces";
export interface PaymentDetailsFragmentProps {
    savedPaymentMethod: SavedPaymentMethod;
}
export declare const PaymentDetailsFragment: React.FC<PaymentDetailsFragmentProps>;
