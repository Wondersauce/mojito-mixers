import { Box, Stack, Typography, Avatar } from "@mui/material";
import React, { useCallback } from "react";
import { CheckoutItem } from "../../../domain/product/product.interfaces";
import { PUIDictionarySingleLine } from "../../../domain/dictionary/dictionary.interfaces";


export interface PurchaseInfoProps {
  paymentStatus: string;
  checkoutItems: CheckoutItem[];
  purchaseInstruction: PUIDictionarySingleLine;
}

export const PurchaseInfo: React.FC<PurchaseInfoProps> = ({
  paymentStatus,
  checkoutItems,
  purchaseInstruction,
}) => {
  const renderCheckoutItem = useCallback((item: CheckoutItem) => {
    return <CheckoutItem key={ item.name } name={ item.name } productImageURL={ item.imageSrc } units={ item.units } />;
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1, position: "relative", padding: 1, pl: 3 }}>
      <Typography sx={{ pt: 1, lineHeight: 2, fontSize: 20, fontWeight: "400" }}>
        You Purchased
      </Typography>
      <Stack
        spacing={ 2 }
        direction={{ xs: "column", sm: "row" }}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          pt: 1.5,
        }}>
        { checkoutItems.map(renderCheckoutItem) }
      </Stack>

      <Stack
        sx={{
          pb: { xs: 2.5, sm: 1.5 },
        }}>
        <Stack sx={{ display: "flex", flex: 1, flexDirection: "column", mt: 1 }}>
          <Typography sx={{ pt: 1, lineHeight: 3, fontSize: 14 }}>
            { paymentStatus }
          </Typography>
          <Typography component="p" sx={{ lineHeight: 1.5, fontSize: 14, whiteSpace: "pre-line", marginTop: "10px" }}>
            { purchaseInstruction }
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};


export interface CheckoutItemProps {
  name?: string;
  units?: number;
  productImageURL?: string;
}
const CheckoutItem: React.FC<CheckoutItemProps> = ({ name, productImageURL, units }) => {
  return (
    <Box sx={{ flex: 1, display: "flex" }}>
      <Avatar
        alt={ name }
        src={ productImageURL }
        variant="square"
        sx={{
          width: 80,
          height: 80,
          flex: "0 0 auto",
        }} />

      <Box
        sx={{
          marginLeft: 2,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}>
        <Typography sx={{ fontWeight: "500", fontSize: "19px", lineHeight: 1 }} variant="overline">{ name }</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt: 2,
          }}>
          <Typography>Quantity: <Box component="span" sx={{ fontWeight: 500 }}>{ units }</Box></Typography>
        </Box>
      </Box>
    </Box>
  );
};
