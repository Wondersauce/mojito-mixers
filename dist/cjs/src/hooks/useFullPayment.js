'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var circle_utils = require('../domain/circle/circle.utils.js');
var errors_constants = require('../domain/errors/errors.constants.js');
var url_utils = require('../domain/url/url.utils.js');
var wallet_utils = require('../domain/wallet/wallet.utils.js');
var graphqlGenerated = require('../queries/graphqlGenerated.js');
var useCreatePaymentMethod = require('./useCreatePaymentMethod.js');
var useEncryptCard = require('./useEncryptCard.js');

let lastPaymentMethodID = "";
function getLastPaymentMethodID() {
    return lastPaymentMethodID;
}
function useFullPayment({ orgID, invoiceID, checkoutItems, savedPaymentMethods, selectedPaymentMethod, wallet, coinbaseSuccessURL, coinbaseErrorURL, debug = false, }) {
    const [paymentState, setPaymentState] = React.useState({
        paymentStatus: "processing",
        paymentMethodID: "",
        processorPaymentID: "",
        paymentID: "",
        hostedURL: "",
    });
    const setError = React.useCallback((paymentError) => {
        setPaymentState({
            paymentStatus: "error",
            paymentMethodID: "",
            processorPaymentID: "",
            paymentID: "",
            hostedURL: "",
            paymentError,
        });
    }, []);
    const [encryptCardData] = useEncryptCard.useEncryptCardData({ orgID });
    const [createPaymentMethod] = useCreatePaymentMethod.useCreatePaymentMethod({ orgID, debug });
    const [makePayment] = graphqlGenerated.useCreatePaymentMutation();
    const fullPayment = React.useCallback((discountCodeID) => tslib_es6.__awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { billingInfo: selectedBillingInfo, paymentInfo: selectedPaymentInfo, } = selectedPaymentMethod;
        if (selectedPaymentInfo === null) {
            setError(errors_constants.ERROR_PURCHASE_CREATING_PAYMENT_METHOD());
            return;
        }
        let paymentType;
        let cvv = "";
        if (typeof selectedPaymentInfo === "string") {
            paymentType = selectedPaymentMethod.paymentType;
            cvv = selectedPaymentMethod.cvv;
        }
        else {
            paymentType = selectedPaymentInfo.type;
            if (selectedPaymentInfo.type === "CreditCard") {
                cvv = selectedPaymentInfo.secureCode;
            }
        }
        if (debug) {
            console.log(invoiceID
                ? `\n💵 Making payment for invoice ${invoiceID} (orgID = ${orgID})...\n`
                : `\n💵 Aborting payment for unknown invoice (orgID = ${orgID})...\n`);
        }
        if (!invoiceID) {
            setError(errors_constants.ERROR_PURCHASE_NO_ITEMS());
            return;
        }
        setPaymentState({
            paymentStatus: "processing",
            paymentMethodID: "",
            processorPaymentID: "",
            paymentID: "",
            hostedURL: "",
        });
        let paymentMethodID = "";
        let selectedBillingInfoData;
        let processorPaymentID = "";
        let paymentID = "";
        let hostedURL = "";
        let mutationError;
        if (typeof selectedBillingInfo === "string") {
            // If selectedPaymentInfo is an object and selectedBillingInfo is an addressID, we need to find the matching
            // data in savedPaymentMethods:
            const matchingPaymentMethod = savedPaymentMethods.find(({ addressId }) => addressId === selectedBillingInfo);
            if (!matchingPaymentMethod) {
                setError(errors_constants.ERROR_PURCHASE_SELECTED_PAYMENT_METHOD());
                return;
            }
            selectedBillingInfoData = circle_utils.savedPaymentMethodToBillingInfo(matchingPaymentMethod);
        }
        else {
            // If both selectedPaymentInfo and selectedBillingInfo are objects, we just create a new payment method with them:
            selectedBillingInfoData = selectedBillingInfo;
        }
        if (typeof selectedPaymentInfo === "string") {
            // If selectedPaymentInfo is a payment method ID, that's all we need, no need to create a new payment method:
            paymentMethodID = selectedPaymentInfo;
        }
        else if (selectedBillingInfoData) {
            if (debug) {
                console.log("  💳 createPaymentMethod", {
                    orgID,
                    selectedBillingInfoData,
                    selectedPaymentInfo,
                });
            }
            const createPaymentMethodResult = yield createPaymentMethod(selectedBillingInfoData, selectedPaymentInfo).catch((error) => {
                mutationError = error;
                if (debug)
                    console.log("      🔴 createPaymentMethod error", error);
            });
            if (createPaymentMethodResult && !createPaymentMethodResult.errors) {
                if (debug)
                    console.log("      🟢 createPaymentMethod result", createPaymentMethodResult);
                paymentMethodID = ((_b = (_a = createPaymentMethodResult.data) === null || _a === void 0 ? void 0 : _a.createPaymentMethod) === null || _b === void 0 ? void 0 : _b.id) || "";
            }
        }
        if (!paymentMethodID) {
            setError(errors_constants.ERROR_PURCHASE_CREATING_PAYMENT_METHOD(mutationError));
            return;
        }
        if (debug) {
            console.log("  💸 makePayment", {
                paymentMethodID,
                invoiceID,
            });
        }
        let destinationAddress = "";
        if (typeof wallet === "object") {
            destinationAddress = (wallet === null || wallet === void 0 ? void 0 : wallet.address) || "";
        }
        else {
            destinationAddress = wallet_utils.filterSpecialWalletAddressValues(wallet);
        }
        const metadata = destinationAddress ? { destinationAddress } : {};
        if (discountCodeID) {
            metadata.discountCodeID = discountCodeID;
        }
        if (paymentType === "CreditCard" && cvv) {
            const encryptCardDataResult = yield encryptCardData({
                cvv,
            }).catch((error) => {
                mutationError = error;
                // TODO: Cancel invoice?
                if (debug)
                    console.log("    🔴 encryptCardData error", error);
            });
            if (!encryptCardDataResult) {
                setError(errors_constants.ERROR_PURCHASE_CVV(mutationError));
                return;
            }
            const { keyID, encryptedCardData } = encryptCardDataResult;
            metadata.creditCardData = {
                keyID,
                encryptedData: encryptedCardData,
            };
        }
        else if (paymentType === "Crypto") {
            const currentURL = url_utils.getUrlWithoutParams();
            const billingDetails = selectedBillingInfoData ? circle_utils.billingInfoToBillingDetails(selectedBillingInfoData, "Crypto") : undefined;
            metadata.cryptoData = {
                name: checkoutItems[0].name || "",
                description: checkoutItems[0].description || "",
                billingDetails,
                redirectURL: coinbaseSuccessURL || currentURL,
                cancelURL: coinbaseErrorURL || currentURL,
            };
        }
        const makePaymentResult = yield makePayment({
            variables: {
                paymentMethodID,
                invoiceID,
                metadata,
            },
        }).catch((error) => {
            mutationError = error;
            if (debug)
                console.log("    🔴 makePayment error", error);
        });
        if (makePaymentResult && !makePaymentResult.errors) {
            if (debug)
                console.log("    🟢 makePayment result", makePaymentResult);
            // Just so that we know what payment method has been used in CheckoutOverlay.tsx:
            lastPaymentMethodID = paymentMethodID;
            processorPaymentID = ((_d = (_c = makePaymentResult.data) === null || _c === void 0 ? void 0 : _c.createPayment) === null || _d === void 0 ? void 0 : _d.processorPaymentID) || "";
            paymentID = ((_f = (_e = makePaymentResult.data) === null || _e === void 0 ? void 0 : _e.createPayment) === null || _f === void 0 ? void 0 : _f.id) || "";
            hostedURL = ((_j = (_h = (_g = makePaymentResult.data) === null || _g === void 0 ? void 0 : _g.createPayment) === null || _h === void 0 ? void 0 : _h.details) === null || _j === void 0 ? void 0 : _j.hostedURL) || "";
        }
        if (!processorPaymentID) {
            setError(errors_constants.ERROR_PURCHASE_PAYING(mutationError));
            return;
        }
        // TODO: Error handling and automatic retry:
        setPaymentState({
            paymentStatus: "processed",
            paymentMethodID,
            processorPaymentID,
            paymentID,
            hostedURL,
        });
    }), [
        orgID,
        invoiceID,
        checkoutItems,
        savedPaymentMethods,
        selectedPaymentMethod,
        wallet,
        coinbaseSuccessURL,
        coinbaseErrorURL,
        debug,
        setError,
        encryptCardData,
        createPaymentMethod,
        makePayment,
    ]);
    return [paymentState, fullPayment];
}

exports.getLastPaymentMethodID = getLastPaymentMethodID;
exports.useFullPayment = useFullPayment;
//# sourceMappingURL=useFullPayment.js.map
