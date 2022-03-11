import React from "react";
import { Divider, Stack } from "@mui/material";

import { DeliveryWalletSelector } from "../DeliveryWallet/DeliveryWalletSelector/DeliveryWalletSelector";
import { CheckoutItemCostBreakdown } from "../CheckoutItemCost/Breakdown/CheckoutItemCostBreakdown";
import { CheckoutItem } from "../../../domain/product/product.interfaces";
import { TaxesState } from "../../../views/Billing/BillingView";
import { PUIDictionary } from "../../../domain/dictionary/dictionary.interfaces";
import { Wallet } from "../../../domain/wallet/wallet.interfaces";

interface CheckoutDeliveryAndItemCostBreakdownProps {
  checkoutItems: CheckoutItem[];
  taxes: TaxesState;
  validatePersonalDeliveryAddress: boolean;
  walletAddress: string | null;
  wallets?: Wallet[];
  onWalletAddressChange: (walletAddress: string | null) => void;
  dictionary: PUIDictionary;
}

export const CheckoutDeliveryAndItemCostBreakdown: React.FC<CheckoutDeliveryAndItemCostBreakdownProps> = ({
  checkoutItems,
  taxes,
  validatePersonalDeliveryAddress,
  walletAddress,
  wallets,
  onWalletAddressChange,
  dictionary,
}) => (
    <Stack sx={{ display: "flex", flex: 1 }}>
      <DeliveryWalletSelector
        validatePersonalAddress={ validatePersonalDeliveryAddress }
        walletAddress={ walletAddress }
        wallets={ wallets }
        onWalletAddressChange={ onWalletAddressChange }
        dictionary={ dictionary } />

      <Divider sx={{ my: 3.75 }} />

      <CheckoutItemCostBreakdown checkoutItems={ checkoutItems } taxes={ taxes } />
    </Stack>
  );
