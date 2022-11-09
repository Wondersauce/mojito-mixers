import { Box, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { WireInstructions } from "../../../queries/graphqlGenerated";
import { Wallet } from "../../../domain/wallet/wallet.interfaces";
import { Number } from "../../shared/Number/Number";
import { WireBilingInfo } from "./WireBilingInfo";
import { DeliveryWalletDetails } from "../DeliveryWallet/DeliveryWalletDetails/DeliveryWalletDetails";


export type PaymentStatus = "Payment Processed" | "Awaiting payment";

export interface BillingDetailsProps {
  paymentStatus: PaymentStatus;
  paymentType?: string;
  wireInstructions?: WireInstructions;
  wallet: null | string | Wallet;
  amount: number;
}

export const BillingDetails: React.FC<BillingDetailsProps> = ({
  wallet, wireInstructions, amount, paymentStatus, paymentType,
}) => {
  const walletType = useMemo(() => {
    return paymentType === "CreditCard" ? "Pace" : "Personal";
  }, [paymentType]);

  const paymentStatusColor = useMemo(() => {
    return paymentStatus === "Awaiting payment" ? "#F3E9DB" : "#E5F2E5";
  }, [paymentStatus]);

  const paymentTextColor = useMemo(() => {
    return paymentStatus === "Awaiting payment" ? "#D57E00" : "#31A136";
  }, [paymentStatus]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1, position: "relative", padding: 1 }}>
      <Stack
        spacing={ 2 }
        direction={{ xs: "column", sm: "row" }}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          pt: 2,
        }}>

        <Stack>
          <Typography sx={{ pb: 0.5 }} variant="subtitle2">
            Total Amount
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#F9F9F9", px: 1, pr: 4, minWidth: 120 }}>
            <Number as={ Typography } sx={{ color: "#31A136", fontSize: 20, fontWeight: 500 }} prefix="$">{ amount }</Number>
          </Box>
        </Stack>

        <Stack>
          <Typography sx={{ pb: 0.5 }} variant="subtitle2">
            Status
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1, backgroundColor: paymentStatusColor, px: 1, pr: 5, pl: 5, py: 1 }}>
            <Typography color={ paymentTextColor }>
              { paymentStatus }
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <DeliveryWalletDetails wallet={ wallet } walletType={ walletType } />

      { wireInstructions && (
      <WireBilingInfo
        trackingRef={ wireInstructions.trackingRef }
        beneficiaryName={ wireInstructions.beneficiary.name }
        address={ wireInstructions.beneficiaryBank.address }
        city={ wireInstructions.beneficiaryBank.city }
        country={ wireInstructions.beneficiaryBank.country }
        postalCode={ wireInstructions.beneficiaryBank.postalCode }
        accountNumber={ wireInstructions.beneficiaryBank.accountNumber }
        routingNumber={ wireInstructions.beneficiaryBank.routingNumber }
        bankName={ wireInstructions.beneficiaryBank.name }
        swiftCode={ wireInstructions.beneficiaryBank.swiftCode } />
      ) }
    </Box>
  );
};
