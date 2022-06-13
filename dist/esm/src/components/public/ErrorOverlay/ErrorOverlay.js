import { __rest, __awaiter } from '../../../../node_modules/tslib/tslib.es6.js';
import React__default, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { useTimeout } from '../../../../node_modules/@swyg/corre/dist/esm/timeout/timeout.hook.js';
import { PAYMENT_NOTIFICATION_INTERVAL_MS, PAYMENT_NOTIFICATION_ERROR_MAX_WAIT_MS, THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY } from '../../../config/config.js';
import { ERROR_LOADING_TIMEOUT } from '../../../domain/errors/errors.constants.js';
import { isUrlPathname } from '../../../domain/url/url.utils.js';
import { useGetPaymentNotificationQuery } from '../../../queries/graphqlGenerated.js';
import { withProviders } from '../../shared/ProvidersInjector/ProvidersInjector.js';
import { getCheckoutModalState, persistCheckoutModalInfoRedirectURI, clearPersistedInfo } from '../CheckoutOverlay/CheckoutOverlay.utils.js';
import { PUIStaticErrorOverlay } from './StaticErrorOverlay.js';

const PUIErrorOverlay = (_a) => {
    var _b, _c, _d;
    var { onGoTo } = _a, staticErrorOverlayProps = __rest(_a, ["onGoTo"]);
    const [errorMessage, setErrorMessage] = useState("");
    const paymentNotificationResult = useGetPaymentNotificationQuery({
        skip: !!errorMessage,
        pollInterval: PAYMENT_NOTIFICATION_INTERVAL_MS,
    });
    const error = ((_d = (_c = (_b = paymentNotificationResult.data) === null || _b === void 0 ? void 0 : _b.getPaymentNotification) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.error) || "";
    useEffect(() => {
        if (error)
            setErrorMessage(prevErrorMessage => prevErrorMessage || "");
    }, [error]);
    useTimeout(() => {
        setErrorMessage(prevErrorMessage => prevErrorMessage || ERROR_LOADING_TIMEOUT.errorMessage);
    }, PAYMENT_NOTIFICATION_ERROR_MAX_WAIT_MS);
    // TODO: Remove this from render body:
    const { purchaseError, url = "" } = getCheckoutModalState({ noClear: true });
    useLayoutEffect(() => {
        // Users should only see this page if they completed a credit card payment and 3DS' verification went wrong.
        // Otherwise, they are immediately redirected to homepage:
        if (!purchaseError)
            onGoTo("/", { replace: true, reason: "No purchase error." });
    }, [purchaseError, onGoTo]);
    const reviewHref = `${url || "/"}?${THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY}=${encodeURIComponent(errorMessage)}`;
    const reviewData = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const isPathname = isUrlPathname(reviewHref);
        if (isPathname)
            persistCheckoutModalInfoRedirectURI(window.location.href);
        // If there was an error, users can click the review button and go back to the Payment UI to review the data...:
        onGoTo(reviewHref, { replace: true });
        return false;
    }), [onGoTo, reviewHref]);
    const toMarketplace = useCallback(() => {
        if (!purchaseError)
            return;
        clearPersistedInfo();
        // ...or they can just go back to the marketplace homepage:
        onGoTo("/", { replace: true });
    }, [purchaseError, onGoTo]);
    return (React__default.createElement(PUIStaticErrorOverlay, Object.assign({}, staticErrorOverlayProps, { checkoutError: { errorMessage }, reviewHref: reviewHref, onFixError: reviewData, onClose: toMarketplace })));
};
const PUIError = withProviders(PUIErrorOverlay);

export { PUIError, PUIErrorOverlay };
//# sourceMappingURL=ErrorOverlay.js.map
