import { ApolloError } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { CircleFieldErrors } from "../../../domain/circle/circle.utils";
import { PaymentMethod, PaymentType } from "../../../domain/payment/payment.interfaces";
import { CheckoutItemInfo } from "../../../domain/product/product.interfaces";
import { Wallet } from "../../../domain/wallet/wallet.interfaces";
import { BillingInfo } from "../../../forms/BillingInfoForm";
import { TaxesState } from "../../../views/Billing/BillingView";
import { CheckoutModalStateCombined } from "./CheckoutOverlay.types";
export declare type CheckoutModalErrorAt = "close" | "reset" | "authentication" | "billing" | "payment" | "purchasing";
export interface CheckoutModalError {
    at?: CheckoutModalErrorAt;
    error?: ApolloError | Error;
    circleFieldErrors?: CircleFieldErrors;
    errorMessage: string;
}
export declare type CheckoutModalStep = "authentication" | "billing" | "payment" | "purchasing" | "confirmation" | "error";
export declare enum CheckoutModalStepIndex {
    authentication = 0,
    billing = 1,
    payment = 2,
    purchasing = 3,
    confirmation = 4,
    error = 5
}
export interface CheckoutModalStateOptions {
    orgID: string;
    invoiceID?: string | null;
    paymentIdParam?: string;
    productConfirmationEnabled?: boolean;
    vertexEnabled?: boolean;
    isAuthenticated?: boolean;
    onError?: (error: CheckoutModalError) => void;
    debug?: boolean;
}
export interface CheckoutModalState {
    checkoutStep: CheckoutModalStep;
    checkoutError?: CheckoutModalError;
    isDialogBlocked: boolean;
}
export interface PersistedData {
    orgID: string;
    checkoutItems: CheckoutItemInfo[];
    goToMarketplaceHref: string;
}
export interface SelectedPaymentMethod {
    billingInfo: string | BillingInfo;
    paymentInfo: string | PaymentMethod | null;
    paymentType: PaymentType | "";
    cvv: string;
}
export interface PurchaseState {
    invoiceID: string | null;
    invoiceCountdownStart: number | null;
    taxes: null | TaxesState;
    wallet: null | string | Wallet;
    processorPaymentID: string;
    paymentID: string;
}
export interface CheckoutModalStateReturn extends CheckoutModalState, PersistedData, PurchaseState {
    startAt: CheckoutModalStep;
    initModalState: () => CheckoutModalStateCombined;
    goBack: () => void;
    goNext: () => void;
    goTo: (checkoutStep?: CheckoutModalStep, checkoutError?: CheckoutModalError) => void;
    setError: (error?: string | CheckoutModalError) => void;
    setIsDialogBlocked: (isDialogBlocked: boolean) => void;
    selectedPaymentMethod: SelectedPaymentMethod;
    setSelectedPaymentMethod: Dispatch<SetStateAction<SelectedPaymentMethod>>;
    setInvoiceID: (invoiceID: string | null, invoiceCountdownStart: number | null) => void;
    setTaxes: (taxes: TaxesState) => void;
    setWalletAddress: (wallet: null | string | Wallet) => void;
    setPayments: (processorPaymentID: string, paymentID: string) => void;
}
export declare const CHECKOUT_STEPS: CheckoutModalStep[];
export declare function useCheckoutModalState({ orgID: parentOrgID, invoiceID: parentInvoiceID, paymentIdParam, productConfirmationEnabled, vertexEnabled, isAuthenticated, onError, debug, }: CheckoutModalStateOptions): CheckoutModalStateReturn;
