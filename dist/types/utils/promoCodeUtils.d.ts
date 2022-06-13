import React from "react";
interface IPromoCode {
    code: string;
    id?: string;
    total?: number;
}
interface PromoCodeProviderProps {
    children?: React.ReactNode;
}
declare const PromoCodeProvider: React.FC<PromoCodeProviderProps>;
declare const usePromoCode: () => {
    promoCode: IPromoCode;
    onChangePromoCode: (value: string) => void;
    onApply: () => Promise<void>;
    editable: boolean;
    setEditable: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    invoiceItemIDs: string[];
    setInvoiceItemIDs: React.Dispatch<React.SetStateAction<string[]>>;
};
export { PromoCodeProvider, usePromoCode };
