import { useEffect, useRef, useMemo, useCallback } from 'react';
import { transformRawRemainingItemLimit } from '../domain/payment/payment.utils.js';
import { PAYMENT_METHOD_OPTION_PROPS } from '../components/shared/PaymentMethodSelector/PaymentMethodSelector.js';
import { useCollectionItemByIdQuery, useValidatePaymentLimitQuery } from '../queries/graphqlGenerated.js';
import { join } from '../utils/arrayUtils.js';

function useLimits(checkoutItem, acceptedPaymentTypes, paymentType) {
    var _a;
    const itemsCount = (checkoutItem === null || checkoutItem === void 0 ? void 0 : checkoutItem.units) || 0;
    const collectionItemId = (checkoutItem === null || checkoutItem === void 0 ? void 0 : checkoutItem.collectionItemId) || "";
    const { data: collectionItemData, loading: collectionItemLoading, } = useCollectionItemByIdQuery({
        skip: !collectionItemId,
        variables: {
            id: collectionItemId,
        },
    });
    const collectionId = (_a = collectionItemData === null || collectionItemData === void 0 ? void 0 : collectionItemData.collectionItemById) === null || _a === void 0 ? void 0 : _a.collectionId;
    const { data: paymentLimitData, loading: paymentLimitLoading, refetch, } = useValidatePaymentLimitQuery({
        skip: !collectionId,
        variables: {
            collectionId,
            itemsCount,
        },
        notifyOnNetworkStatusChange: true,
    });
    useEffect(() => {
        if (collectionId)
            refetch();
    }, [collectionId, refetch, paymentType]);
    const rawRemainingItemLimit = paymentLimitData === null || paymentLimitData === void 0 ? void 0 : paymentLimitData.validatePaymentLimit;
    const lastLimitsRef = useRef();
    const limits = useMemo(() => {
        if (rawRemainingItemLimit) {
            lastLimitsRef.current = transformRawRemainingItemLimit(rawRemainingItemLimit, itemsCount);
        }
        return lastLimitsRef.current;
    }, [rawRemainingItemLimit, itemsCount]);
    const getLimitExceededMessageFirstPart = useCallback((type) => {
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
    const limitExceededMessage = useMemo(() => {
        const firstPart = getLimitExceededMessageFirstPart(paymentType);
        const alternativePaymentMethods = acceptedPaymentTypes
            .filter((acceptedPaymentType) => acceptedPaymentType !== paymentType &&
            !getLimitExceededMessageFirstPart(acceptedPaymentType))
            .map((alternativePaymentMethodType) => PAYMENT_METHOD_OPTION_PROPS[alternativePaymentMethodType].label);
        const tryWithMessage = alternativePaymentMethods.length
            ? ` with this payment method. Use ${join(alternativePaymentMethods, ", ", " or ")} instead`
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

export { useLimits };
//# sourceMappingURL=useLimits.js.map
