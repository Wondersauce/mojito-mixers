import { __rest } from '../../../../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { BillingInfoFragment } from '../Fragment/BillingInfoFragment.js';
import { SavedItem } from '../../SavedItem/SavedItem.js';
import { EMPTY_ADDRESS_ID } from '../../../../domain/circle/circle.utils.js';

const BILLING_INFO_ITEM_LABELS = {
    select: "Use Billing Info",
};
const BillingInfoItem = (_a) => {
    var { data: savedPaymentMethod, additionalProps: savedItemProps, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    index } = _a, boxProps = __rest(_a, ["data", "additionalProps", "children", "index"]);
    if (savedPaymentMethod.addressId === EMPTY_ADDRESS_ID)
        return null;
    return (React__default.createElement(SavedItem, Object.assign({ variant: "stacked", labels: BILLING_INFO_ITEM_LABELS }, savedItemProps, { id: savedPaymentMethod.addressId, boxProps: Object.assign(Object.assign({}, boxProps), savedItemProps === null || savedItemProps === void 0 ? void 0 : savedItemProps.boxProps) }),
        React__default.createElement(BillingInfoFragment, { savedPaymentMethod: savedPaymentMethod })));
};

export { BillingInfoItem };
//# sourceMappingURL=BillingInfoItem.js.map
