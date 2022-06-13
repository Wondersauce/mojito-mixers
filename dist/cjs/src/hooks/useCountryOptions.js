'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../node_modules/react-use-country-region/dist/index.js');

const mapCountryToSelectOption = (country) => ({
    label: country.countryName,
    value: country.countryShortCode || country.countryShortCode || "",
});
const mapRegionToSelectOption = (region) => ({
    label: region.name,
    value: region.shortCode || region.name || "",
});
const reduceSelectOptionsToMap = (optionsMapAcc, selectOption) => {
    optionsMapAcc[selectOption.value] = selectOption;
    return optionsMapAcc;
};
const UNAVAILABLE_COUNTRIES = [
    // eslint-disable-next-line array-element-newline
    "AF", "AL", "BB", "BS", "BW", "BY", "CF", "CU", "GH", "GW", "IQ", "IR", "JM", "KH", "KP",
    // eslint-disable-next-line array-element-newline
    "KS", "LY", "ML", "MM", "MN", "MU", "NI", "PA", "PK", "RU", "SD", "SO", "SS", "SY", "TT", "UA", "UG", "VE", "VI", "VU", "YE", "ZW",
];
const countryIsAvailable = (country) => !UNAVAILABLE_COUNTRIES.includes(country.countryShortCode);
function useCountryOptions(countryCode) {
    const { result: country, getCountryList } = index.useCountryRegion(countryCode);
    return React.useMemo(() => {
        // Read about this line in useCountryOptionsBlacklistScript.js:
        window.countries = getCountryList();
        // useCountryRegion seems to return null as the result (country) when countryCode changes. It takes an additional
        // render to get the right value, thus this check:
        if (countryCode === "" || (countryCode && !country))
            return { options: [], optionsMap: {} };
        const options = country
            ? country.regions.map(mapRegionToSelectOption)
            : getCountryList()
                .filter(countryIsAvailable)
                .map(mapCountryToSelectOption);
        const optionsMap = options.reduce(reduceSelectOptionsToMap, {});
        return { options, optionsMap };
        // getCountryList is not memoized. Adding it as a dependency makes this function always run, so we exclude it:
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCode, country]);
}

exports.useCountryOptions = useCountryOptions;
//# sourceMappingURL=useCountryOptions.js.map
