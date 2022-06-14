'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var payment_utils = require('../domain/payment/payment.utils.js');
var PaymentMethodSelector = require('../components/shared/PaymentMethodSelector/PaymentMethodSelector.js');
var graphqlGenerated = require('../queries/graphqlGenerated.js');
var arrayUtils = require('../utils/arrayUtils.js');

function useLimits(checkoutItem, acceptedPaymentTypes, paymentType) {
    var _a;
    const itemsCount = (checkoutItem === null || checkoutItem === void 0 ? void 0 : checkoutItem.units) || 0;
    const collectionItemId = (checkoutItem === null || checkoutItem === void 0 ? void 0 : checkoutItem.collectionItemId) || "";
    const { data: collectionItemData, loading: collectionItemLoading, } = graphqlGenerated.useCollectionItemByIdQuery({
        skip: !collectionItemId,
        variables: {
            id: collectionItemId,
        },
    });
    const collectionId = (_a = collectionItemData === null || collectionItemData === void 0 ? void 0 : collectionItemData.collectionItemById) === null || _a === void 0 ? void 0 : _a.collectionId;
    const { data: paymentLimitData, loading: paymentLimitLoading, refetch, } = graphqlGenerated.useValidatePaymentLimitQuery({
        skip: !collectionId,
        variables: {
            collectionId,
            itemsCount,
        },
        notifyOnNetworkStatusChange: true,
    });
    React.useEffect(() => {
        if (collectionId)
            refetch();
    }, [collectionId, refetch, paymentType]);
    const rawRemainingItemLimit = paymentLimitData === null || paymentLimitData === void 0 ? void 0 : paymentLimitData.validatePaymentLimit;
    const lastLimitsRef = React.useRef();
    const limits = React.useMemo(() => {
        if (rawRemainingItemLimit) {
            lastLimitsRef.current = payment_utils.transformRawRemainingItemLimit(rawRemainingItemLimit, itemsCount);
        }
        return lastLimitsRef.current;
    }, [rawRemainingItemLimit, itemsCount]);
    const getLimitExceededMessageFirstPart = React.useCallback((type) => {
        if (!limits || !type)
            return "";
        const paymentTypeLimit = limits[type];
        if (!paymentTypeLimit)
            return "";
        const purchaseLimit = paymentTypeLimit.purchase;
        const totalLimit = paymentTypeLimit.total;
        if (itemsCount > purchaseLimit && itemsCount > totalLimit) {
            return `You can't buy more than ${totalLimit} NFTs${purchaseLimit < totalLimit ? ` in batches of ${purchaseLimit}` : ""}`;
        }
        if (itemsCount > purchaseLimit && itemsCount <= totalLimit)
            return `You can't buy more than ${purchaseLimit} NFTs at once`;
        return "";
    }, [itemsCount, limits]);
    const limitExceededMessage = React.useMemo(() => {
        const firstPart = getLimitExceededMessageFirstPart(paymentType);
        const alternativePaymentMethods = acceptedPaymentTypes
            .filter((acceptedPaymentType) => acceptedPaymentType !== paymentType &&
            !getLimitExceededMessageFirstPart(acceptedPaymentType))
            .map((alternativePaymentMethodType) => PaymentMethodSelector.PAYMENT_METHOD_OPTION_PROPS[alternativePaymentMethodType].label);
        const tryWithMessage = alternativePaymentMethods.length
            ? ` with this payment method. Use ${arrayUtils.join(alternativePaymentMethods, ", ", " or ")} instead`
            : "";
        if (!firstPart)
            return "";
        return `${firstPart}${tryWithMessage}.`;
    }, [getLimitExceededMessageFirstPart, paymentType, acceptedPaymentTypes]);
    return {
        limits,
        loading: collectionItemLoading || paymentLimitLoading || !limits,
        refetch,
        limitExceededMessage,
    };
}

exports.useLimits = useLimits;
//# sourceMappingURL=useLimits.js.map
