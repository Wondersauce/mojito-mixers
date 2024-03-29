import { Theme, SxProps } from "@mui/material/styles";
import React from "react";
import { UserFormat } from "../../../domain/auth/authentication.interfaces";
import { User } from "../../../queries/graphqlGenerated";
export declare type CheckoutModalHeaderVariant = "anonymous" | "guest" | "loggedIn" | "logoOnly" | "purchasing" | "error";
export interface CheckoutModalHeaderProps {
    variant: CheckoutModalHeaderVariant;
    countdownElementRef?: React.RefObject<HTMLSpanElement>;
    title?: string;
    logoSrc?: string;
    logoSx?: SxProps<Theme>;
    user?: User;
    userFormat?: UserFormat;
    onLogin?: () => void;
    onClose?: () => void;
    onPrev?: () => void;
    toggleDebug?: () => void;
}
export declare const CheckoutModalHeader: React.FC<CheckoutModalHeaderProps>;
