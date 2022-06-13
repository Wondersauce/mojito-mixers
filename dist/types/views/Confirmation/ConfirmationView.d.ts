import React from "react";
import { SavedPaymentMethod } from "../../domain/circle/circle.interfaces";
import { CheckoutItem } from "../../domain/product/product.interfaces";
import { SelectedPaymentMethod } from "../../components/public/CheckoutOverlay/CheckoutOverlay.hooks";
import { Wallet } from "../../domain/wallet/wallet.interfaces";
export interface ConfirmationViewProps {
    checkoutItems: CheckoutItem[];
    savedPaymentMethods: SavedPaymentMethod[];
    selectedPaymentMethod: SelectedPaymentMethod;
    processorPaymentID: string;
    wallet: null | string | Wallet;
    onNext: () => void;
    onGoTo?: (pathnameOrUrl: string) => void;
}
export declare const ConfirmationView: React.FC<ConfirmationViewProps>;
