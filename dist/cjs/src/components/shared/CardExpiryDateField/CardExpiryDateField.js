'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var usePaymentInputs = require('../../../../node_modules/react-payment-inputs/es/usePaymentInputs.js');
require('styled-components');
require('../../../../node_modules/react-payment-inputs/es/PaymentInputsWrapper.js');
var useMergeRef = require('../../../../node_modules/use-callback-ref/dist/es2015/useMergeRef.js');
var TextField = require('../TextField/TextField.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const CardExpiryDateField = (_a) => {
    var { placeholder, onChange, onBlur, inputRef: parentInputRef } = _a, props = tslib_es6.__rest(_a, ["placeholder", "onChange", "onBlur", "inputRef"]);
    const { getExpiryDateProps } = usePaymentInputs["default"]();
    const _b = getExpiryDateProps({
        placeholder,
        onChange,
        onBlur,
    }), { ref } = _b, paymentInputProps = tslib_es6.__rest(_b, ["ref"]);
    const inputRef = useMergeRef.useMergeRefs([parentInputRef, ref].filter(Boolean));
    return (React__default["default"].createElement(TextField.TextField, Object.assign({}, props, paymentInputProps, { inputRef: inputRef })));
};
const ControlledCardExpiryDateField = TextField.controlledFieldFrom(CardExpiryDateField);

exports.CardExpiryDateField = CardExpiryDateField;
exports.ControlledCardExpiryDateField = ControlledCardExpiryDateField;
//# sourceMappingURL=CardExpiryDateField.js.map
