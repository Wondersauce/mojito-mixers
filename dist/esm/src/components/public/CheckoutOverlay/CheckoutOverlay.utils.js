import { CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY, CHECKOUT_MODAL_INFO_USED_KEY, CHECKOUT_MODAL_INFO_KEY, CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX, CHECKOUT_MODAL_INFO_KEY_REGEXP, COINBASE_URL_REG_EXP, THREEDS_ERROR_URL_REG_EXP, THREEDS_SUCCESS_URL_REG_EXP, THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY, PLAID_OAUTH_FLOW_URL_SEARCH, THREEDS_STORAGE_EXPIRATION_MS, PLAID_STORAGE_EXPIRATION_MS } from '../../../config/config.js';
import { IS_SERVER } from '../../../domain/build/build.constants.js';
import { isLocalhostOrStaging, urlToPathnameWhenPossible, getUrlWithoutParams, isLocalhost } from '../../../domain/url/url.utils.js';
import { cookieStorage } from '../../../utils/storageUtils.js';
import { FALLBACK_MODAL_STATE_COMMON } from './CheckoutOverlay.constants.js';

const debug = isLocalhostOrStaging();
function isCheckoutModalInfo3DS(checkoutModalInfo) {
    return !!checkoutModalInfo.paymentInfo && !!checkoutModalInfo.checkoutItems;
}
function isCheckoutModalInfoPlaid(checkoutModalInfo) {
    return !!checkoutModalInfo.linkToken;
}
function persistCheckoutModalInfo(info) {
    var _a;
    if (IS_SERVER)
        return;
    try {
        const url = info.url || getUrlWithoutParams();
        // Multiple cookies for different 3DS payments can co-exist for a brief time. Plaid ones can't, as they share the same key:
        cookieStorage.setItem(CHECKOUT_MODAL_INFO_KEY(isCheckoutModalInfo3DS(info) ? info.processorPaymentID : CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX), Object.assign(Object.assign({}, info), { url, fromLocalhost: (_a = info.fromLocalhost) !== null && _a !== void 0 ? _a : isLocalhost() }), {
            expirationDate: new Date(Date.now() + (isCheckoutModalInfo3DS(info) ? THREEDS_STORAGE_EXPIRATION_MS : PLAID_STORAGE_EXPIRATION_MS)),
        });
    }
    catch (err) {
        if (debug)
            console.log(err);
    }
}
function persistCheckoutModalInfoRedirectURI(redirectUri) {
    cookieStorage.setItem(CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY, redirectUri);
}
function persistCheckoutModalInfoUsed(used = true) {
    cookieStorage.setItem(CHECKOUT_MODAL_INFO_USED_KEY, used);
}
function clearPersistedInfo() {
    if (IS_SERVER)
        return;
    if (debug)
        console.log("💾 Clearing state...");
    cookieStorage.removeItem(CHECKOUT_MODAL_INFO_KEY_REGEXP); // 3DS
    cookieStorage.removeItem(CHECKOUT_MODAL_INFO_KEY(CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX)); // Plaid
    cookieStorage.removeItem(CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY);
    cookieStorage.removeItem(CHECKOUT_MODAL_INFO_USED_KEY);
}
function getCheckoutModalState({ 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
paymentIdParam, noClear, }) {
    let modalState = FALLBACK_MODAL_STATE_COMMON;
    if (IS_SERVER)
        return modalState;
    let hasSavedModalInfo = false;
    let savedModalInfo = {};
    let savedReceivedRedirectUri = "";
    let savedInfoUsed = false;
    try {
        const rawSavedModalInfo = 
        // TODO: For now, ignore the paymentId param as we seem to get mismatching ones:
        // cookieStorage.getItem(CHECKOUT_MODAL_INFO_KEY(paymentIdParam)) ||
        cookieStorage.getItem(CHECKOUT_MODAL_INFO_KEY(CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX)) ||
            cookieStorage.getItem(CHECKOUT_MODAL_INFO_KEY_REGEXP);
        hasSavedModalInfo = !!rawSavedModalInfo;
        savedModalInfo = rawSavedModalInfo || {};
        savedReceivedRedirectUri = cookieStorage.getItem(CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY) || "";
        savedInfoUsed = cookieStorage.getItem(CHECKOUT_MODAL_INFO_USED_KEY) || false;
    }
    catch (err) {
        if (debug)
            console.log(err);
    }
    const { url = "", fromLocalhost = false, orgID = "", invoiceID = "", invoiceCountdownStart = -1, billingInfo = "", } = savedModalInfo;
    const receivedRedirectUri = savedReceivedRedirectUri || window.location.href;
    // In dev, this works fine even if there's nothing in cookieStorage, which helps with testing across some other domain and localhost:
    let isValid = fromLocalhost || !!(url && orgID && invoiceID && billingInfo && receivedRedirectUri);
    if (isValid && !savedInfoUsed) {
        if (!noClear)
            clearPersistedInfo();
        const commonModalState = {
            // The URL of the page where we initially opened the modal:
            url: urlToPathnameWhenPossible(url || (fromLocalhost ? "http://localhost:3000" : "")),
            fromLocalhost,
            // The orgID and invoiceID we need to re-load the products and units and resume the checkout:
            orgID,
            invoiceID,
            invoiceCountdownStart: invoiceCountdownStart === -1 ? Date.now() : invoiceCountdownStart,
            // The billing info selected / entered before starting the flow:
            billingInfo,
            // Where we left off:
            flowType: "",
            checkoutStep: "",
            // The redirect URI with params:
            receivedRedirectUri,
            // Wether we already tried to resume the previous OAuth flow:
            savedInfoUsed,
            // Whether we need to resume the 3DS flow and show the confirmation or error screens:
            continueFlow: true,
        };
        if (isCheckoutModalInfo3DS(savedModalInfo)) {
            const { processorPaymentID, paymentID, paymentInfo, checkoutItems = [], } = savedModalInfo;
            const isCoinbase = COINBASE_URL_REG_EXP.test(receivedRedirectUri);
            const purchaseError = THREEDS_ERROR_URL_REG_EXP.test(receivedRedirectUri);
            const purchaseSuccess = !purchaseError && (THREEDS_SUCCESS_URL_REG_EXP.test(receivedRedirectUri) ||
                receivedRedirectUri.includes(THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY) ||
                isCoinbase);
            isValid && (isValid = processorPaymentID !== undefined &&
                paymentID !== undefined &&
                paymentInfo !== undefined &&
                checkoutItems.length > 0 &&
                (purchaseError || purchaseSuccess));
            if (isValid) {
                modalState = Object.assign(Object.assign(Object.assign({}, FALLBACK_MODAL_STATE_COMMON), commonModalState), { flowType: isCoinbase ? "Coinbase" : "3DS", checkoutStep: purchaseSuccess ? "confirmation" : "payment", 
                    // The reference number of the payment:
                    processorPaymentID,
                    paymentID,
                    // The payment info id selected before starting the 3DS flow:
                    paymentInfo,
                    // Item info to display in the confirmation view:
                    checkoutItems,
                    // 3DS status:
                    purchaseSuccess,
                    purchaseError });
            }
            else if (!purchaseError && !purchaseSuccess && url === getUrlWithoutParams()) ;
        }
        if (isCheckoutModalInfoPlaid(savedModalInfo)) {
            const { linkToken, } = savedModalInfo;
            isValid && (isValid = window.location.search.startsWith(PLAID_OAUTH_FLOW_URL_SEARCH) &&
                !!linkToken);
            if (isValid) {
                modalState = Object.assign(Object.assign(Object.assign({}, FALLBACK_MODAL_STATE_COMMON), commonModalState), { flowType: "Plaid", checkoutStep: "purchasing", 
                    // The Link token from the first Link initialization:
                    linkToken });
            }
        }
    }
    if ((isValid && savedInfoUsed) || (!isValid && hasSavedModalInfo)) {
        if (debug)
            console.log("💾 Discard saved flow...", modalState);
        clearPersistedInfo();
    }
    else if (isValid && debug) {
        console.log(`💾 ${noClear ? "Peak" : "Continue"} saved flow...`, modalState);
    }
    return modalState;
}
function isInitiallyOpen(paymentIdParam) {
    return getCheckoutModalState({ paymentIdParam, noClear: true }).checkoutStep !== "";
}

export { clearPersistedInfo, getCheckoutModalState, isCheckoutModalInfo3DS, isCheckoutModalInfoPlaid, isInitiallyOpen, persistCheckoutModalInfo, persistCheckoutModalInfoRedirectURI, persistCheckoutModalInfoUsed };
//# sourceMappingURL=CheckoutOverlay.utils.js.map
