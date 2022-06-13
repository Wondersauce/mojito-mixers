'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var typescriptUtils = require('../utils/typescriptUtils.js');

const useCheckoutItemsCostTotal = (checkoutItems) => {
    return React.useMemo(() => {
        const reduceResult = checkoutItems.reduce((resultAcc, checkoutItem) => {
            // result.total += checkoutItem.unitPrice * checkoutItem.units;
            resultAcc.total += checkoutItem.totalPrice;
            resultAcc.fees += checkoutItem.fee;
            resultAcc.taxAmount += checkoutItem.taxes;
            return resultAcc;
        }, typescriptUtils.to({ total: 0, fees: 0, taxAmount: 0 }));
        return Object.assign(Object.assign({}, reduceResult), { taxRate: 100 * reduceResult.taxAmount / (reduceResult.total || 1) });
    }, [checkoutItems]);
};

exports.useCheckoutItemsCostTotal = useCheckoutItemsCostTotal;
//# sourceMappingURL=useCheckoutItemCostTotal.js.map
