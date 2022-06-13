import { CheckoutItem, CheckoutItemInfo, RawCheckoutItemInfo } from "./product.interfaces";
export declare function transformCheckoutItemsFromInvoice(parentCheckoutItems: CheckoutItemInfo[], initialCheckoutItems: CheckoutItemInfo[], invoiceItems?: RawCheckoutItemInfo[]): CheckoutItem[];
