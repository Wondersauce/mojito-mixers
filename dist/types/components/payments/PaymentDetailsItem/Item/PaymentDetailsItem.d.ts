import React from "react";
import { BaseItemProps } from "../../../shared/StackList/StackList";
import { SavedItemProps } from "../../SavedItem/SavedItem";
import { SavedPaymentMethod } from "../../../../domain/circle/circle.interfaces";
export declare type PaymentDetailsItemProps = BaseItemProps<SavedPaymentMethod, SavedItemProps>;
export declare const PaymentDetailsItem: React.FC<PaymentDetailsItemProps>;
