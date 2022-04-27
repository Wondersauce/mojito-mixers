import { THREEDS_FLOW_SEARCH_PARAM_SUCCESS, CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY, CHECKOUT_MODAL_INFO_USED_KEY, CHECKOUT_MODAL_INFO_KEY_PREFIX, PLAID_OAUTH_FLOW_URL_SEARCH, CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX, PLAID_STORAGE_EXPIRATION_MS, THREEDS_STORAGE_EXPIRATION_MS } from "../../../config/config";
import { getUrlWithoutParams, isLocalhost, isLocalhostOrStaging, urlToPathnameWhenPossible } from "../../../domain/url/url.utils";
import { cookieStorage } from "../../../utils/storageUtils";
import { FALLBACK_MODAL_STATE_COMMON } from "./CheckoutOverlay.constants";
import { CheckoutModalInfo, CheckoutModalInfo3DS, CheckoutModalInfoPlaid, CheckoutModalStateCombined, CheckoutModalStateCommon } from "./CheckoutOverlay.types";

const debug = isLocalhostOrStaging();

export function persistCheckoutModalInfo(info: CheckoutModalInfo) {
  if (!process.browser) return;

  console.log("PERSIST", info);

  try {
    const url = info.url || getUrlWithoutParams();

    // Multiple cookies for different 3DS payments can co-exist for a brief time. Plaid ones can't, as they share the same key:
    cookieStorage.setItem(`${ CHECKOUT_MODAL_INFO_KEY_PREFIX }${ isCheckoutModalInfo3DS(info) ? info.processorPaymentID : CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX }`, {
      ...info,
      url,
      fromLocalhost: info.fromLocalhost ?? isLocalhost(),
    }, {
      // domain: "",
      path: isCheckoutModalInfo3DS(info) ? "/payments" : "/",
      // secure: !isLocalhost(),
      // expires: { minutes: THREEDS_STORAGE_EXPIRATION_MIN },
      expirationDate: new Date(Date.now() + (isCheckoutModalInfo3DS(info) ? THREEDS_STORAGE_EXPIRATION_MS : PLAID_STORAGE_EXPIRATION_MS))
    });
  } catch (err) {
    if (debug) console.log(err);
  }
}

export function persistCheckoutModalInfoRedirectURI(redirectUri: string) {
  cookieStorage.setItem(CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY, redirectUri);
}

export function persistCheckoutModalInfoUsed(used = true) {
  cookieStorage.setItem(CHECKOUT_MODAL_INFO_USED_KEY, used);
}

export function clearPersistedInfo() {
  if (debug) console.log(`💾 Clearing state...`);

  if (process.browser) {
    cookieStorage.removeItem(new RegExp(`^${ CHECKOUT_MODAL_INFO_KEY_PREFIX }`));
    cookieStorage.removeItem(CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY);
    cookieStorage.removeItem(CHECKOUT_MODAL_INFO_USED_KEY);
  }
}

export function isInitiallyOpen(paymentIdParam?: string) {
  return getCheckoutModalState({ paymentIdParam, noClear: true }).checkoutStep !== "";
}

export function isCheckoutModalInfo3DS(checkoutModalInfo: Partial<CheckoutModalInfo3DS | CheckoutModalInfoPlaid>): checkoutModalInfo is CheckoutModalInfo3DS {
  return !!(checkoutModalInfo as any).paymentInfo && !!(checkoutModalInfo as any).checkoutItems;
}

export function isCheckoutModalInfoPlaid(checkoutModalInfo: Partial<CheckoutModalInfo3DS | CheckoutModalInfoPlaid>): checkoutModalInfo is CheckoutModalInfoPlaid {
  return !!(checkoutModalInfo as any).linkToken;
}

export interface GetCheckoutModalStateOptions {
  paymentIdParam?: string;
  noClear?: boolean;
}

