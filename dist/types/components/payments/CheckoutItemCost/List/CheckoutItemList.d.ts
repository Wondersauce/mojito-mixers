import React from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { CheckoutItem } from "../../../../domain/product/product.interfaces";
interface CheckoutItemListProps {
    sx?: SxProps<Theme>;
    checkoutItems: CheckoutItem[];
    withSeparators?: boolean;
    showPrices?: boolean;
}
export declare const CheckoutItemList: React.FC<CheckoutItemListProps>;
export {};
