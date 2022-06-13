import { SelectOption } from "../../components/shared/Select/Select";
import { CreditCardBillingDetails, CreditCardMetadata, AchBillingDetails, AchMetadata } from "../../queries/graphqlGenerated";
import { PaymentType } from "../payment/payment.interfaces";
export declare type PaymentMethodStatus = "pending" | "complete" | "failed";
export interface RawSavedPaymentMethodCC {
    id: string;
    type: "CreditCard";
    status: PaymentMethodStatus;
    network: string;
    last4Digit: string;
    billingDetails: CreditCardBillingDetails;
    metadata: CreditCardMetadata;
}
export interface RawSavedPaymentMethodACH {
    id: string;
    type: "ACH";
    status: PaymentMethodStatus;
    accountNumber: string;
    billingDetails: AchBillingDetails;
    metadata: AchMetadata;
}
export interface RawSavedPaymentMethodCrypto {
    id: string;
    type: "Crypto";
    status: PaymentMethodStatus;
    billingDetails: undefined;
    metadata: undefined;
}
export declare type RawSavedPaymentMethod = (RawSavedPaymentMethodCC | RawSavedPaymentMethodACH | RawSavedPaymentMethodCrypto) & {
    type: PaymentType;
};
export interface CommonSavedPaymentMethodBillingDetails {
    name: string;
    city: string;
    address1: string;
    address2: string;
    postalCode: string;
    country: SelectOption;
    district: SelectOption;
}
export interface CommonSavedPaymentMethodBillingMetadata {
    email: string;
    phoneNumber: string;
}
export declare type GenericSavedPaymentMethod<R extends RawSavedPaymentMethod> = Omit<R, "billingDetails" | "metadata"> & {
    addressId: string;
    billingDetails: CommonSavedPaymentMethodBillingDetails;
    metadata: CommonSavedPaymentMethodBillingMetadata;
};
export declare type SavedPaymentMethodCC = GenericSavedPaymentMethod<RawSavedPaymentMethodCC>;
export declare type SavedPaymentMethodACH = GenericSavedPaymentMethod<RawSavedPaymentMethodACH>;
export declare type SavedPaymentMethodCrypto = GenericSavedPaymentMethod<RawSavedPaymentMethodCrypto>;
export declare type SavedPaymentMethod = SavedPaymentMethodCC | SavedPaymentMethodACH | SavedPaymentMethodCrypto;
export declare type SavedPaymentMethodBillingInfo = Pick<SavedPaymentMethod, "billingDetails" | "metadata">;
export interface CircleFieldError {
    message: string;
    error: string;
    location: string;
    invalidValue: string | number;
    constraints?: Record<string, string | number>;
}
export interface CircleError {
    code: number;
    message: string;
    errors: CircleFieldError[];
}
