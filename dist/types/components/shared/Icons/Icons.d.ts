import { SvgIconProps } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import React from "react";
export declare const CREDIT_CARD_ICON_SX: SxProps<Theme>;
export declare const SelectIcon: (props: SvgIconProps) => JSX.Element;
export declare const CreditCardIcon: React.FC<SvgIconProps & {
    network: string;
}>;
