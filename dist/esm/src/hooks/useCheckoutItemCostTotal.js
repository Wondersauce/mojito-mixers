import { useMemo } from 'react';
import { to } from '../utils/typescriptUtils.js';

const useCheckoutItemsCostTotal = (checkoutItems) => {
    return useMemo(() => {
        const reduceResult = checkoutItems.reduce((resultAcc, checkoutItem) => {
            // result.total += checkoutItem.unitPrice * checkoutItem.units;
            resultAcc.total += checkoutItem.totalPrice;
            resultAcc.fees += checkoutItem.fee;
            resultAcc.taxAmount += checkoutItem.taxes;
            return resultAcc;
        }, to({ total: 0, fees: 0, taxAmount: 0 }));
        return Object.assign(Object.assign({}, reduceResult), { taxRate: 100 * reduceResult.taxAmount / (reduceResult.total || 1) });
    }, [checkoutItems]);
};

export { useCheckoutItemsCostTotal };
//# sourceMappingURL=useCheckoutItemCostTotal.js.map
