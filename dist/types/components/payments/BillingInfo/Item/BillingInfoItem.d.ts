import React from "react";
import { BaseItemProps } from "../../../shared/StackList/StackList";
import { SavedItemProps } from "../../SavedItem/SavedItem";
import { SavedPaymentMethod } from "../../../../domain/circle/circle.interfaces";
export declare type BillingInfoItemProps = BaseItemProps<SavedPaymentMethod, SavedItemProps>;
export declare const BillingInfoItem: React.FC<BillingInfoItemProps>;
