'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var styles = require('@mui/material/styles');
var AuthorizedApolloProvider = require('../AuthorizedApolloProvider/AuthorizedApolloProvider.js');
var theme = require('../../../config/theme/theme.js');
var ErrorBoundary = require('../../public/ErrorBoundary/ErrorBoundary.js');
var exceptions_constants = require('../../../domain/errors/exceptions.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ProviderInjector = ({ 
// AuthorizedApolloProviderProps:
apolloClient, uri, getAuthenticationToken, 
// ThemeProvider:
theme: parentTheme, themeOptions, children, }) => {
    const theme$1 = React.useMemo(() => parentTheme !== null && parentTheme !== void 0 ? parentTheme : theme.extendDefaultTheme(themeOptions), [parentTheme, themeOptions]);
    React.useEffect(() => {
        if (parentTheme && themeOptions) {
            throw new Error(exceptions_constants.EXCEPTIONS.DEV.THEME_PROVIDER);
        }
    }, [parentTheme, themeOptions]);
    React.useEffect(() => {
        if (apolloClient === null && uri === "")
            return;
        if (apolloClient && uri) {
            throw new Error(exceptions_constants.EXCEPTIONS.DEV.APOLLO_PROVIDER_DUPLICATE);
        }
        if (!apolloClient && !uri) {
            throw new Error(exceptions_constants.EXCEPTIONS.DEV.APOLLO_PROVIDER_MISSING);
        }
    }, [apolloClient, uri]);
    return (React__default["default"].createElement(AuthorizedApolloProvider.AuthorizedApolloProvider, { apolloClient: apolloClient, uri: uri, getAuthenticationToken: getAuthenticationToken }, theme$1 ? React__default["default"].createElement(styles.ThemeProvider, { theme: theme$1 }, children) : children));
};
function withThemeProvider(Component) {
    const WithThemeProvider = (_a) => {
        var { theme, themeOptions, onCatch } = _a, componentProps = tslib_es6.__rest(_a, ["theme", "themeOptions", "onCatch"]);
        return (React__default["default"].createElement(ErrorBoundary.ErrorBoundary, { onCatch: onCatch },
            React__default["default"].createElement(ProviderInjector, { apolloClient: null, uri: "", getAuthenticationToken: null, theme: theme, themeOptions: themeOptions },
                React__default["default"].createElement(Component, Object.assign({}, componentProps)))));
    };
    return WithThemeProvider;
}
function withProviders(Component) {
    const WithProviders = (_a) => {
        var { apolloClient, uri, getAuthenticationToken, theme, themeOptions, onCatch } = _a, componentProps = tslib_es6.__rest(_a, ["apolloClient", "uri", "getAuthenticationToken", "theme", "themeOptions", "onCatch"]);
        return (React__default["default"].createElement(ErrorBoundary.ErrorBoundary, { onCatch: onCatch },
            React__default["default"].createElement(ProviderInjector, { apolloClient: apolloClient, uri: uri, getAuthenticationToken: getAuthenticationToken, theme: theme, themeOptions: themeOptions },
                React__default["default"].createElement(Component, Object.assign({}, componentProps)))));
    };
    return WithProviders;
}

exports.ProviderInjector = ProviderInjector;
exports.withProviders = withProviders;
exports.withThemeProvider = withThemeProvider;
//# sourceMappingURL=ProvidersInjector.js.map
