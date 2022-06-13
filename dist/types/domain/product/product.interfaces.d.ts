import { GetInvoiceDetailsQuery } from "../../queries/graphqlGenerated";
export declare type LotType = "auction" | "buyNow";
export declare type RawCheckoutItemInfo = GetInvoiceDetailsQuery["getInvoiceDetails"]["items"][0];
export interface CheckoutItemInfo {
    lotID: string;
    lotType: LotType;
    name: string;
    description: string;
    imageSrc: string;
    imageBackground: string;
    collectionItemId: string;
    totalSupply: number;
    remainingSupply: number;
    units: number;
    fee: number;
}
export interface CheckoutItem extends CheckoutItemInfo {
    unitPrice: number;
    taxes: number;
    totalPrice: number;
}
