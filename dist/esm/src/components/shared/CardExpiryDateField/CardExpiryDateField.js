import { __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import usePaymentCard from '../../../../node_modules/react-payment-inputs/es/usePaymentInputs.js';
import 'styled-components';
import '../../../../node_modules/react-payment-inputs/es/PaymentInputsWrapper.js';
import { useMergeRefs } from '../../../../node_modules/use-callback-ref/dist/es2015/useMergeRef.js';
import { controlledFieldFrom, TextField } from '../TextField/TextField.js';

const CardExpiryDateField = (_a) => {
    var { placeholder, onChange, onBlur, inputRef: parentInputRef } = _a, props = __rest(_a, ["placeholder", "onChange", "onBlur", "inputRef"]);
    const { getExpiryDateProps } = usePaymentCard();
    const _b = getExpiryDateProps({
        placeholder,
        onChange,
        onBlur,
    }), { ref } = _b, paymentInputProps = __rest(_b, ["ref"]);
    const inputRef = useMergeRefs([parentInputRef, ref].filter(Boolean));
    return (React__default.createElement(TextField, Object.assign({}, props, paymentInputProps, { inputRef: inputRef })));
};
const ControlledCardExpiryDateField = controlledFieldFrom(CardExpiryDateField);

export { CardExpiryDateField, ControlledCardExpiryDateField };
//# sourceMappingURL=CardExpiryDateField.js.map
