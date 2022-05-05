import { useEffect, useMemo, useRef } from "react";

import { PaymentLimits, transformRawRemainingItemLimit } from "../domain/payment/payment.utils";
import { CheckoutItem } from "../domain/product/product.interfaces";
import { PaymentType } from "../domain/payment/payment.interfaces";
import { PAYMENT_METHOD_OPTION_PROPS } from "../components/shared/PaymentMethodSelector/PaymentMethodSelector";
import { useCollectionItemByIdQuery, useValidatePaymentLimitQuery } from "../queries/graphqlGenerated";

export interface UseLimitsReturn {
  limits?: PaymentLimits;
  loading: boolean;
  refetch: () => void;
  limitExceededMessage: string;
}

export function useLimits(
  checkoutItem: CheckoutItem,
  acceptedPaymentTypes: PaymentType[],
  paymentType?: PaymentType,
): UseLimitsReturn {
  const itemsCount = checkoutItem?.units || 0;
  const collectionItemId = checkoutItem?.collectionItemId || "";

  const {
    data: collectionItemData,
    loading: collectionItemLoading,
  } = useCollectionItemByIdQuery({
    skip: !collectionItemId,
    variables: {
      id: collectionItemId,
    },
  });

  const collectionId = collectionItemData?.collectionItemById?.collectionId;

  const {
    data: paymentLimitData,
    loading: paymentLimitLoading,
    refetch,
  } = useValidatePaymentLimitQuery({
    skip: !collectionId,
    variables: {
      collectionId,
      itemsCount,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    refetch();
  }, [refetch, paymentType]);

  const rawRemainingItemLimit = paymentLimitData?.validatePaymentLimit;

  const lastLimitsRef = useRef<undefined | Record<PaymentType, number>>();

  const limits: undefined | Record<PaymentType, number> = useMemo(() => {
    if (rawRemainingItemLimit) {
      lastLimitsRef.current = transformRawRemainingItemLimit(
        rawRemainingItemLimit,
        itemsCount,
      );
    }

    return lastLimitsRef.current;
  }, [rawRemainingItemLimit, itemsCount]);

  const limitExceededMessage = useMemo(() => {
    if (!limits || !paymentType) return "";

    const paymentTypeLimit = limits[paymentType];

    if (itemsCount <= limits[paymentType]) return "";

    const alternativePaymentMethods = acceptedPaymentTypes.filter((acceptedPaymentType: PaymentType) => {
      return acceptedPaymentType !== paymentType && itemsCount <= limits[paymentType];
    }).map((alternativePaymentMethodType: PaymentType) => {
      return PAYMENT_METHOD_OPTION_PROPS[alternativePaymentMethodType].label;
    });

    if (alternativePaymentMethods.length > 0) {
      const [lastAlternativePaymentMethod, ...otherAlternativePaymentMethods] = alternativePaymentMethods.slice(0).reverse();

      return `You can't buy more than ${
        paymentTypeLimit
      } items with ${
        PAYMENT_METHOD_OPTION_PROPS[paymentType].label
      }. Use ${ otherAlternativePaymentMethods.join(", ") }${ otherAlternativePaymentMethods.length ? " or " : "" }${ lastAlternativePaymentMethod } instead.`;
    }

    return `You have already bought the maximum${ paymentTypeLimit === Infinity ? "" : ` ${ paymentTypeLimit }` } items allowed for this sale.`;
  }, [limits, paymentType, itemsCount, acceptedPaymentTypes]);

  return {
    limits,
    loading: collectionItemLoading || paymentLimitLoading || !limits,
    refetch,
    limitExceededMessage,
  };
}