/// <reference types="react" />
import { CreditCardNetwork } from "../react-payment-inputs/react-payment-inputs.utils";
import { ValidatePaymentLimitOutput } from "../../queries/graphqlGenerated";
export declare function getCreditCardNetworkFromNumber(cardNumber: string): "" | CreditCardNetwork;
export declare function getCreditCardNetworkFromLabel(network?: string): "" | CreditCardNetwork;
export declare function getCreditCardNetworkImageFromLabel(network?: string): CreditCardNetwork;
export declare function standaloneGetCardImageProps(network?: string): {
    "aria-label": string;
    children: import("react").ReactSVGElement;
    width: string;
    height: string;
    viewBox: string;
};
export declare const getExpiryDateIsValid: (expiryDate?: string) => boolean;
export declare function getCvvIsValid(cvv?: string, network?: "" | CreditCardNetwork, networks?: CreditCardNetwork[], required?: boolean): {
    cvvLength: number;
    cvvExpectedLength: 3 | 4 | "3 or 4";
    isCvvValid: boolean;
};
export interface PaymentLimits {
    CreditCard: {
        purchase: number;
        total: number;
    };
    ACH: {
        purchase: number;
        total: number;
    };
    Wire: {
        purchase: number;
        total: number;
    };
    Crypto: {
        purchase: number;
        total: number;
    };
}
export declare function transformRawRemainingItemLimit(rawRemainingItemLimit?: ValidatePaymentLimitOutput, itemsCount?: number): PaymentLimits;
