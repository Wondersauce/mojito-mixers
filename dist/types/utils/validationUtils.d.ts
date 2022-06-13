import { AnySchema } from "yup";
import { MessageParams } from "yup/lib/types";
import { CreditCardNetwork } from "../domain/react-payment-inputs/react-payment-inputs.utils";
export declare type ErrorMessageParams = Partial<MessageParams> & {
    label: string;
};
export declare const CONSENT_ERROR_MESSAGE = "You must accept the terms and conditions of the sale.";
export declare const withRequiredErrorMessage: ({ label }: ErrorMessageParams) => string;
export declare const withInvalidErrorMessage: ({ label }: ErrorMessageParams) => string;
export declare const requireSchemaWhenKeyIs: (key: string) => {
    is: string;
    then: (schema: AnySchema) => any;
};
export declare const withFullNameErrorMessage: ({ label }: ErrorMessageParams) => string;
export declare const withFullNameCharsetErrorMessage: ({ label }: ErrorMessageParams) => string;
export declare const withPhoneErrorMessage: ({ label }: ErrorMessageParams) => string;
export declare const SELECTION_ERROR_MESSAGE = "You must select a saved and approved payment method or create a new one.";
export declare const withInvalidAddress: ({ variant }: {
    variant: "form" | "selector";
}) => string;
export declare const withInvalidZipCode: ({ label }: ErrorMessageParams) => string;
export declare const withInvalidCardNumber: ({ label }: ErrorMessageParams) => string;
export declare const withInvalidCVV: ({ cvvLabel, cvvExpectedLength }: {
    cvvLabel: string;
    cvvExpectedLength: 3 | 4 | "3 or 4";
}) => string;
export declare const withInvalidCreditCardNetwork: ({ acceptedCreditCardNetworks }: {
    acceptedCreditCardNetworks: CreditCardNetwork[];
}) => string;
export declare const withInvalidConnection: ({ label }: ErrorMessageParams) => string;
