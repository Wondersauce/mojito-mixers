import React from "react";
import { CheckoutItem } from "../../domain/product/product.interfaces";
import { TaxesState } from "../Billing/BillingView";
export interface AuthenticationViewProps {
    checkoutItems: CheckoutItem[];
    taxes: null | TaxesState;
    isAuthenticated?: boolean;
    guestCheckoutEnabled?: boolean;
    onGuestClicked: () => void;
    onCloseClicked: () => void;
    invoiceItemIDs: string[];
}
export declare const AuthenticationView: React.FC<AuthenticationViewProps>;
