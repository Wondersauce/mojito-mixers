'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('../../../config/config.js');
var build_constants = require('../../../domain/build/build.constants.js');
var url_utils = require('../../../domain/url/url.utils.js');
var storageUtils = require('../../../utils/storageUtils.js');
var CheckoutOverlay_constants = require('./CheckoutOverlay.constants.js');

const debug = url_utils.isLocalhostOrStaging();
function isCheckoutModalInfo3DS(checkoutModalInfo) {
    return !!checkoutModalInfo.paymentInfo && !!checkoutModalInfo.checkoutItems;
}
function isCheckoutModalInfoPlaid(checkoutModalInfo) {
    return !!checkoutModalInfo.linkToken;
}
function persistCheckoutModalInfo(info) {
    var _a;
    if (build_constants.IS_SERVER)
        return;
    try {
        const url = info.url || url_utils.getUrlWithoutParams();
        // Multiple cookies for different 3DS payments can co-exist for a brief time. Plaid ones can't, as they share the same key:
        storageUtils.cookieStorage.setItem(config.CHECKOUT_MODAL_INFO_KEY(isCheckoutModalInfo3DS(info) ? info.processorPaymentID : config.CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX), Object.assign(Object.assign({}, info), { url, fromLocalhost: (_a = info.fromLocalhost) !== null && _a !== void 0 ? _a : url_utils.isLocalhost() }), {
            expirationDate: new Date(Date.now() + (isCheckoutModalInfo3DS(info) ? config.THREEDS_STORAGE_EXPIRATION_MS : config.PLAID_STORAGE_EXPIRATION_MS)),
        });
    }
    catch (err) {
        if (debug)
            console.log(err);
    }
}
function persistCheckoutModalInfoRedirectURI(redirectUri) {
    storageUtils.cookieStorage.setItem(config.CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY, redirectUri);
}
function persistCheckoutModalInfoUsed(used = true) {
    storageUtils.cookieStorage.setItem(config.CHECKOUT_MODAL_INFO_USED_KEY, used);
}
function clearPersistedInfo() {
    if (build_constants.IS_SERVER)
        return;
    if (debug)
        console.log("💾 Clearing state...");
    storageUtils.cookieStorage.removeItem(config.CHECKOUT_MODAL_INFO_KEY_REGEXP); // 3DS
    storageUtils.cookieStorage.removeItem(config.CHECKOUT_MODAL_INFO_KEY(config.CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX)); // Plaid
    storageUtils.cookieStorage.removeItem(config.CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY);
    storageUtils.cookieStorage.removeItem(config.CHECKOUT_MODAL_INFO_USED_KEY);
}
function getCheckoutModalState({ 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
paymentIdParam, noClear, }) {
    let modalState = CheckoutOverlay_constants.FALLBACK_MODAL_STATE_COMMON;
    if (build_constants.IS_SERVER)
        return modalState;
    let hasSavedModalInfo = false;
    let savedModalInfo = {};
    let savedReceivedRedirectUri = "";
    let savedInfoUsed = false;
    try {
        const rawSavedModalInfo = 
        // TODO: For now, ignore the paymentId param as we seem to get mismatching ones:
        // cookieStorage.getItem(CHECKOUT_MODAL_INFO_KEY(paymentIdParam)) ||
        storageUtils.cookieStorage.getItem(config.CHECKOUT_MODAL_INFO_KEY(config.CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX)) ||
            storageUtils.cookieStorage.getItem(config.CHECKOUT_MODAL_INFO_KEY_REGEXP);
        hasSavedModalInfo = !!rawSavedModalInfo;
        savedModalInfo = rawSavedModalInfo || {};
        savedReceivedRedirectUri = storageUtils.cookieStorage.getItem(config.CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY) || "";
        savedInfoUsed = storageUtils.cookieStorage.getItem(config.CHECKOUT_MODAL_INFO_USED_KEY) || false;
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
            url: url_utils.urlToPathnameWhenPossible(url || (fromLocalhost ? "http://localhost:3000" : "")),
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
            const isCoinbase = config.COINBASE_URL_REG_EXP.test(receivedRedirectUri);
            const purchaseError = config.THREEDS_ERROR_URL_REG_EXP.test(receivedRedirectUri);
            const purchaseSuccess = !purchaseError && (config.THREEDS_SUCCESS_URL_REG_EXP.test(receivedRedirectUri) ||
                receivedRedirectUri.includes(config.THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY) ||
                isCoinbase);
            isValid && (isValid = processorPaymentID !== undefined &&
                paymentID !== undefined &&
                paymentInfo !== undefined &&
                checkoutItems.length > 0 &&
                (purchaseError || purchaseSuccess));
            if (isValid) {
                modalState = Object.assign(Object.assign(Object.assign({}, CheckoutOverlay_constants.FALLBACK_MODAL_STATE_COMMON), commonModalState), { flowType: isCoinbase ? "Coinbase" : "3DS", checkoutStep: purchaseSuccess ? "confirmation" : "payment", 
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
            else if (!purchaseError && !purchaseSuccess && url === url_utils.getUrlWithoutParams()) ;
        }
        if (isCheckoutModalInfoPlaid(savedModalInfo)) {
            const { linkToken, } = savedModalInfo;
            isValid && (isValid = window.location.search.startsWith(config.PLAID_OAUTH_FLOW_URL_SEARCH) &&
                !!linkToken);
            if (isValid) {
                modalState = Object.assign(Object.assign(Object.assign({}, CheckoutOverlay_constants.FALLBACK_MODAL_STATE_COMMON), commonModalState), { flowType: "Plaid", checkoutStep: "purchasing", 
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

exports.clearPersistedInfo = clearPersistedInfo;
exports.getCheckoutModalState = getCheckoutModalState;
exports.isCheckoutModalInfo3DS = isCheckoutModalInfo3DS;
exports.isCheckoutModalInfoPlaid = isCheckoutModalInfoPlaid;
exports.isInitiallyOpen = isInitiallyOpen;
exports.persistCheckoutModalInfo = persistCheckoutModalInfo;
exports.persistCheckoutModalInfoRedirectURI = persistCheckoutModalInfoRedirectURI;
exports.persistCheckoutModalInfoUsed = persistCheckoutModalInfoUsed;
//# sourceMappingURL=CheckoutOverlay.utils.js.map
