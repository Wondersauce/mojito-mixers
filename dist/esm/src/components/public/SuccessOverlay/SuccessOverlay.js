import { __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React__default, { useLayoutEffect } from 'react';
import { useTimeout } from '../../../../node_modules/@swyg/corre/dist/esm/timeout/timeout.hook.js';
import { THREEDS_SUCCESS_REDIRECT_DELAY_MS } from '../../../config/config.js';
import { isUrlPathname, getUrlWithSearchParams } from '../../../domain/url/url.utils.js';
import { withThemeProvider } from '../../shared/ProvidersInjector/ProvidersInjector.js';
import { getCheckoutModalState, persistCheckoutModalInfoRedirectURI } from '../CheckoutOverlay/CheckoutOverlay.utils.js';
import { PUIStaticSuccessOverlay } from './StaticSuccessOverlay.js';

const PUISuccessOverlay = (_a) => {
    var { onGoTo } = _a, staticSuccessOverlayProps = __rest(_a, ["onGoTo"]);
    const { purchaseSuccess, url = "" } = getCheckoutModalState({ noClear: true });
    const isPathname = isUrlPathname(url);
    useLayoutEffect(() => {
        if (purchaseSuccess) {
            if (isPathname)
                persistCheckoutModalInfoRedirectURI(window.location.href);
            return;
        }
        // Users should only see this page if they completed a credit card payment and 3DS' verification went ok.
        // Otherwise, they are immediately redirected to homepage:
        onGoTo("/", { replace: true, reason: "No purchase success." });
    }, [purchaseSuccess, isPathname, onGoTo]);
    useTimeout(() => {
        // If everything's ok, users see this confirmation screen for 5 seconds and then are redirected to the purchase
        // confirmation page:
        if (purchaseSuccess)
            onGoTo(getUrlWithSearchParams(url));
    }, THREEDS_SUCCESS_REDIRECT_DELAY_MS);
    return React__default.createElement(PUIStaticSuccessOverlay, Object.assign({}, staticSuccessOverlayProps));
};
const PUISuccess = withThemeProvider(PUISuccessOverlay);

export { PUISuccess, PUISuccessOverlay };
//# sourceMappingURL=SuccessOverlay.js.map
