export type PUIDictionarySingleLine = string | React.ReactElement;
export type PUIDictionaryMultiLine = PUIDictionarySingleLine[];

export type PUIDictionary = {
  walletInfo: PUIDictionarySingleLine;
  walletMultiSigTooltip: PUIDictionarySingleLine;

  wireConfirmationInstruction: PUIDictionarySingleLine;
  wirePaymentsDisclaimer: PUIDictionaryMultiLine;
  purchaseInstructions: PUIDictionaryMultiLine;
  creditCardPurchaseInstructions: PUIDictionarySingleLine;
  cryptoPurchaseInstructions: PUIDictionarySingleLine;

  privacyHref?: string;
  termsOfUseHref?: string;

  goToMarketplaceHref?: string;
  goToMarketplaceLabel?: string;

  goToHref?: string;
  goToLabel?: string;
};

export type PUIDictionaryKeys = keyof PUIDictionary;
