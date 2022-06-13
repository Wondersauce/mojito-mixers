/// <reference types="react" />
export declare type PUIDictionarySingleLine = string | React.ReactElement;
export declare type PUIDictionaryMultiLine = PUIDictionarySingleLine[];
export declare type PUIDictionary = {
    walletInfo: PUIDictionarySingleLine;
    walletMultiSigTooltip: PUIDictionarySingleLine;
    wirePaymentsDisclaimer: PUIDictionaryMultiLine;
    purchaseInstructions: PUIDictionaryMultiLine;
    privacyHref?: string;
    termsOfUseHref?: string;
    goToMarketplaceHref?: string;
    goToMarketplaceLabel?: string;
    goToHref?: string;
    goToLabel?: string;
};
export declare type PUIDictionaryKeys = keyof PUIDictionary;