export function getCheckoutModalState({
  paymentIdParam,
  noClear,
}: GetCheckoutModalStateOptions): CheckoutModalStateCombined {
  let modalState = FALLBACK_MODAL_STATE_COMMON;

  if (!process.browser) return modalState;

  let hasSavedModalInfo = false;
  let savedModalInfo: Partial<CheckoutModalInfo> = {};
  let savedReceivedRedirectUri = "";
  let savedInfoUsed = false;

  try {
    debugger;

    const rawSavedModalInfo =
      cookieStorage.getItem(`${ CHECKOUT_MODAL_INFO_KEY_PREFIX }${ paymentIdParam || "" }`) ||
      cookieStorage.getItem(`${ CHECKOUT_MODAL_INFO_KEY_PREFIX }${ CHECKOUT_MODAL_INFO_KEY_PLAID_SUFFIX }`);

    hasSavedModalInfo = !!rawSavedModalInfo;
    savedModalInfo = rawSavedModalInfo || {}
    savedReceivedRedirectUri = cookieStorage.getItem(CHECKOUT_MODAL_INFO_REDIRECT_URI_KEY) || "";
    savedInfoUsed = cookieStorage.getItem(CHECKOUT_MODAL_INFO_USED_KEY) || false;
  } catch (err) {
    if (debug) console.log(err);
  }

  const {
    url = "",
    fromLocalhost = false,
    orgID = "",
    invoiceID = "",
    invoiceCountdownStart = -1,
    billingInfo = "",
  } = savedModalInfo;

  // Swap to test error flow:
  // const receivedRedirectUri = "localhost:3000/payments/error";
  const receivedRedirectUri = savedReceivedRedirectUri || window.location.href;

  // In dev, this works fine even if there's nothing in cookieStorage, which helps with testing across some other domain and localhost:
  let isValid = fromLocalhost || !!(url && orgID && invoiceID && billingInfo && receivedRedirectUri);

  if (isValid && !savedInfoUsed) {
    if (!noClear) clearPersistedInfo();

    const commonModalState: CheckoutModalStateCommon = {
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
      const {
        processorPaymentID,
        paymentID,
        paymentInfo,
        checkoutItems = [],
      } = savedModalInfo;

      isValid &&=
        // TODO: URL param (paymentID) should match stored one.
        window.location.search.startsWith(THREEDS_FLOW_SEARCH_PARAM_SUCCESS) &&
        processorPaymentID !== undefined &&
        paymentID !== undefined &&
        paymentInfo !== undefined &&
        checkoutItems.length > 0;

      if (isValid) {
        const purchaseError = receivedRedirectUri.includes("error") || receivedRedirectUri.includes("failure");
        const purchaseSuccess = !purchaseError && (receivedRedirectUri.includes("success") || receivedRedirectUri.includes(THREEDS_FLOW_SEARCH_PARAM_SUCCESS));

        modalState = {
          ...FALLBACK_MODAL_STATE_COMMON,
          ...commonModalState,

          flowType: "3DS",
          checkoutStep: purchaseSuccess ? "confirmation" : "payment",

          // The reference number of the payment:
          processorPaymentID,
          paymentID,

          // The payment info id selected before starting the 3DS flow:
          paymentInfo,

          // Item info to display in the confirmation view:
          checkoutItems,

          // 3DS status:
          purchaseSuccess,
          purchaseError,
        };
      }
    }

    if (isCheckoutModalInfoPlaid(savedModalInfo)) {
      const {
        linkToken
      } = savedModalInfo;

      isValid &&=
        window.location.search.startsWith(PLAID_OAUTH_FLOW_URL_SEARCH) &&
        !!linkToken;

      if (isValid) {
        modalState = {
          ...FALLBACK_MODAL_STATE_COMMON,
          ...commonModalState,

          flowType: "Plaid",
          checkoutStep: "purchasing",

          // The Link token from the first Link initialization:
          linkToken,
        };
      }
    }
  }

  if ((isValid && savedInfoUsed) || (!isValid && hasSavedModalInfo)) {
    if (debug) console.log("💾 Discard saved flow...", modalState);

    clearPersistedInfo();
  } else if (debug) {
    console.log("💾 Continue saved flow...", modalState);
  }

  return modalState;
}
