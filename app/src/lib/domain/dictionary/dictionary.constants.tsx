import React from "react";
import { Link, Tooltip, Typography } from "@mui/material";
import { PUIDictionary, PUIDictionarySingleLine } from "./dictionary.interfaces";

const walletMultiSigTooltip: PUIDictionarySingleLine = (
  <>
    If you don’t already have a wallet, we will create a <Link href="https://gnosis-safe.io/" target="_blank" rel="noopener noreferrer">Gnosis Safe MultiSig</Link> for you to receive your NFT.
    A MultiSig wallet is used for storing blockchain assets (crypto or NFTs) and enables “multiple signatures” to control access.
    You can transfer your NFTs from your MultiSig wallet to any self-hosted wallet at any time.
  </>
);

const walletMultiSigShortTooltip: PUIDictionarySingleLine = (
  <>
    A MultiSig wallet is used for storing blockchain assets (crypto or NFTs) and enables “multiple signatures” to control access.
    You can transfer your NFTs from your MultiSig wallet to any self-hosted wallet at any time.
  </>
);

const multiSigElement = (
  <Tooltip title={ walletMultiSigShortTooltip }>
    <Link sx={{ color: "text.primary" }}>MultiSig</Link>
  </Tooltip>
);

export const DEFAULT_DICTIONARY: PUIDictionary = {
  walletInfo: (
    <>
      <Typography sx={{ fontWeight: "500" }} component="strong">This is where your NFT(s) will be delivered after the sale is over.</Typography>{ " " }
      We will cover gas cost for minting and delivery on self-hosted wallets.
    </>
  ),

  walletMultiSigTooltip,

  wirePaymentsDisclaimer: [(
    <>
      <strong>Third-party wire transfers cannot be accepted. </strong>
      Your bank account name needs to match with the name you used to create your user account.
    </>
  ), (
    <>
      Please note that wire transfers usually take <strong>1-3 business days</strong> to arrive. We
      do not charge any deposit fee — however, your bank may charge you a wire transfer fee.
    </>
  )],

  purchaseInstructions: [
    "After the sale is closed, you’ll receive your NFTs to your chosen wallet.",
  ],

  goToMarketplaceHref: "",
  goToMarketplaceLabel: "",

  goToHref: "/profile/invoices",
  goToLabel: "View Invoices",
};
