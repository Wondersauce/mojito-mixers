import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { ReadOnlyField } from "@components/shared/ReadOnlyField/ReadOnlyField";

export interface LabelProps {
  name: string;
  value: string;
}

export const Label: React.FC<LabelProps> = ({ name, value }) => {
  return (
    <Stack flexDirection="row" sx={{ mb: 0.25 }}>
      <Typography sx={{ mr: 1, fontWeight: 500 }}>
        { name }:
      </Typography>
      <Typography>
        { value }
      </Typography>
    </Stack>
  );
};


export interface WireBilingInfoProps {
  trackingRef: string;
  beneficiaryName: string;
  accountNumber: string;
  routingNumber: string;
  bankName: string;
  swiftCode: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}
export const WireBilingInfo: React.FC<WireBilingInfoProps> = ({ trackingRef, beneficiaryName, accountNumber, routingNumber, bankName, swiftCode, address, city, country, postalCode }) => {
  const formattedAddress = useMemo(() => {
    const pinCode = postalCode ? ` - ${ postalCode }` : "";
    return [`${ address || "" }`, `${ city || "" }`, `${ country || "" }`].filter(item => item !== "").join(", ") + pinCode;
  }, [address, country, city, postalCode]);

  return (
    <Stack sx={{
      mt: 10,
      pb: { xs: 2.5, sm: 1.5 },
    }}>
      <Grid
        container
        spacing={ 2 }>
        <Grid item sm={ 6 }>
          <ReadOnlyField
            label="TrackingRef"
            value={ trackingRef } />
        </Grid>
        <Grid item sm={ 6 }>
          <ReadOnlyField
            label="Beneficiary Name"
            value={ beneficiaryName } />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flex: 1, flexDirection: "column", backgroundColor: "rgb(249,249,249)", p: 2, mt: 1 }}>
        <Label name="Bank Namer" value={ bankName } />
        <Label name="Account Number" value={ accountNumber } />
        <Label name="Routing Number" value={ routingNumber } />
        <Label name="SwiftCode" value={ swiftCode } />
      </Box>
      <Typography sx={{ fontWeight: 600, marginTop: 1 }}> Address </Typography>
      <Box sx={{ display: "flex", flex: 1, flexDirection: "column", backgroundColor: "rgb(249,249,249)", p: 2, mt: 1 }}>
        <Typography>
          { formattedAddress }
        </Typography>
      </Box>
    </Stack>
  );
};
