'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function transformCheckoutItemsFromInvoice(parentCheckoutItems, initialCheckoutItems, invoiceItems = []) {
    // TODO: This function should later be updated to give precedence to whatever's in the invoice, but right now it's
    // not possible to get the required data (lotID, title, description...) from that query:
    const mainCheckoutItems = initialCheckoutItems.length > 0 ? initialCheckoutItems : parentCheckoutItems;
    return mainCheckoutItems.map((checkoutItem, i) => {
        // TODO: We should find the match based on ID, not index, but it's ok for now as we never buy more than 1 item at a time:
        const invoiceItem = invoiceItems[i];
        return Object.assign(Object.assign({}, checkoutItem), { units: (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.units) || checkoutItem.units || 1, unitPrice: (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.unitPrice) || 0, taxes: (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.taxes) || 0, totalPrice: (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.totalPrice) || 0, collectionItemId: (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.collectionItemID) || "" });
    });
}

exports.transformCheckoutItemsFromInvoice = transformCheckoutItemsFromInvoice;
//# sourceMappingURL=product.utils.js.map
