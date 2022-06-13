import { BoxProps } from "@mui/material";
import React from "react";
import { ThemeColors } from "../../../domain/mui/mui.interfaces";
export interface SavedItemLabels {
    active?: string;
    cvv?: string;
    edit?: string;
    delete?: string;
    select?: string;
}
export interface SavedItemStatus {
    label: string;
    tooltip: string;
    color: ThemeColors;
}
export declare type SavedItemActionEventHandler = (id: string, event?: React.MouseEvent<HTMLButtonElement>) => void;
export interface SavedItemProps {
    id?: string;
    variant?: "stacked" | "row";
    labels?: SavedItemLabels;
    disabled?: boolean | "selectOnly";
    active?: boolean;
    status?: SavedItemStatus;
    onEdit?: SavedItemActionEventHandler;
    onDelete?: SavedItemActionEventHandler;
    onPick?: SavedItemActionEventHandler;
    cvvLabel?: string;
    cvvError?: boolean;
    onCvvChange?: React.ChangeEventHandler<HTMLInputElement>;
    boxProps?: BoxProps;
}
export declare const SavedItem: React.FC<SavedItemProps & {
    children: React.ReactNode;
}>;
