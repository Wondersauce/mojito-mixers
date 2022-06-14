import { ApolloError } from "@apollo/client";
import { CircleFieldError, RawSavedPaymentMethod, SavedPaymentMethod, SavedPaymentMethodBillingInfo } from "./circle.interfaces";
import { BillingInfo } from "../../forms/BillingInfoForm";
import { AchBillingDetails, CreditCardBillingDetails, CryptoBillingDetails } from "../../queries/graphqlGenerated";
import { PaymentType } from "../payment/payment.interfaces";
export declare function getPhonePrefix(countryCode: string, withPlus?: boolean): string;
export declare function phoneHasPrefix(phone: string): boolean;
export declare function formatPhoneAsE123(phoneNumber: string, countryCode: string): string;
export declare const EMPTY_ADDRESS_ID = "||||||||";
export declare function getSavedPaymentMethodAddressId({ billingDetails, metadata }: SavedPaymentMethodBillingInfo): string;
export declare function transformRawSavedPaymentMethods(rawSavedPaymentMethods?: RawSavedPaymentMethod[]): SavedPaymentMethod[];
export declare function billingInfoToSavedPaymentMethodBillingInfo(billingInfo: BillingInfo): SavedPaymentMethodBillingInfo;
export declare function billingInfoToBillingDetails<T extends CreditCardBillingDetails | AchBillingDetails | CryptoBillingDetails = CreditCardBillingDetails>(billingInfo: BillingInfo, paymentType?: PaymentType): T;
export declare function getSavedPaymentMethodAddressIdFromBillingInfo(billingInfo: BillingInfo): string;
export declare function savedPaymentMethodToBillingInfo(savedPaymentMethod: SavedPaymentMethod): BillingInfo;
export declare function isCircleFieldError(obj: any): obj is CircleFieldError;
export declare function isCircleFieldErrorArray(obj: any): obj is CircleFieldError[];
export declare type CircleFieldErrorAt = "billing" | "payment";
export interface CircleFieldErrors {
    summary: string;
    billing?: Record<string, string>;
    payment?: Record<string, string>;
    unknown?: Record<string, string>;
    firstAt: CircleFieldErrorAt;
}
export declare function parseCircleError(error: ApolloError | Error): CircleFieldErrors | undefined;
