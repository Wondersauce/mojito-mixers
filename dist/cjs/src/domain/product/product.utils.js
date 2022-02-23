'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function transformCheckoutItemsFromInvoice(checkoutItems, invoiceItems = []) {
    // TODO: This function should later be updated to give precedence to whatever's in the invoice, but right now it's
    // not possible to get the required data (lotID, title, description...) from that query:
    return checkoutItems.map((checkoutItem, i) => {
        // TODO: We should find the match based on ID, not index, but it's ok for now as we never buy more than 1 item at a time:
        const invoiceItem = invoiceItems[i];
        return invoiceItem ? Object.assign(Object.assign({}, checkoutItem), { units: invoiceItem.units, unitPrice: invoiceItem.unitPrice }) : checkoutItem;
    });
}

exports.transformCheckoutItemsFromInvoice = transformCheckoutItemsFromInvoice;
//# sourceMappingURL=product.utils.js.map
