'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var config = require('../config/config.js');
var circle_utils = require('../domain/circle/circle.utils.js');
var errors_constants = require('../domain/errors/errors.constants.js');
var graphqlGenerated = require('../queries/graphqlGenerated.js');
var promiseUtils = require('../utils/promiseUtils.js');
var useCreatePaymentMethod = require('./useCreatePaymentMethod.js');
var useEncryptCard = require('./useEncryptCard.js');

function useFullPayment({ orgID, invoiceID, savedPaymentMethods, selectedPaymentMethod, debug = false, }) {
    const [paymentState, setPaymentState] = React.useState({
        paymentStatus: "processing",
        circlePaymentID: "",
        paymentID: ""
    });
    const setError = React.useCallback((paymentError) => {
        setPaymentState({
            paymentStatus: "error",
            circlePaymentID: "",
            paymentID: "",
            paymentError,
        });
    }, []);
    const [encryptCardData] = useEncryptCard.useEncryptCardData();
    const [createPaymentMethod] = useCreatePaymentMethod.useCreatePaymentMethod();
    const [makePayment] = graphqlGenerated.useCreatePaymentMutation();
    const fullPayment = React.useCallback(() => tslib_es6.__awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        const { billingInfo: selectedBillingInfo, paymentInfo: selectedPaymentInfo, } = selectedPaymentMethod;
        let cvv = "";
        if (typeof selectedPaymentInfo === "string") {
            cvv = selectedPaymentMethod.cvv;
        }
        else if (selectedPaymentInfo.type === "CreditCard") {
            cvv = selectedPaymentInfo.secureCode;
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
            circlePaymentID: "",
            paymentID: "",
        });
        let paymentMethodID = "";
        let circlePaymentID = "";
        let paymentID = "";
        let mutationError = undefined;
        let checkoutError = undefined;
        let paymentMethodCreatedAt = 0;
        if (typeof selectedPaymentInfo === "string") {
            // If selectedPaymentInfo is a payment method ID, that's all we need, no need to create a new payment method:
            paymentMethodID = selectedPaymentInfo;
        }
        else {
            let selectedBillingInfoData;
            if (typeof selectedBillingInfo === "string") {
                // If selectedPaymentInfo is an object and selectedBillingInfo is an addressID, we need to find the matching
                // data in savedPaymentMethods:
                const selectedPaymentMethod = savedPaymentMethods.find(({ addressId }) => addressId === selectedBillingInfo);
                if (!selectedPaymentMethod) {
                    setError(errors_constants.ERROR_PURCHASE_SELECTED_PAYMENT_METHOD());
                    return;
                }
                selectedBillingInfoData = circle_utils.savedPaymentMethodToBillingInfo(selectedPaymentMethod);
            }
            else {
                // If both selectedPaymentInfo and selectedBillingInfo are objects, we just create a new payment method with them:
                selectedBillingInfoData = selectedBillingInfo;
            }
            if (debug) {
                console.log("  💳 createPaymentMethod", {
                    orgID,
                    selectedBillingInfoData,
                    selectedPaymentInfo,
                });
            }
            const createPaymentMethodResult = yield createPaymentMethod(orgID, selectedBillingInfoData, selectedPaymentInfo).catch((error) => {
                mutationError = error;
                const circleFieldErrors = circle_utils.parseCircleError(error);
                if (debug)
                    console.log("    🔴 createPaymentMethod error", error, circleFieldErrors);
                if (circleFieldErrors) {
                    checkoutError = {
                        at: circleFieldErrors.firstAt,
                        error: mutationError,
                        circleFieldErrors,
                        errorMessage: circleFieldErrors.summary,
                    };
                }
            });
            paymentMethodCreatedAt = Date.now();
            if (createPaymentMethodResult && !createPaymentMethodResult.errors) {
                if (debug)
                    console.log("    🟢 createPaymentMethod result", createPaymentMethodResult);
                paymentMethodID = ((_b = (_a = createPaymentMethodResult.data) === null || _a === void 0 ? void 0 : _a.createPaymentMethod) === null || _b === void 0 ? void 0 : _b.id) || "";
            }
        }
        if (!paymentMethodID) {
            setError(checkoutError || errors_constants.ERROR_PURCHASE_CREATING_PAYMENT_METHOD(mutationError));
            return;
        }
        if (debug) {
            console.log("  💸 makePayment", {
                paymentMethodID,
                invoiceID,
            });
        }
        let metadata;
        if (cvv) {
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
            metadata = {
                creditCardData: {
                    keyID,
                    encryptedData: encryptedCardData,
                },
            };
        }
        const paymentMethodStatusWaitTime = Math.max(config.CIRCLE_MAX_EXPECTED_PAYMENT_CREATION_PROCESSING_TIME - (Date.now() - paymentMethodCreatedAt), 0);
        if (paymentMethodStatusWaitTime)
            yield promiseUtils.wait(paymentMethodStatusWaitTime);
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
            circlePaymentID = ((_d = (_c = makePaymentResult.data) === null || _c === void 0 ? void 0 : _c.createPayment) === null || _d === void 0 ? void 0 : _d.circlePaymentID) || "";
            paymentID = ((_f = (_e = makePaymentResult.data) === null || _e === void 0 ? void 0 : _e.createPayment) === null || _f === void 0 ? void 0 : _f.id) || "";
        }
        if (!circlePaymentID) {
            setError(errors_constants.ERROR_PURCHASE_PAYING(mutationError));
            return;
        }
        // TODO: Error handling and automatic retry:
        setPaymentState({
            paymentStatus: "processed",
            circlePaymentID,
            paymentID
        });
    }), [
        orgID,
        invoiceID,
        savedPaymentMethods,
        selectedPaymentMethod,
        debug,
        setError,
        encryptCardData,
        createPaymentMethod,
        makePayment,
    ]);
    return [paymentState, fullPayment];
}

exports.useFullPayment = useFullPayment;
//# sourceMappingURL=useFullPayment.js.map
