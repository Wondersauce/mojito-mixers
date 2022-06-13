import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import { useCallback } from 'react';
import { useGetPaymentMethodStatusLazyQuery, useCreatePaymentMethodMutation, PaymentType } from '../queries/graphqlGenerated.js';
import { useEncryptCardData } from './useEncryptCard.js';
import { formatPhoneAsE123, billingInfoToBillingDetails } from '../domain/circle/circle.utils.js';
import { wait } from '../utils/promiseUtils.js';
import { PAYMENT_CREATION_MAX_WAIT_MS, PAYMENT_CREATION_INTERVAL_MS } from '../config/config.js';
import { EXCEPTIONS } from '../domain/errors/exceptions.constants.js';

function useCreatePaymentMethod({ orgID, debug, }) {
    const [encryptCardData] = useEncryptCardData({ orgID });
    const [getPaymentMethodStatus] = useGetPaymentMethodStatusLazyQuery();
    const [createPaymentMethod, createPaymentMethodResult] = useCreatePaymentMethodMutation();
    const extendedCreatePaymentMethod = useCallback((billingInfo, paymentInfo) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const metadata = {
            email: billingInfo.email,
            phoneNumber: formatPhoneAsE123(billingInfo.phone, `${billingInfo.country.value}`),
        };
        let createPaymentMethodPromise = null;
        if (paymentInfo.type === PaymentType.CreditCard) {
            const { keyID, encryptedCardData } = yield encryptCardData({
                number: paymentInfo.cardNumber.replace(/\s/g, ""),
                cvv: paymentInfo.secureCode,
            });
            const [expirationMonth, expirationYearLastTwoDigits] = paymentInfo.expiryDate.split("/").map(value => parseInt(value.trim(), 10));
            const expirationYear = 2000 + expirationYearLastTwoDigits;
            createPaymentMethodPromise = createPaymentMethod({
                variables: {
                    orgID,
                    input: {
                        paymentType: PaymentType.CreditCard,
                        creditCardData: {
                            keyID,
                            encryptedData: encryptedCardData,
                            expirationMonth,
                            expirationYear,
                            metadata,
                            billingDetails: billingInfoToBillingDetails(billingInfo),
                        },
                    },
                },
            });
        }
        else if (paymentInfo.type === PaymentType.Ach) {
            createPaymentMethodPromise = createPaymentMethod({
                variables: {
                    orgID,
                    input: {
                        paymentType: PaymentType.Ach,
                        achData: {
                            // TODO: Add account name?
                            accountId: paymentInfo.accountId,
                            publicToken: paymentInfo.publicToken,
                            metadata,
                            billingDetails: billingInfoToBillingDetails(billingInfo),
                        },
                    },
                },
            });
        }
        else if (paymentInfo.type === PaymentType.Crypto) {
            createPaymentMethodPromise = createPaymentMethod({
                variables: {
                    orgID,
                    input: {
                        paymentType: PaymentType.Crypto,
                    },
                },
            });
        }
        else {
            throw new Error(EXCEPTIONS.PAYMENT_METHOD.UNSUPPORTED);
        }
        let lastPaymentMethodStatusCheck;
        const paymentMethodCreatedAt = lastPaymentMethodStatusCheck = Date.now();
        const createPaymentMethodPromiseResult = createPaymentMethodPromise ? yield createPaymentMethodPromise : null;
        const createPaymentMethodResultData = ((_a = createPaymentMethodPromiseResult === null || createPaymentMethodPromiseResult === void 0 ? void 0 : createPaymentMethodPromiseResult.data) === null || _a === void 0 ? void 0 : _a.createPaymentMethod) || {};
        const paymentMethodID = createPaymentMethodResultData.id;
        let status = createPaymentMethodResultData.status;
        let totalWaitTimeSoFar = 0;
        if (!paymentMethodID)
            throw new Error(EXCEPTIONS.PAYMENT_METHOD.CREATION_FAILED);
        while (totalWaitTimeSoFar < PAYMENT_CREATION_MAX_WAIT_MS && status === "pending") {
            const now = Date.now();
            const paymentMethodStatusWaitTime = Math.max(PAYMENT_CREATION_INTERVAL_MS - (now - lastPaymentMethodStatusCheck), 0);
            totalWaitTimeSoFar = now - paymentMethodCreatedAt;
            if (debug) {
                console.log(`    👀 getPaymentMethodStatus (${totalWaitTimeSoFar / 1000 | 0} / ${PAYMENT_CREATION_MAX_WAIT_MS / 1000 | 0} sec.)`, { paymentMethodID });
            }
            // eslint-disable-next-line no-await-in-loop
            if (paymentMethodStatusWaitTime > 0)
                yield wait(paymentMethodStatusWaitTime);
            lastPaymentMethodStatusCheck = Date.now();
            // eslint-disable-next-line no-await-in-loop
            const paymentMethodStatusResult = yield getPaymentMethodStatus({
                variables: { paymentMethodID },
            });
            status = ((_c = (_b = paymentMethodStatusResult.data) === null || _b === void 0 ? void 0 : _b.getPaymentMethod) === null || _c === void 0 ? void 0 : _c.status) || "failed";
        }
        if (status === "failed")
            throw new Error(EXCEPTIONS.PAYMENT_METHOD.VALIDATION_FAILED);
        else if (status === "complete")
            return createPaymentMethodPromise;
        throw new Error(EXCEPTIONS.PAYMENT_METHOD.VALIDATION_TIMEOUT);
    }), [debug, orgID, encryptCardData, createPaymentMethod, getPaymentMethodStatus]);
    return [extendedCreatePaymentMethod, createPaymentMethodResult];
}

export { useCreatePaymentMethod };
//# sourceMappingURL=useCreatePaymentMethod.js.map
