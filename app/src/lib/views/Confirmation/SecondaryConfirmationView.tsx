import React, { useMemo } from "react";
import { Stack, Divider, Typography } from "@mui/material";

import { CheckoutModalFooter } from "@components/payments/CheckoutModalFooter/CheckoutModalFooter";
import { BillingDetails, PurchaseInfo } from "@components/payments/PurchaseConfirmation";

import { WireInstructions } from "../../queries/graphqlGenerated";
import { Wallet } from "../../domain/wallet/wallet.interfaces";
import { useDictionary } from "../../hooks/useDictionary";
import { CheckoutItem } from "../../domain/product/product.interfaces";
import { SelectedPaymentMethod } from "../../components/public/CheckoutOverlay/CheckoutOverlay.hooks";
import { PUIDictionarySingleLine } from "../../domain/dictionary/dictionary.interfaces";


export interface WireConfirmationViewProps {
  checkoutItems: CheckoutItem[];
  wireInstructions?: WireInstructions;
  selectedPaymentMethod: SelectedPaymentMethod;
  wallet: null | string | Wallet;
  onNext: () => void;
}

export const SecondaryConfirmationView: React.FC<WireConfirmationViewProps> = ({
  checkoutItems,
  selectedPaymentMethod,
  wireInstructions,
  wallet,
  onNext,
}) => {
  const {
    wireConfirmationInstruction,
    creditCardPurchaseInstructions,
    cryptoPurchaseInstructions,
    goToMarketplaceHref,
    goToMarketplaceLabel,
  } = useDictionary();

  const totalAmount = useMemo(() => {
    return checkoutItems.map((item: CheckoutItem) => {
      return item.totalPrice;
    }).reduce((total: number, currentValue: number) => {
      return total + currentValue;
    }, 0);
  }, [checkoutItems]);

  const title = useMemo(() => {
    return wireInstructions ? "Wire instruction" : "Purchase Confirmation";
  }, [wireInstructions]);

  const paymentStatus = useMemo(() => {
    return wireInstructions ? "Awaiting payment" : "Payment Processed";
  }, [wireInstructions]);

  const purchaseInstruction = useMemo(() => {
    const type = selectedPaymentMethod.paymentType;
    if (type === "CreditCard") {
      return creditCardPurchaseInstructions;
    } if (type === "Crypto") {
      return cryptoPurchaseInstructions;
    }
    return wireConfirmationInstruction;
  }, [selectedPaymentMethod, wireConfirmationInstruction, creditCardPurchaseInstructions, cryptoPurchaseInstructions]);

  console.log("selectedPaymentMethod", selectedPaymentMethod);

  return (
    <Stack
      direction={{ xs: "column" }}
      spacing={{ xs: 3, md: 3.75 }}>
      <Stack
        spacing={ 2 }
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          pt: 1,
        }}>
        <Typography variant="h2">
          { title }
        </Typography>
      </Stack>
      <Stack direction={{ md: "row", xs: "column" }} sx={{ display: "flex", flex: 1 }}>
        <BillingDetails
          paymentStatus={ paymentStatus }
          paymentType={ selectedPaymentMethod.paymentType }
          wallet={ wallet }
          wireInstructions={ wireInstructions }
          amount={ totalAmount } />
        <Stack sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <PurchaseInfo
            purchaseInstruction={ purchaseInstruction as PUIDictionarySingleLine }
            paymentStatus={ paymentStatus }
            checkoutItems={ checkoutItems } />
          <Divider sx={{ display: { xs: "block", md: "none" } }} />
          <Stack sx={{
            justifyContent: "space-between",
            alignItems: { sm: "flex-start" },
            p: 2,
          }}>
            <CheckoutModalFooter
              variant="toMarketplace"
              onSubmitClicked={ onNext }
              submitHref={ goToMarketplaceHref }
              submitLabel={ goToMarketplaceLabel } />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
