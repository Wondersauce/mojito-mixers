import React from "react";
import { SavedPaymentMethod } from "../../domain/circle/circle.interfaces";
import { CheckoutModalError, SelectedPaymentMethod } from "../../components/public/CheckoutOverlay/CheckoutOverlay.hooks";
import { Wallet } from "../../domain/wallet/wallet.interfaces";
import { CheckoutItem } from "../../domain/product/product.interfaces";
export interface PurchasingViewProps {
    threeDSEnabled?: boolean;
    coinbaseSuccessURL?: string;
    coinbaseErrorURL?: string;
    purchasingImageSrc?: string;
    purchasingMessages?: false | string[];
    orgID: string;
    invoiceID: string;
    invoiceCountdownStart: number;
    checkoutItems: CheckoutItem[];
    savedPaymentMethods: SavedPaymentMethod[];
    selectedPaymentMethod: SelectedPaymentMethod;
    wallet: null | string | Wallet;
    onPurchaseSuccess: (processorPaymentID: string, paymentID: string, redirectURL: string) => void;
    onPurchaseError: (error?: string | CheckoutModalError) => void;
    onDialogBlocked: (blocked: boolean) => void;
    debug?: boolean;
}
export declare const PurchasingView: React.FC<PurchasingViewProps>;
