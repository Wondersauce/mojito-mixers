'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var timeout_hook = require('../../../../node_modules/@swyg/corre/dist/esm/timeout/timeout.hook.js');
var config = require('../../../config/config.js');
var url_utils = require('../../../domain/url/url.utils.js');
var ProvidersInjector = require('../../shared/ProvidersInjector/ProvidersInjector.js');
var CheckoutOverlay_utils = require('../CheckoutOverlay/CheckoutOverlay.utils.js');
var StaticSuccessOverlay = require('./StaticSuccessOverlay.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PUISuccessOverlay = (_a) => {
    var { onGoTo } = _a, staticSuccessOverlayProps = tslib_es6.__rest(_a, ["onGoTo"]);
    const { purchaseSuccess, url = "" } = CheckoutOverlay_utils.getCheckoutModalState({ noClear: true });
    const isPathname = url_utils.isUrlPathname(url);
    React.useLayoutEffect(() => {
        if (purchaseSuccess) {
            if (isPathname)
                CheckoutOverlay_utils.persistCheckoutModalInfoRedirectURI(window.location.href);
            return;
        }
        // Users should only see this page if they completed a credit card payment and 3DS' verification went ok.
        // Otherwise, they are immediately redirected to homepage:
        onGoTo("/", { replace: true, reason: "No purchase success." });
    }, [purchaseSuccess, isPathname, onGoTo]);
    timeout_hook.useTimeout(() => {
        // If everything's ok, users see this confirmation screen for 5 seconds and then are redirected to the purchase
        // confirmation page:
        if (purchaseSuccess)
            onGoTo(url_utils.getUrlWithSearchParams(url));
    }, config.THREEDS_SUCCESS_REDIRECT_DELAY_MS);
    return React__default["default"].createElement(StaticSuccessOverlay.PUIStaticSuccessOverlay, Object.assign({}, staticSuccessOverlayProps));
};
const PUISuccess = ProvidersInjector.withThemeProvider(PUISuccessOverlay);

exports.PUISuccess = PUISuccess;
exports.PUISuccessOverlay = PUISuccessOverlay;
//# sourceMappingURL=SuccessOverlay.js.map
