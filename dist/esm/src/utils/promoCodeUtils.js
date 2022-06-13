import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { useMemo, useCallback } from 'react';
import { useApplyDiscountCodeLazyQuery } from '../queries/graphqlGenerated.js';

const defaultPromoCode = { code: "" };
const PromoCodeContext = React__default.createContext({
    promoCode: defaultPromoCode,
    setPromoCode: () => undefined,
    editable: false,
    setEditable: () => false,
    error: null,
    setError: () => undefined,
    invoiceItemIDs: [],
    setInvoiceItemIDs: () => undefined,
});
const PromoCodeProvider = ({ children }) => {
    const [promoCode, setPromoCode] = React__default.useState(defaultPromoCode);
    const [editable, setEditable] = React__default.useState(false);
    const [error, setError] = React__default.useState(null);
    const [invoiceItemIDs, setInvoiceItemIDs] = React__default.useState([]);
    const PromoCodeProviderValue = useMemo(() => ({ promoCode, setPromoCode, editable, setEditable, error, setError, invoiceItemIDs, setInvoiceItemIDs }), [promoCode, setPromoCode, editable, setEditable, error, setError, invoiceItemIDs, setInvoiceItemIDs]);
    return (React__default.createElement(PromoCodeContext.Provider, { value: PromoCodeProviderValue }, children));
};
const usePromoCode = () => {
    const [applyDiscountCode] = useApplyDiscountCodeLazyQuery();
    const { promoCode, setPromoCode, editable, setEditable, error, setError, invoiceItemIDs, setInvoiceItemIDs } = React__default.useContext(PromoCodeContext);
    const onChangePromoCode = (value) => {
        setPromoCode(code => (Object.assign(Object.assign({}, code), { code: value })));
        setError(null);
    };
    const onApply = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const invoiceItemPromises = invoiceItemIDs.map(invoiceItemID => applyDiscountCode({
                variables: {
                    discountCode: promoCode.code,
                    invoiceItemID,
                },
            }));
            const results = yield Promise.all(invoiceItemPromises).then(discountResults => discountResults.map(discountResult => {
                var _a, _b, _c, _d, _e;
                return ({
                    id: (_c = (_b = (_a = discountResult.data) === null || _a === void 0 ? void 0 : _a.applyDiscountCode) === null || _b === void 0 ? void 0 : _b.discountCode) === null || _c === void 0 ? void 0 : _c.id,
                    total: (_e = (_d = discountResult.data) === null || _d === void 0 ? void 0 : _d.applyDiscountCode) === null || _e === void 0 ? void 0 : _e.totalPriceAfterDiscount,
                });
            }));
            let id;
            let total = 0;
            results.forEach((result) => {
                if (result.id) {
                    id = result.id;
                }
                if (result.total) {
                    total += result.total;
                }
            });
            if (id && total) {
                // update total
                setPromoCode(code => (Object.assign(Object.assign({}, code), { id,
                    total })));
                setError(null);
            }
            else {
                setError("Code invalid");
            }
        }
        catch (e) {
            console.log(e);
        }
    }), [applyDiscountCode, invoiceItemIDs, promoCode, setError, setPromoCode]);
    return { promoCode, onChangePromoCode, onApply, editable, setEditable, error, invoiceItemIDs, setInvoiceItemIDs };
};

export { PromoCodeProvider, usePromoCode };
//# sourceMappingURL=promoCodeUtils.js.map
