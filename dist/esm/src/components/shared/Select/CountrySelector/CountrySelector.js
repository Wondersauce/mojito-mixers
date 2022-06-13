import { __rest } from '../../../../../node_modules/tslib/tslib.es6.js';
import React__default, { useCallback, useEffect } from 'react';
import { Controller } from '../../../../../node_modules/react-hook-form/dist/index.esm.mjs.js';
import { EMPTY_OPTION, Select } from '../Select.js';
import { useCountryOptions } from '../../../../hooks/useCountryOptions.js';

const CountrySelector = (_a) => {
    var { label, value, disabled, onSelectCountry } = _a, props = __rest(_a, ["label", "value", "disabled", "onSelectCountry"]);
    const { options, optionsMap } = useCountryOptions();
    const handleChange = useCallback((e) => {
        onSelectCountry(optionsMap[e.target.value]);
    }, [optionsMap, onSelectCountry]);
    const isDisabled = disabled || options.length === 0;
    // If the selected option can't be found among the available ones, we reset the field:
    useEffect(() => {
        const countryCode = value.value;
        if (isDisabled || !countryCode)
            return;
        if (!optionsMap[countryCode])
            onSelectCountry(EMPTY_OPTION);
    }, [value, isDisabled, optionsMap, onSelectCountry]);
    // If the selected option only has one property set, we try to find a match:
    useEffect(() => {
        const { value: selectedValue, label: selectedLabel } = value;
        if ((selectedValue && selectedLabel) || (!selectedValue && !selectedLabel) || options.length === 0)
            return;
        const option = selectedValue
            ? optionsMap[selectedValue]
            : options.find(opt => opt.label === selectedLabel);
        setTimeout(() => onSelectCountry(option || EMPTY_OPTION));
    }, [value, optionsMap, options, onSelectCountry]);
    const selectedValue = value.value;
    return (React__default.createElement(Select, Object.assign({}, props, { 
        // See https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
        autoComplete: props.autoComplete || "country", label: label, options: options, onChange: handleChange, value: optionsMap[selectedValue] ? selectedValue : "", disabled: isDisabled })));
};
const ControlledCountrySelector = ({ name: parentName, control, label, }) => (React__default.createElement(Controller, { name: parentName, control: control, render: (_a) => {
        var _b;
        var _c = _a.field, { name, onChange, ref } = _c, field = __rest(_c, ["name", "onChange", "ref"]), { fieldState } = _a;
        const error = fieldState === null || fieldState === void 0 ? void 0 : fieldState.error;
        const fieldError = error ? (error.hasOwnProperty("message") ? error.message : (_b = error.value) === null || _b === void 0 ? void 0 : _b.message) || "" : "";
        return (React__default.createElement(CountrySelector, Object.assign({ id: name, name: name, autoComplete: "country", label: label, onSelectCountry: onChange, fullWidth: true, inputRef: ref, error: !!fieldError, helperText: fieldError }, field)));
    } }));

export { ControlledCountrySelector, CountrySelector };
//# sourceMappingURL=CountrySelector.js.map
