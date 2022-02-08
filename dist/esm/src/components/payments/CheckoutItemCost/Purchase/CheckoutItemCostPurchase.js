import { Grid, Divider } from '@mui/material';
import React__default from 'react';
import { CheckoutItemCostTotal } from '../Total/CheckoutItemCostTotal.js';
import { BillingInfoFragment } from '../../BillingInfo/Fragment/BillingInfoFragment.js';

const CheckoutItemCostPurchase = ({ checkoutItem: { price, fee, }, selectedPaymentMethodBillingInfo, }) => {
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Grid, { container: true, item: true, direction: "column", sx: { display: "flex", pb: 2 } },
            React__default.createElement(BillingInfoFragment, { savedPaymentMethod: selectedPaymentMethodBillingInfo }),
            React__default.createElement(CheckoutItemCostTotal, { price: price, fee: fee })),
        React__default.createElement(Divider, null)));
};

export { CheckoutItemCostPurchase };
//# sourceMappingURL=CheckoutItemCostPurchase.js.map
