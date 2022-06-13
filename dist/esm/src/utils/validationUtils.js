import { getCardNameByType } from '../domain/react-payment-inputs/react-payment-inputs.utils.js';

// Generic:
const CONSENT_ERROR_MESSAGE = "You must accept the terms and conditions of the sale.";
const withRequiredErrorMessage = ({ label }) => `${label} is required.`;
const withInvalidErrorMessage = ({ label }) => `${label} is not valid.`;
const requireSchemaWhenKeyIs = (key) => ({
    is: key,
    then: (schema) => schema.required(withRequiredErrorMessage),
});
// Billing Information:
const withFullNameErrorMessage = ({ label }) => `${label} must have at least first and last name.`;
const withFullNameCharsetErrorMessage = ({ label }) => `${label} contains invalid characters.`;
const withPhoneErrorMessage = ({ label }) => `${label} must be a valid phone number.`;
// Saved Information:
const SELECTION_ERROR_MESSAGE = "You must select a saved and approved payment method or create a new one.";
// Address:
const withInvalidAddress = ({ variant }) => `Please, ${variant === "form" ? "enter" : "select"} a valid address to calculate taxes.`;
const withInvalidZipCode = ({ label }) => `The ${label} you entered does not match the address.`;
// Credit Card:
const withInvalidCardNumber = ({ label }) => `${label} is invalid.`;
const withInvalidCVV = ({ cvvLabel, cvvExpectedLength }) => `${cvvLabel} must have ${cvvExpectedLength} digits.`;
const withInvalidCreditCardNetwork = ({ acceptedCreditCardNetworks }) => {
    const [acceptedCreditCardName, ...otherAcceptedCreditCardNames] = acceptedCreditCardNetworks.map(acceptedCreditCardNetwork => getCardNameByType(acceptedCreditCardNetwork));
    return `Only ${otherAcceptedCreditCardNames.join(", ")}${otherAcceptedCreditCardNames.length ? " and " : ""}${acceptedCreditCardName} ${acceptedCreditCardNetworks.length === 1 ? "is" : "are"} accepted.`;
};
// Plaid:
const withInvalidConnection = ({ label }) => `Could not connect${label ? ` to ${label}` : ""}.`;

export { CONSENT_ERROR_MESSAGE, SELECTION_ERROR_MESSAGE, requireSchemaWhenKeyIs, withFullNameCharsetErrorMessage, withFullNameErrorMessage, withInvalidAddress, withInvalidCVV, withInvalidCardNumber, withInvalidConnection, withInvalidCreditCardNetwork, withInvalidErrorMessage, withInvalidZipCode, withPhoneErrorMessage, withRequiredErrorMessage };
//# sourceMappingURL=validationUtils.js.map
