import React from "react";
import { SavedPaymentMethod } from "../../domain/circle/circle.interfaces";
import { CheckoutItem } from "../../domain/product/product.interfaces";
import { BillingInfo } from "../../forms/BillingInfoForm";
import { CheckoutModalError } from "../../components/public/CheckoutOverlay/CheckoutOverlay.hooks";
import { Wallet } from "../../domain/wallet/wallet.interfaces";
import { ConsentType } from "../../components/shared/ConsentText/ConsentText";
export declare type TaxStatus = "incomplete" | "loading" | "complete" | "error";
export interface VertexSuggestions {
    street?: string;
    city?: string;
    zipCode?: string;
}
export interface TaxesState {
    status: TaxStatus;
    invalidZipCode?: boolean;
    taxRate?: number;
    taxAmount?: number;
    vertexSuggestions?: VertexSuggestions;
}
export interface BillingViewProps {
    orgID: string;
    vertexEnabled?: boolean;
    checkoutItems: CheckoutItem[];
    savedPaymentMethods: SavedPaymentMethod[];
    selectedBillingInfo: string | BillingInfo;
    wallets?: Wallet[];
    wallet: null | string | Wallet;
    checkoutError?: CheckoutModalError;
    onBillingInfoSelected: (data: string | BillingInfo) => void;
    onTaxesChange: (taxes: TaxesState) => void;
    onReloadSavedPaymentMethods: () => Promise<void>;
    onSavedPaymentMethodDeleted: (savedPaymentMethodId: string) => Promise<void>;
    onWalletChange: (wallet: null | string | Wallet) => void;
    onNext: () => void;
    onClose: () => void;
    consentType?: ConsentType;
    debug?: boolean;
    invoiceItemIDs: string[];
}
export declare const BillingView: React.FC<BillingViewProps>;
