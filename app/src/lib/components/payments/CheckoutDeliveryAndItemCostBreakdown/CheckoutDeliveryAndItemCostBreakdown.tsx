import React from "react";
import { Divider, Stack } from "@mui/material";

import { DeliveryWalletSelector } from "../DeliveryWallet/DeliveryWalletSelector/DeliveryWalletSelector";
import { CheckoutItemCostBreakdown, CheckoutItemCostBreakdownWarningVariant } from "../CheckoutItemCost/Breakdown/CheckoutItemCostBreakdown";
import { CheckoutItem } from "../../../domain/product/product.interfaces";
import { TaxesState } from "../../../views/Billing/BillingView";
import { Wallet } from "../../../domain/wallet/wallet.interfaces";
import { FiatCurrency, CryptoCurrency } from "../../../domain/payment/payment.interfaces";

interface CheckoutDeliveryAndItemCostBreakdownProps {
  checkoutItems: CheckoutItem[];
  taxes: null | TaxesState;
  hideDiscount: boolean;
  showWalletAddress: boolean;
  hideWalletSelection?: boolean;
  displayCurrency: FiatCurrency;
  cryptoCurrencies: CryptoCurrency[];
  onlyCryptoWarningVariant?: CheckoutItemCostBreakdownWarningVariant;
  validatePersonalDeliveryAddress: boolean;
  wallets?: Wallet[];
  wallet: null | string | Wallet;
  multiSigEnabled: boolean;
  onWalletChange: (wallet: null | string | Wallet) => void;
}

export const CheckoutDeliveryAndItemCostBreakdown: React.FC<CheckoutDeliveryAndItemCostBreakdownProps> = ({
  checkoutItems,
  taxes,
  showWalletAddress = true,
  hideDiscount,
  hideWalletSelection,
  displayCurrency,
  cryptoCurrencies,
  onlyCryptoWarningVariant,
  validatePersonalDeliveryAddress,
  wallets,
  wallet,
  multiSigEnabled,
  onWalletChange,
}) => (
  <Stack sx={{ display: "flex", width: theme => ({ xs: "100%", md: `calc(50% - ${ theme.spacing(3.75 / 2) })` }) }}>
    {
      showWalletAddress &&
      (
        <DeliveryWalletSelector
          validatePersonalAddress={ validatePersonalDeliveryAddress }
          hideWalletSelection={ hideWalletSelection ?? false }
          wallets={ wallets }
          wallet={ wallet }
          multiSigEnabled={ multiSigEnabled }
          onWalletChange={ onWalletChange } />
      )
    }

    <Divider sx={{ my: 3.75 }} />

    <CheckoutItemCostBreakdown
      checkoutItems={ checkoutItems }
      taxes={ taxes }
      hideDiscount={ hideDiscount }
      displayCurrency={ displayCurrency }
      cryptoCurrencies={ cryptoCurrencies }
      onlyCryptoWarningVariant={ onlyCryptoWarningVariant } />
  </Stack>
);
