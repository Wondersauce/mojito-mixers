import React from "react";
import { SavedPaymentMethod, SavedPaymentMethodBillingInfo } from "../../../../domain/circle/circle.interfaces";
export interface BillingInfoFragmentProps {
    savedPaymentMethod: SavedPaymentMethod | SavedPaymentMethodBillingInfo;
}
export declare const BillingInfoFragment: React.FC<BillingInfoFragmentProps>;
