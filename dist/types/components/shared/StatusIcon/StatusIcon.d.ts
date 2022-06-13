import { BoxProps, SvgIcon } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
export declare type StatusIconVariant = "loading" | "success" | "error";
export interface StatusIconProps extends BoxProps {
    variant?: StatusIconVariant;
    imgSrc?: string;
}
export interface StatusIconConfig {
    icon: typeof SvgIcon;
    iconColor: (theme: Theme) => string;
    defaultImgSrc?: string;
}
export declare const StatusIcon: React.FC<StatusIconProps>;
