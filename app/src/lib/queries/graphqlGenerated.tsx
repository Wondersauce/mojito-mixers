import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  EthAddress: any;
  Time: any;
  UUID: any;
  UUID1: any;
  Upload: any;
};

export type AchBankAddressOutput = {
  __typename?: 'ACHBankAddressOutput';
  address1: Scalars['String'];
  address2: Scalars['String'];
  bankName: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  district: Scalars['String'];
};

export type AchBillingDetails = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
};

export type AchBillingDetailsOutput = {
  __typename?: 'ACHBillingDetailsOutput';
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  district: Scalars['String'];
  name: Scalars['String'];
  postalCode: Scalars['String'];
};

export type AchData = {
  accountId: Scalars['String'];
  billingDetails: AchBillingDetails;
  metadata: AchMetadata;
  publicToken: Scalars['String'];
};

export type AchMetadata = {
  email: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type AchMetadataOutput = {
  __typename?: 'ACHMetadataOutput';
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type AchPaymentMethodOutput = {
  __typename?: 'ACHPaymentMethodOutput';
  accountNumber: Scalars['String'];
  bankAddress?: Maybe<AchBankAddressOutput>;
  billingDetails?: Maybe<AchBillingDetailsOutput>;
  id: Scalars['UUID1'];
  metadata?: Maybe<AchMetadataOutput>;
  status: Scalars['String'];
  type: PaymentType;
};

export type AchPaymentMethodPrepareStatementOutput = {
  __typename?: 'ACHPaymentMethodPrepareStatementOutput';
  linkToken: Scalars['String'];
};

export type ActiveWalletFilterInput = {
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ActiveWalletSortInput>;
};

export enum ActiveWalletSortInput {
  MostSaved = 'most_saved',
  PriceHighToLow = 'price_high_to_low',
  PriceLowToHigh = 'price_low_to_high',
  PurchasedFromOrg = 'purchased_from_org',
  RecentlyListed = 'recently_listed',
  RecentlyMinted = 'recently_minted'
}

export enum ActivityName {
  BoughtItem = 'Bought_Item',
  ListedItem = 'Listed_Item',
  ListedItemRemoved = 'Listed_Item_Removed',
  OfferCancelled = 'Offer_Cancelled',
  OfferExpired = 'Offer_Expired',
  OfferRejected = 'Offer_Rejected',
  Offered = 'Offered',
  SoldItem = 'Sold_Item'
}

export type Address = {
  __typename?: 'Address';
  buildingName?: Maybe<Scalars['String']>;
  buildingNumber?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  flatNumber?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  postcode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  subStreet?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  buildingName?: InputMaybe<Scalars['String']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  flatNumber?: InputMaybe<Scalars['String']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  postcode: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  subStreet?: InputMaybe<Scalars['String']>;
  town?: InputMaybe<Scalars['String']>;
};

export type AddressScreeningInput = {
  address: Scalars['String'];
  asset: Scalars['String'];
  network: Scalars['String'];
};

export type AllowList = {
  __typename?: 'AllowList';
  description: Scalars['String'];
  elements: Array<AllowListElement>;
  endTime: Scalars['Time'];
  filteringType: FilteringType;
  id: Scalars['UUID1'];
  identifierType: IdentifierType;
  name: Scalars['String'];
  startTime: Scalars['Time'];
};

export type AllowListElement = {
  __typename?: 'AllowListElement';
  id: Scalars['UUID1'];
  identifierValue: Scalars['String'];
};

export type AllowListInput = {
  description: Scalars['String'];
  elements: Array<Scalars['String']>;
  endTime: Scalars['Time'];
  filteringType: FilteringType;
  identifierType: IdentifierType;
  name: Scalars['String'];
  startTime: Scalars['Time'];
};

export type AllowListRequest = {
  description?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['Time']>;
  filteringType?: InputMaybe<Scalars['String']>;
  identifierType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Time']>;
  updatedAt?: InputMaybe<Scalars['Time']>;
};

export type ApplicantRequest = {
  address?: InputMaybe<AddressInput>;
  dob?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  idNumbers?: InputMaybe<Array<InputMaybe<IdNumberInput>>>;
  lastName: Scalars['String'];
};

export type ApplicantResponse = {
  __typename?: 'ApplicantResponse';
  address?: Maybe<Address>;
  dob?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  href?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  idNumbers?: Maybe<Array<Maybe<IdNumber>>>;
  lastName: Scalars['String'];
};

export type Artist = {
  __typename?: 'Artist';
  active: Scalars['Boolean'];
  artistContactEmail: Scalars['String'];
  artistContactNumber: Scalars['String'];
  artistLocation: Scalars['String'];
  artistName: Scalars['String'];
  artistWebsite?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID1'];
  marketplace: Marketplace;
  marketplaceId: Scalars['UUID1'];
  organization: Organization;
  organizationId: Scalars['UUID1'];
  priority: Scalars['Int'];
};

export type ArtistInput = {
  artistContactEmail?: InputMaybe<Scalars['String']>;
  artistContactNumber?: InputMaybe<Scalars['String']>;
  artistLocation?: InputMaybe<Scalars['String']>;
  artistName: Scalars['String'];
  artistWebsite?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  marketplaceId: Scalars['UUID1'];
  organizationId: Scalars['UUID1'];
  priority: Scalars['Int'];
};

export type Asset = {
  __typename?: 'Asset';
  currentVersion?: Maybe<AssetVersion>;
  id: Scalars['UUID1'];
  versions?: Maybe<Array<AssetVersion>>;
};

export type AssetFilter = {
  organizationID?: InputMaybe<Scalars['UUID1']>;
};

export type AssetVersion = {
  __typename?: 'AssetVersion';
  arweaveTx?: Maybe<Scalars['String']>;
  asset: Asset;
  assetID: Scalars['UUID1'];
  cdnUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID1'];
  isCurrent: Scalars['Boolean'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type AttributeValue = AttributeValueBool | AttributeValueFloat | AttributeValueInt | AttributeValueString;

export type AttributeValueBool = {
  __typename?: 'AttributeValueBool';
  boolValue: Scalars['Boolean'];
};

export type AttributeValueFloat = {
  __typename?: 'AttributeValueFloat';
  floatValue: Scalars['Float'];
};

export type AttributeValueInt = {
  __typename?: 'AttributeValueInt';
  intValue: Scalars['Int'];
};

export type AttributeValueString = {
  __typename?: 'AttributeValueString';
  stringValue: Scalars['String'];
};

export enum AuctionBidOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum AuctionLotStatus {
  Active = 'Active',
  Completed = 'Completed',
  Hidden = 'Hidden',
  Preview = 'Preview'
}

export type BidFilterInput = {
  marketplaceAuctionLotId?: InputMaybe<Scalars['UUID']>;
  order?: InputMaybe<AuctionBidOrder>;
  returnDeleted?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type BuyNowTransactionResponse = {
  __typename?: 'BuyNowTransactionResponse';
  order?: Maybe<Order>;
  success: Scalars['Boolean'];
};

export type BuyerDetailOutput = {
  __typename?: 'BuyerDetailOutput';
  externalUserID: Scalars['String'];
  timestamp: Scalars['Time'];
  totalPrice: Scalars['Float'];
  units: Scalars['Int'];
  user?: Maybe<User>;
  userId: Scalars['UUID1'];
  username?: Maybe<Scalars['String']>;
};

export type Card = {
  first6: Scalars['String'];
  hash: Scalars['String'];
  last4: Scalars['String'];
};

export type CardResponse = {
  __typename?: 'CardResponse';
  level?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type CardScreeningInput = {
  customer?: InputMaybe<CustomerInput>;
  flow: Scalars['String'];
  sessionKey: Scalars['String'];
  transaction: TransactionInput;
};

export type Category = {
  __typename?: 'Category';
  active: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID1'];
  marketplace: Marketplace;
  marketplaceId: Scalars['UUID1'];
  name: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['UUID1'];
  priority: Scalars['Int'];
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']>;
  marketplaceId: Scalars['UUID1'];
  name: Scalars['String'];
  organizationId: Scalars['UUID1'];
  priority: Scalars['Int'];
};

export enum ChainalysisNetwork {
  Ethereum = 'Ethereum',
  Polygon = 'Polygon'
}

export type CheckResponse = {
  __typename?: 'CheckResponse';
  id: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum CollectionType {
  Auction = 'Auction',
  Tk2 = 'TK2'
}

export type Contract = {
  __typename?: 'Contract';
  Address?: Maybe<Scalars['String']>;
  ContractMetadata?: Maybe<ContractMetaData>;
};

export type ContractMetaData = {
  __typename?: 'ContractMetaData';
  Name?: Maybe<Scalars['String']>;
  Symbol?: Maybe<Scalars['String']>;
  TokenType?: Maybe<Scalars['String']>;
  TotalSupply?: Maybe<Scalars['String']>;
};

export enum ContractType {
  Erc721Creator = 'ERC721Creator',
  Erc1155Creator = 'ERC1155Creator'
}

export type CreateEmailTemplateInput = {
  eventType: EventType;
  orgID: Scalars['UUID1'];
  subject: Scalars['String'];
  templateContent: Scalars['String'];
};

export type CreateMarketplaceBuyNowLotInput = {
  collectionId: Scalars['UUID1'];
  collectionItemName: Scalars['String'];
  delivery?: InputMaybe<MarketplaceItemDeliveryInput>;
  endDate: Scalars['Time'];
  marketplaceTokenId?: InputMaybe<Scalars['UUID1']>;
  sortNumber: Scalars['Int'];
  startDate: Scalars['Time'];
  totalUnits?: InputMaybe<Scalars['Int']>;
  unitPrice: Scalars['Float'];
};

export type CreateMarketplaceClaimableSetInput = {
  collectionId: Scalars['UUID1'];
  collectionItemName: Scalars['String'];
  delivery: MarketplaceItemDeliveryInput;
  endDate: Scalars['Time'];
  perWalletLimit: Scalars['Int'];
  promoCodeConfig?: InputMaybe<MarketplaceItemCodeConfigInput>;
  startDate: Scalars['Time'];
  totalUnits: Scalars['Int'];
};

export type CreatePdfTemplateInput = {
  orgID: Scalars['UUID1'];
  pdfTemplateType: EventType;
  templateContent: Scalars['String'];
};

export type CreatePaymentCreditCardMetadataInput = {
  encryptedData: Scalars['String'];
  keyID: Scalars['String'];
};

export type CreatePaymentCryptoMetadataInput = {
  billingDetails?: InputMaybe<CryptoBillingDetails>;
  cancelURL?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  localPrice?: InputMaybe<LocalPrice>;
  name?: InputMaybe<Scalars['String']>;
  redirectURL?: InputMaybe<Scalars['String']>;
};

export type CreatePaymentMetadataInput = {
  creditCardData?: InputMaybe<CreatePaymentCreditCardMetadataInput>;
  cryptoData?: InputMaybe<CreatePaymentCryptoMetadataInput>;
  destinationAddress?: InputMaybe<Scalars['EthAddress']>;
  discountCodeID?: InputMaybe<Scalars['UUID1']>;
};

export type CreditCardBillingDetails = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  district?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postalCode: Scalars['String'];
};

export type CreditCardBillingDetailsOutput = {
  __typename?: 'CreditCardBillingDetailsOutput';
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  district: Scalars['String'];
  name: Scalars['String'];
  postalCode: Scalars['String'];
};

export type CreditCardData = {
  billingDetails?: InputMaybe<CreditCardBillingDetails>;
  encryptedData: Scalars['String'];
  expirationMonth: Scalars['Int'];
  expirationYear: Scalars['Int'];
  keyID: Scalars['String'];
  metadata?: InputMaybe<CreditCardMetadata>;
};

export type CreditCardMetadata = {
  email: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type CreditCardMetadataOutput = {
  __typename?: 'CreditCardMetadataOutput';
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type CreditCardPaymentMethodOutput = {
  __typename?: 'CreditCardPaymentMethodOutput';
  billingDetails?: Maybe<CreditCardBillingDetailsOutput>;
  id: Scalars['UUID1'];
  last4Digit: Scalars['String'];
  metadata?: Maybe<CreditCardMetadataOutput>;
  network: Scalars['String'];
  status: Scalars['String'];
  type: PaymentType;
};

export type CryptoBillingDetails = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export enum CryptoCurrenyCode {
  Eth = 'ETH',
  Matic = 'MATIC'
}

export type CryptoPaymentDetails = {
  __typename?: 'CryptoPaymentDetails';
  hostedURL: Scalars['String'];
};

export type CryptoPaymentMethodOutput = {
  __typename?: 'CryptoPaymentMethodOutput';
  id: Scalars['UUID1'];
  status: Scalars['String'];
  type: PaymentType;
};

export type CurrentUser = {
  __typename?: 'CurrentUser';
  activeBids: Array<MarketplaceAuctionBid>;
  apiKeys?: Maybe<Array<Maybe<UserApiKeyResponse>>>;
  favoriteItems?: Maybe<Array<MarketplaceCollectionItem>>;
  id: Scalars['UUID'];
  user: User;
  userOrgs: Array<UserOrganization>;
  wallets?: Maybe<Array<Wallet>>;
  wonBids: Array<MarketplaceAuctionBid>;
};


export type CurrentUserActiveBidsArgs = {
  orgId: Scalars['UUID'];
};


export type CurrentUserUserOrgsArgs = {
  filter?: InputMaybe<UserOrgFilter>;
};


export type CurrentUserWonBidsArgs = {
  orgId: Scalars['UUID'];
};

export type CustomerAddress = {
  city: Scalars['String'];
  countryCode: Scalars['String'];
  postalCode: Scalars['String'];
  regionCode: Scalars['String'];
  street1: Scalars['String'];
  street2: Scalars['String'];
};

export type CustomerInput = {
  address?: InputMaybe<CustomerAddress>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  isEmailVerified: Scalars['Boolean'];
  isPhoneVerified: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export enum DeliveryMethod {
  Erc721Provenance = 'ERC721Provenance',
  Erc721Transfer = 'ERC721Transfer',
  Erc721TransferByRange = 'ERC721TransferByRange',
  Erc1155OpenEdition = 'ERC1155OpenEdition',
  Erc1155Transfer = 'ERC1155Transfer',
  NoOp = 'NoOp'
}

export type DeployContractInput = {
  contractType: ContractType;
  nftName: Scalars['String'];
  nftSymbol: Scalars['String'];
  organizationId: Scalars['UUID1'];
  walletId: Scalars['UUID1'];
};

export type DiscountCode = {
  __typename?: 'DiscountCode';
  description?: Maybe<Scalars['String']>;
  discountCode: Scalars['String'];
  discountType: Scalars['String'];
  id: Scalars['UUID1'];
  organizationID: Scalars['UUID1'];
  value: Scalars['Float'];
};

export type DiscountedInvoiceItem = {
  __typename?: 'DiscountedInvoiceItem';
  discountCode: DiscountCode;
  discountedAmount: Scalars['Float'];
  invoiceItemID: Scalars['UUID1'];
  totalPrice: Scalars['Float'];
  totalPriceAfterDiscount: Scalars['Float'];
};

export type Erc721Metadata = {
  __typename?: 'ERC721Metadata';
  animationURL?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<MetadataAttributes>>;
  backgroundColor?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  externalURL?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  timestamp?: Maybe<Scalars['Int']>;
};

export type Erc1155Metadata = {
  __typename?: 'ERC1155Metadata';
  tokenId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  active: Scalars['Boolean'];
  eventType: EventType;
  id: Scalars['UUID1'];
  organization: Organization;
  organizationID: Scalars['UUID1'];
  subject: Scalars['String'];
  templateContent: Scalars['String'];
};

export enum EventType {
  BidCanceled = 'BidCanceled',
  BidOutBid = 'BidOutBid',
  BidWon = 'BidWon',
  BuyerInvoice = 'BuyerInvoice',
  EnquiryToListForSale = 'EnquiryToListForSale',
  EnquiryToListSubmittedSeller = 'EnquiryToListSubmittedSeller',
  ItemNewOffer = 'ItemNewOffer',
  ItemOfferAccepted = 'ItemOfferAccepted',
  ItemOfferRejected = 'ItemOfferRejected',
  ItemPurchased = 'ItemPurchased',
  KycApproval = 'KYCApproval',
  KycRejected = 'KYCRejected',
  LeadingBid = 'LeadingBid',
  NftListedForSaleAdmin = 'NFTListedForSaleAdmin',
  OrderCompletion = 'OrderCompletion',
  ResetPassowrd = 'ResetPassowrd',
  SavedItemListedForSale = 'SavedItemListedForSale',
  SellerReceipt = 'SellerReceipt',
  TokenClaimed = 'TokenClaimed',
  TokenTransferComplete = 'TokenTransferComplete',
  UserInvitation = 'UserInvitation',
  UserSignUp = 'UserSignUp',
  VerifyAccount = 'VerifyAccount',
  WalletRejection = 'WalletRejection',
  WirePaymentDetails = 'WirePaymentDetails'
}

export enum ExtensionType {
  ProvenanceExtension = 'ProvenanceExtension',
  RedeemableExtension = 'RedeemableExtension'
}

export type FavoriteNftResponse = {
  __typename?: 'FavoriteNFTResponse';
  data: Array<Maybe<WalletToken>>;
  totalCount: Scalars['Int'];
  user?: Maybe<UserResponse>;
};

export enum FiatCurrencyCode {
  Usd = 'USD'
}

export enum FilteringType {
  AllowList = 'AllowList'
}

export type GetUsdPriceResponse = {
  __typename?: 'GetUSDPriceResponse';
  amount: Scalars['String'];
  base: Scalars['String'];
  currency: Scalars['String'];
};

export type IdNumber = {
  __typename?: 'IDNumber';
  stateCode: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type IdNumberInput = {
  stateCode: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export enum IdentifierType {
  ExternalUserId = 'ExternalUserID',
  UserId = 'UserID',
  WalletAddress = 'WalletAddress'
}

export type InvoiceDetails = {
  __typename?: 'InvoiceDetails';
  OrganizationID: Scalars['UUID1'];
  billingAddress?: Maybe<InvoiceDetailsBillingAddress>;
  externalPaymentID: Scalars['String'];
  externalUserID: Scalars['String'];
  internalUserID: Scalars['String'];
  invoiceCreatedAt: Scalars['Time'];
  invoiceID: Scalars['UUID1'];
  invoiceNumber: Scalars['Int'];
  invoiceURL?: Maybe<Scalars['String']>;
  items: Array<Maybe<ItemInvoiceDetail>>;
  paymentID: Scalars['UUID1'];
  status: InvoiceStatus;
  userName: Scalars['String'];
};

export type InvoiceDetailsBillingAddress = {
  __typename?: 'InvoiceDetailsBillingAddress';
  city: Scalars['String'];
  country: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
  street1: Scalars['String'];
};

export enum InvoiceStatus {
  AwaitingUserPayment = 'AwaitingUserPayment',
  Canceled = 'Canceled',
  Delivered = 'Delivered',
  Draft = 'Draft',
  Expired = 'Expired',
  Failed = 'Failed',
  Paid = 'Paid',
  Pending = 'Pending'
}

export type ItemInvoiceDetail = {
  __typename?: 'ItemInvoiceDetail';
  buyersPremium: Scalars['Float'];
  collectionItemID: Scalars['UUID1'];
  collectionItemTitle: Scalars['String'];
  collectionTitle: Scalars['String'];
  destinationAddress: Scalars['String'];
  invoiceItemID: Scalars['UUID1'];
  overheadPremium: Scalars['Float'];
  saleDate: Scalars['Time'];
  salesTaxRate: Scalars['Float'];
  taxes: Scalars['Float'];
  totalPrice: Scalars['Float'];
  unitPrice: Scalars['Float'];
  units: Scalars['Int'];
};

export enum KycStatus {
  Clear = 'Clear',
  Failed1 = 'Failed1',
  Failed2 = 'Failed2',
  Level1 = 'Level1',
  Level2 = 'Level2',
  None = 'None',
  Pending = 'Pending'
}

export enum ListingStatus {
  Active = 'Active',
  InActive = 'InActive'
}

export type LocalPrice = {
  amount: Scalars['Float'];
  currency: Scalars['String'];
};

export enum MarketCollectionStatus {
  Active = 'Active',
  Archived = 'Archived',
  Inactive = 'Inactive'
}

export type Marketplace = {
  __typename?: 'Marketplace';
  collections?: Maybe<Array<MarketplaceCollection>>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  organizationID: Scalars['String'];
  theme?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<MarketplaceToken>>;
  wirePaymentExpiration: Scalars['Int'];
};

export type MarketplaceAuctionBid = {
  __typename?: 'MarketplaceAuctionBid';
  amount: Scalars['Float'];
  buyersPremium: Scalars['Float'];
  createdAt: Scalars['Time'];
  currentBid: Scalars['Float'];
  deletedAt?: Maybe<Scalars['Time']>;
  finalPrice: Scalars['Float'];
  id: Scalars['UUID'];
  isCurrent: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
  marketplaceAuctionLot: MarketplaceAuctionLot;
  marketplaceAuctionLotId: Scalars['UUID1'];
  marketplaceUser?: Maybe<MarketplaceUser>;
  maximumBid?: Maybe<Scalars['Float']>;
  nextBidIncrement: Scalars['Float'];
  overheadPremium: Scalars['Float'];
  userId: Scalars['UUID'];
  userOrganization: UserOrganization;
};

export type MarketplaceAuctionBidInput = {
  amount: Scalars['Float'];
  marketplaceAuctionLotId: Scalars['UUID'];
};

export type MarketplaceAuctionDefaultConfig = {
  __typename?: 'MarketplaceAuctionDefaultConfig';
  collectionId: Scalars['UUID'];
  endDate: Scalars['Time'];
  id: Scalars['UUID'];
  minIncrement: Scalars['Float'];
  reservePrice?: Maybe<Scalars['Float']>;
  startDate: Scalars['Time'];
};

export type MarketplaceAuctionFeeStructure = {
  __typename?: 'MarketplaceAuctionFeeStructure';
  buyersPremiumRate: Array<MarketplaceAuctionFeeStructureItem>;
  overheadPremiumRate: Array<MarketplaceAuctionFeeStructureItem>;
};

export type MarketplaceAuctionFeeStructureItem = {
  __typename?: 'MarketplaceAuctionFeeStructureItem';
  from: Scalars['Float'];
  rate: Scalars['Float'];
  to?: Maybe<Scalars['Float']>;
};

export type MarketplaceAuctionLot = {
  __typename?: 'MarketplaceAuctionLot';
  bids: Array<MarketplaceAuctionBid>;
  currentBid?: Maybe<MarketplaceAuctionBid>;
  defaultConfig: MarketplaceAuctionDefaultConfig;
  endDate: Scalars['Time'];
  feeStructure: MarketplaceAuctionFeeStructure;
  id: Scalars['UUID'];
  lotNumber?: Maybe<Scalars['Int']>;
  marketplaceCollectionItem?: Maybe<MarketplaceCollectionItem>;
  marketplaceCollectionItemId: Scalars['UUID1'];
  myBid?: Maybe<MarketplaceAuctionBid>;
  previewDate?: Maybe<Scalars['Time']>;
  reserveMet: Scalars['Boolean'];
  reservePrice?: Maybe<Scalars['Float']>;
  startDate: Scalars['Time'];
  startingBid?: Maybe<Scalars['Float']>;
  status: AuctionLotStatus;
};


export type MarketplaceAuctionLotBidsArgs = {
  filter?: InputMaybe<BidFilterInput>;
};


export type MarketplaceAuctionLotDefaultConfigArgs = {
  collectionId: Scalars['UUID'];
};

export type MarketplaceAuctionLotInput = {
  collectionId: Scalars['UUID'];
  collectionItemName: Scalars['String'];
  delivery?: InputMaybe<MarketplaceItemDeliveryInput>;
  endDate: Scalars['Time'];
  lotNumber?: InputMaybe<Scalars['Int']>;
  marketplaceTokenId?: InputMaybe<Scalars['UUID']>;
  reservePrice?: InputMaybe<Scalars['Float']>;
  saleType: MarketplaceSaleType;
  startDate: Scalars['Time'];
  startingBid?: InputMaybe<Scalars['Float']>;
};

export type MarketplaceAuctionLotUpdateInput = {
  delivery?: InputMaybe<MarketplaceItemDeliveryInput>;
  endDate?: InputMaybe<Scalars['Time']>;
  lotNumber?: InputMaybe<Scalars['Int']>;
  maxEndDate?: InputMaybe<Scalars['Time']>;
  reservePrice?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startingBid?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<AuctionLotStatus>;
};

export type MarketplaceBuyNowOutput = {
  __typename?: 'MarketplaceBuyNowOutput';
  endDate: Scalars['Time'];
  id: Scalars['UUID'];
  invoice?: Maybe<InvoiceDetails>;
  marketplaceCollectionItem?: Maybe<MarketplaceCollectionItem>;
  purchaseTimeoutInMinutes?: Maybe<Scalars['Int']>;
  remainingCount: Scalars['Int'];
  sortNumber: Scalars['Int'];
  startDate: Scalars['Time'];
  totalAvailableUnits: Scalars['Int'];
  totalUnits: Scalars['Int'];
  unitPrice: Scalars['Float'];
};

export type MarketplaceBuyNowUpdateInput = {
  delivery?: InputMaybe<MarketplaceItemDeliveryInput>;
  endDate?: InputMaybe<Scalars['Time']>;
  sortNumber?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['Time']>;
  totalUnits?: InputMaybe<Scalars['Int']>;
  unitPrice?: InputMaybe<Scalars['Float']>;
};

export type MarketplaceClaimableCodeOutput = {
  __typename?: 'MarketplaceClaimableCodeOutput';
  claimableSetID: Scalars['UUID1'];
  code: Scalars['String'];
  id: Scalars['UUID1'];
  isASingleUseCode: Scalars['Boolean'];
  redeemed: Scalars['Boolean'];
  redemptions: Array<MarketplaceClaimableCodeRedemptionOutput>;
};

export type MarketplaceClaimableCodeRedemptionOutput = {
  __typename?: 'MarketplaceClaimableCodeRedemptionOutput';
  code: Scalars['String'];
  dateClaimed?: Maybe<Scalars['Time']>;
  walletAddress?: Maybe<Scalars['String']>;
};

export type MarketplaceClaimableOutput = {
  __typename?: 'MarketplaceClaimableOutput';
  claimingType?: Maybe<Scalars['String']>;
  endDate: Scalars['Time'];
  id: Scalars['UUID'];
  marketplaceCollectionItem?: Maybe<MarketplaceCollectionItem>;
  perWalletLimit: Scalars['Int'];
  startDate: Scalars['Time'];
  totalAvailableUnits: Scalars['Int'];
  totalUnits: Scalars['Int'];
};

export type MarketplaceCollection = {
  __typename?: 'MarketplaceCollection';
  collectionType: CollectionType;
  configuration?: Maybe<MarketplaceCollectionConfiguration>;
  description: Scalars['String'];
  endDate?: Maybe<Scalars['Time']>;
  id: Scalars['UUID1'];
  items?: Maybe<Array<MarketplaceCollectionItem>>;
  itemsCount: Scalars['Int'];
  marketplaceID: Scalars['UUID1'];
  name: Scalars['String'];
  slug: Scalars['String'];
  startDate?: Maybe<Scalars['Time']>;
  status: MarketCollectionStatus;
};


export type MarketplaceCollectionItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  statuses?: InputMaybe<Array<InputMaybe<MarketplaceCollectionItemStatus>>>;
};


export type MarketplaceCollectionItemsCountArgs = {
  statuses?: InputMaybe<Array<InputMaybe<MarketplaceCollectionItemStatus>>>;
};

export type MarketplaceCollectionConfiguration = {
  __typename?: 'MarketplaceCollectionConfiguration';
  purchaseLimit?: Maybe<Scalars['Int']>;
  taxInvoiceSapType?: Maybe<Scalars['String']>;
  taxInvoiceSku?: Maybe<Scalars['String']>;
};

export type MarketplaceCollectionCreateInput = {
  description: Scalars['String'];
  endDate?: InputMaybe<Scalars['Time']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['Time']>;
  status?: InputMaybe<MarketCollectionStatus>;
};

export type MarketplaceCollectionItem = {
  __typename?: 'MarketplaceCollectionItem';
  collectionId: Scalars['UUID'];
  delivery?: Maybe<MarketplaceCollectionItemDelivery>;
  details: MarketplaceCollectionItemDetails;
  id: Scalars['UUID'];
  /** @deprecated Use `details` property instead */
  lot: MarketplaceAuctionLot;
  marketplaceTokenId?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  saleType: MarketplaceSaleType;
  slug: Scalars['String'];
  status: MarketplaceCollectionItemStatus;
};

export type MarketplaceCollectionItemDelivery = MarketplaceItemDeliveryErc721Provenance | MarketplaceItemDeliveryErc721Transfer | MarketplaceItemDeliveryErc721TransferByRange | MarketplaceItemDeliveryErc1155OpenEdition | MarketplaceItemDeliveryErc1155Transfer | MarketplaceItemDeliveryNoOp;

export type MarketplaceCollectionItemDetails = MarketplaceAuctionLot | MarketplaceBuyNowOutput | MarketplaceClaimableOutput;

export enum MarketplaceCollectionItemStatus {
  Active = 'Active',
  Completed = 'Completed',
  Hidden = 'Hidden',
  Preview = 'Preview'
}

export type MarketplaceCollectionUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Time']>;
  status?: InputMaybe<MarketCollectionStatus>;
};

export type MarketplaceItemCodeConfigInput = {
  codeValue?: InputMaybe<Scalars['String']>;
  isSingleCode: Scalars['Boolean'];
  numberOfCodes?: InputMaybe<Scalars['Int']>;
  prefix?: InputMaybe<Scalars['String']>;
};

export type MarketplaceItemDeliveryErc721Provenance = {
  __typename?: 'MarketplaceItemDeliveryERC721Provenance';
  extensionAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
};

export type MarketplaceItemDeliveryErc721ProvenanceInput = {
  extensionAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
};

export type MarketplaceItemDeliveryErc721Transfer = {
  __typename?: 'MarketplaceItemDeliveryERC721Transfer';
  contractAddress: Scalars['String'];
  onChainTokenId: Scalars['Int'];
  ownerWalletId: Scalars['UUID1'];
};

export type MarketplaceItemDeliveryErc721TransferByRange = {
  __typename?: 'MarketplaceItemDeliveryERC721TransferByRange';
  contractAddress: Scalars['String'];
  fromOnChainTokenId: Scalars['Int'];
  ownerWalletId: Scalars['UUID1'];
  toOnChainTokenId: Scalars['Int'];
};

export type MarketplaceItemDeliveryErc721TransferByRangeInput = {
  contractAddress: Scalars['String'];
  fromOnChainTokenId: Scalars['Int'];
  ownerWalletId: Scalars['UUID1'];
  toOnChainTokenId: Scalars['Int'];
};

export type MarketplaceItemDeliveryErc721TransferInput = {
  RelayTxInfo?: InputMaybe<RelayTxInput>;
  contractAddress: Scalars['String'];
  onChainTokenId: Scalars['Int'];
  ownerWalletId: Scalars['UUID1'];
};

export type MarketplaceItemDeliveryErc1155OpenEdition = {
  __typename?: 'MarketplaceItemDeliveryERC1155OpenEdition';
  contractId: Scalars['UUID1'];
  onChainTokenId: Scalars['Int'];
  ownerWalletId: Scalars['UUID1'];
};

export type MarketplaceItemDeliveryErc1155OpenEditionInput = {
  contractId: Scalars['UUID1'];
  onChainTokenId: Scalars['Int'];
  ownerWalletId: Scalars['UUID1'];
};

export type MarketplaceItemDeliveryErc1155Transfer = {
  __typename?: 'MarketplaceItemDeliveryERC1155Transfer';
  contractAddress: Scalars['String'];
  onChainTokenId: Scalars['Int'];
  ownerWalletId: Scalars['UUID1'];
};

export type MarketplaceItemDeliveryErc1155TransferInput = {
  amount: Scalars['Int'];
  contractAddress: Scalars['String'];
  onChainTokenId: Scalars['Int'];
  ownerWalletId: Scalars['UUID1'];
};

export type MarketplaceItemDeliveryInput = {
  ERC721Provenance?: InputMaybe<MarketplaceItemDeliveryErc721ProvenanceInput>;
  ERC721Transfer?: InputMaybe<MarketplaceItemDeliveryErc721TransferInput>;
  ERC721TransferByRange?: InputMaybe<MarketplaceItemDeliveryErc721TransferByRangeInput>;
  ERC1155OpenEdition?: InputMaybe<MarketplaceItemDeliveryErc1155OpenEditionInput>;
  ERC1155Transfer?: InputMaybe<MarketplaceItemDeliveryErc1155TransferInput>;
  NoOp?: InputMaybe<MarketplaceItemDeliveryNoOpInput>;
  deliveryMethod: DeliveryMethod;
};

export type MarketplaceItemDeliveryNoOp = {
  __typename?: 'MarketplaceItemDeliveryNoOp';
  notes?: Maybe<Scalars['String']>;
};

export type MarketplaceItemDeliveryNoOpInput = {
  notes?: InputMaybe<Scalars['String']>;
};

export enum MarketplaceSaleType {
  Auction = 'Auction',
  BuyNow = 'BuyNow',
  Claimable = 'Claimable'
}

export type MarketplaceToken = {
  __typename?: 'MarketplaceToken';
  id: Scalars['UUID'];
  isTransferDisabled: Scalars['Boolean'];
  marketplaceID: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  nftContractAddress: Scalars['String'];
  nftToken: NftToken;
  nftTokenID?: Maybe<Scalars['UUID']>;
  onChainTokenID: Scalars['Int'];
};

export type MarketplaceUser = {
  __typename?: 'MarketplaceUser';
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  username?: Maybe<Scalars['String']>;
};

export type MetadataAttributes = {
  __typename?: 'MetadataAttributes';
  displayType?: Maybe<Scalars['String']>;
  maxValue?: Maybe<Scalars['Int']>;
  traitType: Scalars['String'];
  value: AttributeValue;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  acceptOffer approves the offer and transfers the nft ownership  */
  acceptOffer: Scalars['Boolean'];
  addAllowListToBuyNowLot: Scalars['Boolean'];
  addAllowListToClaimableSet: Scalars['Boolean'];
  /**
   * Add an existing lot to User favorite lots list.
   *     If lot is already exists, then do nothing.
   *     If provided lot is invalid or not exists, then error message will be returned.
   */
  addCollectionItemToUserFavorites: Scalars['Boolean'];
  addExistingTokenToCollection: Scalars['String'];
  /** addMultisigOwner mutation adds new owner for the existing multisig wallet */
  addMultisigOwner: Wallet;
  /** addNFTToFavorite adds the given nft to the favorite list of user */
  addNFTToFavourite: Scalars['Boolean'];
  addOrganization: Organization;
  /**  addSupportedCountry add the supported countries and stores into db  */
  addSupportedCountry: SupportedCountry;
  /** addSupportedCurrency mutation to add the supported currency */
  addSupportedCurrency: SupportedCurrency;
  /** Creates registry tokens for the given orgid, networkid, marketplaceID, contract address, artistid, categoryid and list of token id's in registry, nft_contracts, registry_tokens. nft_tokens, marketplace_tokens, marketplace_collection_items, marketplace_collection_items_marketplace_tokens tables */
  addToRegistry: Scalars['Boolean'];
  /** Creates new registry token with input data */
  addToken: Scalars['Boolean'];
  addTokensToCollection: Scalars['String'];
  /** Screens wallet address takes input arguments address, asset, network provides risk rating */
  addressScreening: RiskRating;
  burnToken: Scalars['String'];
  cancelMarketplaceAuctionBid: Scalars['Boolean'];
  /**  cancelOffer cancels an offer by the buyer  */
  cancelOffer: Scalars['String'];
  /** Cancels payment by ID, can be called by org admin */
  cancelPayment: Scalars['Boolean'];
  cancelTokenTransfer: Scalars['Boolean'];
  /** Change password for user */
  changePassword: Scalars['String'];
  /** Check Token Owner mutation takes the input arguments contractId, address, rangeStart, rangeEnd and then it check based on given contract ID and address matched within given range (start, end), If matched it returns the list of token Ids. */
  checkTokenOwners: Array<Maybe<Scalars['Int']>>;
  /** checkWalletTokens mutation checks what NFTs a user owns within a specific contract and token range */
  checkWalletTokens: Array<Maybe<Scalars['Int']>>;
  /** connectExternalWallet verifies the signature provided by an external wallet and marks it as an active external wallet to the user */
  connectExternalWallet: Scalars['Boolean'];
  createAllowList?: Maybe<Scalars['UUID1']>;
  /** Creates new Applicant based on input data. */
  createApplicant: ApplicantResponse;
  /**  createArtist creates an artist and stores into db  */
  createArtist: Artist;
  /** Creates invoice for given Lot, can be called by org admin */
  createAuctionLotInvoice: InvoiceDetails;
  /**  createCategory creates a category and stores into db   */
  createCategory: Category;
  /** Creates new Check based for provided applicant ID. */
  createCheck: CheckResponse;
  /** Creates email template record for given orgID and EventType */
  createEmailTemplate: EmailTemplate;
  createEnquiry: Scalars['String'];
  createMarketplaceAuctionBid: MarketplaceAuctionBid;
  createMarketplaceAuctionLot: MarketplaceAuctionLot;
  createMarketplaceBuyNowLot: MarketplaceBuyNowOutput;
  createMarketplaceClaimableSet: MarketplaceClaimableOutput;
  createMarketplaceCollection: MarketplaceCollection;
  /**  createOffer creates an offer for an nft  */
  createOffer: SignatureResponse;
  /** createOrUpdateSupportedNetwork mutation creates or updates the supported networks */
  createOrUpdateSupportedNetwork: SupportedNetwork;
  createOrgByUser: UserOrganization;
  /** Creates a multisig with organization as parent type */
  createOrgMultisig: Wallet;
  /** Creates pdf template record for given orgID and PDFTemplateType */
  createPDFTemplate: PdfTemplate;
  /** Creates payment for given Invoice */
  createPayment: PaymentOutput;
  /** Creates new Payment method based on input data. */
  createPaymentMethod: PaymentMethodOutput;
  /** createSignatureToListNFTForSale creates order and returns a signature to get it signed by owner */
  createSignatureToListNFTForSale: SignatureResponse;
  createTokenDraft: Scalars['String'];
  /** Add User */
  createUser?: Maybe<User>;
  /** Create a new API key for given User and Organization. */
  createUserAPIKey?: Maybe<UserApiKeyResponse>;
  delayedTransferToken: TokenTransfers;
  /**  deleteArtist soft delete artist with artistId  */
  deleteArtist: Scalars['Boolean'];
  deleteAsset: Scalars['String'];
  /**  deleteCategory soft delete category  by categoryID */
  deleteCategory: Scalars['Boolean'];
  /**
   * Delete an existing lot from User favorite lots list.
   *     If lot has been already deleted, then do nothing.
   *     If provided lot is invalid or not exists, then error message will be returned.
   */
  deleteCollectionItemFromUserFavorites: Scalars['Boolean'];
  /** deleteNatsMessages is to remove nats streams messages by stream name */
  deleteNatsMessages: Scalars['Boolean'];
  deleteOrg: Scalars['Boolean'];
  deleteOrgUser: Scalars['Boolean'];
  /** Deletes existing Payment method by Payment ID. */
  deletePaymentMethod: Scalars['Boolean'];
  /**  deleteSupportedCountry soft delete supported country with country id  */
  deleteSupportedCountry: Scalars['Boolean'];
  deleteToken: Scalars['String'];
  /** Delete user */
  deleteUser: Scalars['Boolean'];
  /** Delete an existing API key. */
  deleteUserAPIKey: Scalars['Boolean'];
  deleteUserInvitation: Scalars['Boolean'];
  /** Deploy existing multisig wallet to a new network */
  deployWalletToNetwork: Wallet;
  /**  estimateTaxAndRoyaltyFee returns estimated tax and royalty fee for an nft  */
  estimateTaxAndRoyaltyFee: TaxEstimateResponse;
  importExternalTokenToCollection: Scalars['String'];
  /**  initiateBuyNFT validates the buyer's wallet balance and nft ownership and returns sale details  */
  initiateBuyNFT: NftSaleDetails;
  /** List Wallets With Token takes contract address as input along with start/end date range and network type. Returns a list of token owners. */
  listWalletsWithToken: Array<Maybe<TokenOwner>>;
  loginWithSignature: SignInResponse;
  marketplaceUpdateTheme: Marketplace;
  mintTokens: Scalars['String'];
  nftContractAddAdmin: Scalars['String'];
  nftContractExtensionMintBatch: Scalars['String'];
  nftContractExtensionPause: Scalars['String'];
  nftContractExtensionProvenanceMint: Scalars['String'];
  nftContractExtensionRedeemableRedeemToken: Scalars['String'];
  nftContractExtensionSetBaseURI: Scalars['String'];
  nftContractExtensionSetProvenanceHash: Scalars['String'];
  nftContractExtensionUnpause: Scalars['String'];
  nftContractRegisterExtension: NftContract;
  nftContractSetTokenURI: Scalars['String'];
  nftDeployContract: NftContract;
  orgCreateMarketplace: Marketplace;
  ping: Scalars['String'];
  processTokenTranfer: TokenTransfers;
  /** Redeem a claimable code */
  redeemClaimableCode: Scalars['Boolean'];
  /** Redeem a claimable */
  redeemClaimableItem: Scalars['Boolean'];
  /**  rejectOffer rejects an offer by the token owner  */
  rejectOffer: Scalars['String'];
  /** Release reservations held by invoice ID */
  releaseReservation: Scalars['Boolean'];
  removeAllowListFromBuyNowLot: Scalars['Boolean'];
  removeAllowListFromClaimableSet: Scalars['Boolean'];
  /**  removeListing removes an nft listed for sale  */
  removeListing: Scalars['String'];
  /** removeNFTFromFavourite removes the given nft from the favorite list of the user */
  removeNFTFromFavourite: Scalars['Boolean'];
  /** Delete and existing record from 'registry' */
  removeRegistry: Scalars['Boolean'];
  /** removeSupportedNetwork mutation to remove the supported network by id */
  removeSupportedNetwork: Scalars['Boolean'];
  /** Updates the listing status value to InActive from 'registry_tokens' */
  removeToken: Scalars['Boolean'];
  /** renameWallet updates the external wallet's name  */
  renameWallet: Scalars['String'];
  reserveMarketplaceBuyNowLot: MarketplaceBuyNowOutput;
  sendUserInvitation: Scalars['Boolean'];
  setContractRoyalties: Scalars['String'];
  setJwtIssuerDomain: Organization;
  startInvoiceDelivery: Scalars['Boolean'];
  /**  submitProofOfApproval updates the signature to list an NFT for sale  */
  submitProofOfApproval: Scalars['String'];
  /**  submitProofOfOffer updates offer object with buyer signature  */
  submitProofOfOffer: Scalars['String'];
  /** Transfers a token in the provided wallet to the `transferTo` address */
  transferToken: Scalars['String'];
  updateAfterPaymentTransferSuspendTime: Scalars['Boolean'];
  updateAllowList: Scalars['Boolean'];
  updateAllowListValues: AllowList;
  /** Updates existing  Applicant based on input data. */
  updateApplicant: ApplicantResponse;
  /**  updateArtistById updates artist for given artist id  */
  updateArtistById: Artist;
  updateBuyNowInvoiceExpiryMins: Scalars['Boolean'];
  /**  updateCatgegoryById updates category for given category id  */
  updateCategoryById: Category;
  /** Updates email_template for given id */
  updateEmailTemplate: Scalars['Boolean'];
  updateMarketplaceAuctionLot: MarketplaceAuctionLot;
  updateMarketplaceBuyNowLot: MarketplaceBuyNowOutput;
  updateMarketplaceClaimableSet: MarketplaceClaimableOutput;
  updateMarketplaceCollection: MarketplaceCollection;
  /** Update name of multisig wallet */
  updateMultisigName: Scalars['Boolean'];
  /** Update existing Payment method based on input data. */
  updatePaymentMethod: Scalars['Boolean'];
  updateTokenDraft: Scalars['String'];
  /**  updateTransactionHash fetches the transaction info and updates it to the db  */
  updateTransactionHash?: Maybe<BuyNowTransactionResponse>;
  updateUserOrgRole: UserOrganization;
  updateUserOrgSettings: UserOrganization;
  updateWirePaymentExpiration: Scalars['Boolean'];
  uploadArweaveAsset: Scalars['String'];
  uploadArweaveMetadata: Scalars['String'];
  uploadAsset: Scalars['String'];
  uploadAssets: Scalars['Int'];
  /** Verify Signature mutation takes the input arguments signature, message, address and then we need to check if signature+message indeed was signed by the address. */
  verifySignature: Scalars['Boolean'];
};


export type MutationAcceptOfferArgs = {
  orderId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
  transactionHash: Scalars['String'];
};


export type MutationAddAllowListToBuyNowLotArgs = {
  allowListID: Scalars['UUID1'];
  buyNowLotID: Scalars['UUID1'];
};


export type MutationAddAllowListToClaimableSetArgs = {
  allowListID: Scalars['UUID1'];
  claimableSetID: Scalars['UUID1'];
};


export type MutationAddCollectionItemToUserFavoritesArgs = {
  collectionItemId: Scalars['UUID1'];
};


export type MutationAddExistingTokenToCollectionArgs = {
  marketplaceId: Scalars['UUID1'];
  tokenId: Scalars['UUID1'];
};


export type MutationAddMultisigOwnerArgs = {
  newAddress: Scalars['String'];
  walletID: Scalars['UUID1'];
};


export type MutationAddNftToFavouriteArgs = {
  orgID: Scalars['UUID1'];
  tokenId: Scalars['UUID1'];
};


export type MutationAddOrganizationArgs = {
  handle: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAddSupportedCountryArgs = {
  input: SupportedCountryInput;
  orgId: Scalars['UUID1'];
};


export type MutationAddSupportedCurrencyArgs = {
  input: SupportedCurrencyInput;
};


export type MutationAddToRegistryArgs = {
  artistID: Scalars['UUID1'];
  categoryID: Scalars['UUID1'];
  contractAddress: Scalars['String'];
  isAllTokensApproved: Scalars['Boolean'];
  marketplaceID: Scalars['UUID1'];
  networkID: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
  tokenIDs?: InputMaybe<Array<Scalars['BigInt']>>;
};


export type MutationAddTokenArgs = {
  input: TokenRequest;
  orgID: Scalars['UUID1'];
};


export type MutationAddTokensToCollectionArgs = {
  marketplaceId: Scalars['UUID1'];
  tokenIds: Array<Scalars['UUID1']>;
};


export type MutationAddressScreeningArgs = {
  input: AddressScreeningInput;
  orgID: Scalars['UUID1'];
};


export type MutationBurnTokenArgs = {
  contractId: Scalars['UUID1'];
  tokenId: Scalars['Int'];
  walletId: Scalars['UUID1'];
};


export type MutationCancelMarketplaceAuctionBidArgs = {
  bidID: Scalars['UUID1'];
  marketplaceID: Scalars['UUID1'];
};


export type MutationCancelOfferArgs = {
  orderId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type MutationCancelPaymentArgs = {
  orgID: Scalars['UUID1'];
  paymentID: Scalars['UUID1'];
};


export type MutationCancelTokenTransferArgs = {
  orgID: Scalars['UUID1'];
  tokenTransferID: Scalars['UUID1'];
};


export type MutationChangePasswordArgs = {
  orgID: Scalars['UUID1'];
  userID: Scalars['UUID1'];
};


export type MutationCheckTokenOwnersArgs = {
  contractId: Scalars['UUID1'];
  rangeEnd: Scalars['Int'];
  rangeStart: Scalars['Int'];
  walletAddress: Scalars['String'];
};


export type MutationCheckWalletTokensArgs = {
  chainId: Scalars['Int'];
  contractAddress: Scalars['String'];
  rangeEnd: Scalars['Int'];
  rangeStart: Scalars['Int'];
};


export type MutationConnectExternalWalletArgs = {
  address: Scalars['String'];
  message: Scalars['String'];
  networkID: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
  signature: Scalars['String'];
};


export type MutationCreateAllowListArgs = {
  allowListInput: AllowListInput;
  orgID: Scalars['UUID1'];
};


export type MutationCreateApplicantArgs = {
  input: ApplicantRequest;
  orgID: Scalars['UUID1'];
};


export type MutationCreateArtistArgs = {
  input: ArtistInput;
};


export type MutationCreateAuctionLotInvoiceArgs = {
  lotID: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
};


export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};


export type MutationCreateCheckArgs = {
  applicantID: Scalars['String'];
};


export type MutationCreateEmailTemplateArgs = {
  input: CreateEmailTemplateInput;
};


export type MutationCreateEnquiryArgs = {
  contractAddress: Scalars['String'];
  networkId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
  quantity: Scalars['Int'];
  tokenId: Scalars['BigInt'];
  tokenType: TokenType;
};


export type MutationCreateMarketplaceAuctionBidArgs = {
  marketplaceAuctionBid: MarketplaceAuctionBidInput;
};


export type MutationCreateMarketplaceAuctionLotArgs = {
  marketplaceAuctionLot: MarketplaceAuctionLotInput;
};


export type MutationCreateMarketplaceBuyNowLotArgs = {
  input: CreateMarketplaceBuyNowLotInput;
};


export type MutationCreateMarketplaceClaimableSetArgs = {
  input: CreateMarketplaceClaimableSetInput;
};


export type MutationCreateMarketplaceCollectionArgs = {
  data: MarketplaceCollectionCreateInput;
  marketplaceID: Scalars['String'];
};


export type MutationCreateOfferArgs = {
  buyerAddress: Scalars['String'];
  country?: InputMaybe<Scalars['String']>;
  currencyId?: InputMaybe<Scalars['UUID1']>;
  expiryDate: Scalars['Time'];
  nftTokenId: Scalars['UUID1'];
  offerPrice: Scalars['Float'];
  orgId: Scalars['UUID1'];
  paymentToken: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
};


export type MutationCreateOrUpdateSupportedNetworkArgs = {
  defaultPaymentCurrencyID?: InputMaybe<Scalars['UUID1']>;
  isBuyNowEnabled: Scalars['Boolean'];
  isMakeOfferEnabled: Scalars['Boolean'];
  networkId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
  secondaryMarketplaceContractAddress: Scalars['String'];
};


export type MutationCreateOrgByUserArgs = {
  handle: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateOrgMultisigArgs = {
  chainId: Scalars['Int'];
  name: Scalars['String'];
  orgId: Scalars['UUID1'];
};


export type MutationCreatePdfTemplateArgs = {
  input: CreatePdfTemplateInput;
};


export type MutationCreatePaymentArgs = {
  invoiceID: Scalars['UUID1'];
  metadata?: InputMaybe<CreatePaymentMetadataInput>;
  paymentMethodID: Scalars['UUID1'];
};


export type MutationCreatePaymentMethodArgs = {
  input: PaymentMethodCreateInput;
  orgID: Scalars['UUID1'];
};


export type MutationCreateSignatureToListNftForSaleArgs = {
  currencyId: Scalars['UUID1'];
  fixedPrice: Scalars['Float'];
  nftOwnerAddress: Scalars['String'];
  nftTokenId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
  paymentToken: Scalars['String'];
  quantity: Scalars['Int'];
  tokenType: TokenType;
};


export type MutationCreateTokenDraftArgs = {
  contractId: Scalars['UUID1'];
  tokens: Array<TokenDraft>;
};


export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  orgID: Scalars['UUID1'];
  role: Scalars['String'];
  walletAddress?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUserApiKeyArgs = {
  orgId: Scalars['UUID1'];
};


export type MutationDelayedTransferTokenArgs = {
  amount: Scalars['Int'];
  contractAddress: Scalars['String'];
  tokenOnChainId: Scalars['Int'];
  tokenType: TokenType;
  transferTo: Scalars['String'];
  walletId: Scalars['UUID1'];
};


export type MutationDeleteArtistArgs = {
  artistId: Scalars['UUID1'];
  marketplaceId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type MutationDeleteAssetArgs = {
  assetId: Scalars['UUID1'];
};


export type MutationDeleteCategoryArgs = {
  categoryID: Scalars['UUID1'];
  marketplaceId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type MutationDeleteCollectionItemFromUserFavoritesArgs = {
  collectionItemId: Scalars['UUID1'];
};


export type MutationDeleteNatsMessagesArgs = {
  orgId: Scalars['UUID1'];
  streamName: NatsStreamNames;
};


export type MutationDeleteOrgArgs = {
  orgID: Scalars['UUID1'];
};


export type MutationDeleteOrgUserArgs = {
  organizationID: Scalars['UUID1'];
  userID: Scalars['UUID1'];
};


export type MutationDeletePaymentMethodArgs = {
  orgID: Scalars['UUID1'];
  paymentMethodID: Scalars['UUID1'];
};


export type MutationDeleteSupportedCountryArgs = {
  countryId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type MutationDeleteTokenArgs = {
  tokenId: Scalars['UUID1'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['UUID1'];
};


export type MutationDeleteUserApiKeyArgs = {
  keyId: Scalars['UUID1'];
};


export type MutationDeleteUserInvitationArgs = {
  email: Scalars['String'];
  orgId: Scalars['UUID1'];
};


export type MutationDeployWalletToNetworkArgs = {
  networkId: Scalars['UUID1'];
  walletId: Scalars['UUID1'];
};


export type MutationEstimateTaxAndRoyaltyFeeArgs = {
  country?: InputMaybe<Scalars['String']>;
  estimateType: TaxEstimateType;
  nftTokenId?: InputMaybe<Scalars['UUID1']>;
  orderId?: InputMaybe<Scalars['UUID1']>;
  orgId: Scalars['UUID1'];
  postalCode?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};


export type MutationImportExternalTokenToCollectionArgs = {
  contractAddress: Scalars['String'];
  marketplaceId: Scalars['UUID1'];
  onChainId: Scalars['Int'];
};


export type MutationInitiateBuyNftArgs = {
  buyerAddress: Scalars['String'];
  country?: InputMaybe<Scalars['String']>;
  currencyId?: InputMaybe<Scalars['UUID1']>;
  nftTokenId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
  postalCode?: InputMaybe<Scalars['String']>;
};


export type MutationListWalletsWithTokenArgs = {
  contractAddress: Scalars['String'];
  endDate: Scalars['Time'];
  networkId: Scalars['UUID1'];
  startDate: Scalars['Time'];
};


export type MutationLoginWithSignatureArgs = {
  orgID: Scalars['UUID1'];
  request: SignInRequest;
};


export type MutationMarketplaceUpdateThemeArgs = {
  id: Scalars['String'];
  theme: Scalars['String'];
};


export type MutationMintTokensArgs = {
  tokenIds: Array<Scalars['UUID1']>;
};


export type MutationNftContractAddAdminArgs = {
  address: Scalars['String'];
  nftContractId: Scalars['UUID1'];
};


export type MutationNftContractExtensionMintBatchArgs = {
  amountToMint: Scalars['Int'];
  extensionAddress: Scalars['String'];
  mintToAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
};


export type MutationNftContractExtensionPauseArgs = {
  extensionAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
};


export type MutationNftContractExtensionProvenanceMintArgs = {
  contractId: Scalars['UUID1'];
  extensionAddress: Scalars['String'];
  mintToAddress: Scalars['String'];
  numberOfTokens: Scalars['Int'];
  voucherId: Scalars['UUID1'];
};


export type MutationNftContractExtensionRedeemableRedeemTokenArgs = {
  extensionAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
  tokenId: Scalars['Int'];
};


export type MutationNftContractExtensionSetBaseUriArgs = {
  baseURI: Scalars['String'];
  extensionAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
};


export type MutationNftContractExtensionSetProvenanceHashArgs = {
  extensionAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
  provenanceHash: Scalars['String'];
};


export type MutationNftContractExtensionUnpauseArgs = {
  extensionAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
};


export type MutationNftContractRegisterExtensionArgs = {
  contractId: Scalars['UUID1'];
  extensionType: ExtensionType;
  maxTokenSupply: Scalars['Int'];
};


export type MutationNftContractSetTokenUriArgs = {
  nftContractId: Scalars['UUID1'];
  tokenId: Scalars['Int'];
  uri: Scalars['String'];
};


export type MutationNftDeployContractArgs = {
  input: DeployContractInput;
};


export type MutationOrgCreateMarketplaceArgs = {
  name: Scalars['String'];
  orgId?: InputMaybe<Scalars['UUID1']>;
};


export type MutationProcessTokenTranferArgs = {
  orgID: Scalars['UUID1'];
  tokenTransferID: Scalars['UUID1'];
};


export type MutationRedeemClaimableCodeArgs = {
  code: Scalars['String'];
  destAddr?: InputMaybe<Scalars['String']>;
};


export type MutationRedeemClaimableItemArgs = {
  claimableItemId: Scalars['UUID1'];
  destAddr?: InputMaybe<Scalars['String']>;
};


export type MutationRejectOfferArgs = {
  orderId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type MutationReleaseReservationArgs = {
  invoiceID: Scalars['UUID1'];
  orgID?: InputMaybe<Scalars['UUID1']>;
};


export type MutationRemoveAllowListFromBuyNowLotArgs = {
  buyNowLotID: Scalars['UUID1'];
};


export type MutationRemoveAllowListFromClaimableSetArgs = {
  claimableSetID: Scalars['UUID1'];
};


export type MutationRemoveListingArgs = {
  nftTokenId: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
};


export type MutationRemoveNftFromFavouriteArgs = {
  orgID: Scalars['UUID1'];
  tokenId: Scalars['UUID1'];
};


export type MutationRemoveRegistryArgs = {
  orgID: Scalars['UUID1'];
  registryID: Scalars['UUID1'];
};


export type MutationRemoveSupportedNetworkArgs = {
  id: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type MutationRemoveTokenArgs = {
  orgID: Scalars['UUID1'];
  registryTokenIDs?: InputMaybe<Array<Scalars['UUID1']>>;
};


export type MutationRenameWalletArgs = {
  name: Scalars['String'];
  walletID: Scalars['UUID1'];
};


export type MutationReserveMarketplaceBuyNowLotArgs = {
  input: ReserveMarketplaceBuyNowLotInput;
};


export type MutationSendUserInvitationArgs = {
  email: Scalars['String'];
  orgId: Scalars['UUID1'];
};


export type MutationSetContractRoyaltiesArgs = {
  basisPoints: Array<Scalars['Int']>;
  extensionAddress?: InputMaybe<Scalars['String']>;
  nftContractId: Scalars['UUID1'];
  receivers: Array<Scalars['String']>;
};


export type MutationSetJwtIssuerDomainArgs = {
  domain: Scalars['String'];
  orgId: Scalars['UUID'];
};


export type MutationStartInvoiceDeliveryArgs = {
  invoiceID: Scalars['UUID1'];
};


export type MutationSubmitProofOfApprovalArgs = {
  nftTokenId: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
  signature: Scalars['String'];
};


export type MutationSubmitProofOfOfferArgs = {
  orderId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
  signature: Scalars['String'];
};


export type MutationTransferTokenArgs = {
  amount?: InputMaybe<Scalars['Int']>;
  contractAddress: Scalars['String'];
  tokenOnChainId: Scalars['Int'];
  tokenType?: InputMaybe<TokenType>;
  transferTo: Scalars['String'];
  walletId: Scalars['UUID1'];
};


export type MutationUpdateAfterPaymentTransferSuspendTimeArgs = {
  afterPaymentTransferSuspendTime: Scalars['Int'];
  orgID: Scalars['UUID1'];
};


export type MutationUpdateAllowListArgs = {
  allowListID: Scalars['UUID1'];
  elementsToAdd?: InputMaybe<Array<Scalars['String']>>;
  elementsToRemove?: InputMaybe<Array<Scalars['String']>>;
  endTime?: InputMaybe<Scalars['Time']>;
  orgID: Scalars['UUID1'];
  startTime?: InputMaybe<Scalars['Time']>;
};


export type MutationUpdateAllowListValuesArgs = {
  allowListID: Scalars['UUID1'];
  input: AllowListRequest;
  orgID: Scalars['UUID1'];
};


export type MutationUpdateApplicantArgs = {
  applicantID: Scalars['String'];
  input: ApplicantRequest;
};


export type MutationUpdateArtistByIdArgs = {
  artistId: Scalars['UUID1'];
  input: ArtistInput;
};


export type MutationUpdateBuyNowInvoiceExpiryMinsArgs = {
  buyNowInvoiceExpiryMins: Scalars['Int'];
  orgID: Scalars['UUID1'];
};


export type MutationUpdateCategoryByIdArgs = {
  categoryID: Scalars['UUID1'];
  input: CategoryInput;
};


export type MutationUpdateEmailTemplateArgs = {
  id: Scalars['UUID1'];
  input: CreateEmailTemplateInput;
};


export type MutationUpdateMarketplaceAuctionLotArgs = {
  data: MarketplaceAuctionLotUpdateInput;
  marketplaceAuctionLotId: Scalars['UUID'];
};


export type MutationUpdateMarketplaceBuyNowLotArgs = {
  input: MarketplaceBuyNowUpdateInput;
  marketplaceBuyNowLotID: Scalars['UUID'];
};


export type MutationUpdateMarketplaceClaimableSetArgs = {
  input: UpdateMarketplaceClaimableSetInput;
  marketplaceClaimableSetID: Scalars['UUID1'];
};


export type MutationUpdateMarketplaceCollectionArgs = {
  data: MarketplaceCollectionUpdateInput;
  id: Scalars['UUID1'];
};


export type MutationUpdateMultisigNameArgs = {
  newName: Scalars['String'];
  walletID: Scalars['UUID1'];
};


export type MutationUpdatePaymentMethodArgs = {
  input: PaymentMethodUpdateInput;
  orgID: Scalars['UUID1'];
  paymentMethodID: Scalars['UUID1'];
};


export type MutationUpdateTokenDraftArgs = {
  token: TokenDraft;
};


export type MutationUpdateTransactionHashArgs = {
  buyerAddress: Scalars['String'];
  nftTokenId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
  transactionHash: Scalars['String'];
};


export type MutationUpdateUserOrgRoleArgs = {
  orgID: Scalars['UUID'];
  role: Scalars['String'];
  userID: Scalars['UUID'];
};


export type MutationUpdateUserOrgSettingsArgs = {
  params: SettingsInput;
};


export type MutationUpdateWirePaymentExpirationArgs = {
  marketplaceID: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
  wirePaymentExpirationDays: Scalars['Int'];
};


export type MutationUploadArweaveAssetArgs = {
  assetVersionId: Scalars['UUID1'];
};


export type MutationUploadArweaveMetadataArgs = {
  tokenId: Scalars['UUID1'];
};


export type MutationUploadAssetArgs = {
  file: Scalars['Upload'];
  name: Scalars['String'];
  orgId: Scalars['UUID1'];
};


export type MutationUploadAssetsArgs = {
  files: Array<InputMaybe<Scalars['Upload']>>;
  orgId: Scalars['UUID1'];
};


export type MutationVerifySignatureArgs = {
  address: Scalars['String'];
  message: Scalars['String'];
  signature: Scalars['String'];
};

export type NftContract = {
  __typename?: 'NFTContract';
  activationTxHash: Scalars['String'];
  admins: Array<Scalars['String']>;
  arweavePathManifest?: Maybe<Scalars['String']>;
  contractAddress: Scalars['EthAddress'];
  deploymentTxHash?: Maybe<Scalars['String']>;
  id: Scalars['UUID1'];
  marketplaceAddress: Scalars['EthAddress'];
  mediaTxHash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nftContractType: NftContractType;
  nftTokens?: Maybe<Array<NftToken>>;
  symbol?: Maybe<Scalars['String']>;
  transferOwnershipHash?: Maybe<Scalars['String']>;
  wallet: Wallet;
};

export type NftContractType = {
  __typename?: 'NFTContractType';
  id: Scalars['UUID1'];
  name: Scalars['String'];
};

export enum NftCurrencyType {
  Crypto = 'CRYPTO',
  Fiat = 'FIAT'
}

export type NftDetails = {
  __typename?: 'NFTDetails';
  artist?: Maybe<Artist>;
  balance?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  contractAddress: Scalars['String'];
  contractName?: Maybe<Scalars['String']>;
  editions?: Maybe<Scalars['Int']>;
  isBuyNowEnabled?: Maybe<Scalars['Boolean']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  isMakeOfferEnabled?: Maybe<Scalars['Boolean']>;
  listedOrderInfo?: Maybe<Order>;
  metadata?: Maybe<Erc721Metadata>;
  mintedAt?: Maybe<Scalars['Time']>;
  network?: Maybe<Scalars['String']>;
  networkID?: Maybe<Scalars['UUID1']>;
  nftTokenId?: Maybe<Scalars['UUID1']>;
  owner?: Maybe<Scalars['String']>;
  ownerAddress?: Maybe<Scalars['String']>;
  price: Array<Maybe<NftPrice>>;
  qty?: Maybe<Scalars['Int']>;
  status?: Maybe<TokenStatus>;
  tokenId: Scalars['BigInt'];
  tokenOwnerAddress?: Maybe<Scalars['String']>;
  tokenOwnerAvatar?: Maybe<Scalars['String']>;
  tokenOwnerUsername?: Maybe<Scalars['String']>;
  tokenType?: Maybe<TokenType>;
  tokenURI?: Maybe<Scalars['String']>;
};

/** NFT transaction history object */
export type NftHistory = {
  __typename?: 'NFTHistory';
  asset?: Maybe<Scalars['String']>;
  blockNum?: Maybe<Scalars['Int']>;
  blockTimestamp?: Maybe<Scalars['Time']>;
  category?: Maybe<Scalars['String']>;
  erc1155Metadata?: Maybe<Array<Maybe<Erc1155Metadata>>>;
  eventType: NftTxEventType;
  from?: Maybe<Scalars['String']>;
  fromUserAvatar?: Maybe<Scalars['String']>;
  fromUserName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  price?: Maybe<Array<Maybe<NftPrice>>>;
  to?: Maybe<Scalars['String']>;
  toUserAvatar?: Maybe<Scalars['String']>;
  toUserName?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type NftMetadata = {
  __typename?: 'NFTMetadata';
  copyright?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum NftOrderType {
  Listing = 'LISTING',
  Offer = 'OFFER'
}

export type NftPrice = {
  __typename?: 'NFTPrice';
  type: NftCurrencyType;
  unit: Scalars['String'];
  value: Scalars['Float'];
};

export type NftSaleDetails = {
  __typename?: 'NFTSaleDetails';
  Network?: Maybe<Network>;
  order: Order;
  proofOfApproval: Scalars['String'];
};

export type NftToken = {
  __typename?: 'NFTToken';
  asset?: Maybe<Asset>;
  assetId?: Maybe<Scalars['UUID1']>;
  deployed: Scalars['Boolean'];
  editions?: Maybe<Scalars['Int']>;
  ethereumTxId?: Maybe<Scalars['String']>;
  id: Scalars['UUID1'];
  metadataArweaveTxId?: Maybe<Scalars['String']>;
  metadataArweaveTxLink?: Maybe<Scalars['String']>;
  metadataJSON?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nftContract: NftContract;
  nftContractID: Scalars['UUID1'];
  onChainId?: Maybe<Scalars['Int']>;
  royaltyBasisPoints?: Maybe<Scalars['Int']>;
  tokenMetadata?: Maybe<Erc721Metadata>;
};

export type NftTraitRarity = {
  __typename?: 'NFTTraitRarity';
  displayType?: Maybe<Scalars['String']>;
  maxValue?: Maybe<Scalars['Int']>;
  prevalance: Scalars['Float'];
  traitType: Scalars['String'];
  value: AttributeValue;
};

export enum NftTxEventType {
  Expired = 'Expired',
  List = 'List',
  ListRemoved = 'List_Removed',
  Minted = 'Minted',
  Offer = 'Offer',
  OfferCancelled = 'Offer_Cancelled',
  OfferRejected = 'Offer_Rejected',
  OfferSold = 'Offer_Sold',
  Sale = 'Sale',
  Transfer = 'Transfer'
}

export enum NatsStreamNames {
  Barback = 'BARBACK',
  Bids = 'BIDS',
  Invoices = 'INVOICES',
  Lots = 'LOTS',
  Payments = 'PAYMENTS',
  TransactionalEvents = 'TRANSACTIONAL_EVENTS',
  Users = 'USERS',
  Wallets = 'WALLETS'
}

export type Network = {
  __typename?: 'Network';
  chainID: Scalars['Int'];
  defaultCurrency: Scalars['String'];
  id: Scalars['UUID1'];
  isTestnet: Scalars['Boolean'];
  name: Scalars['String'];
  nftAPIURL: Scalars['String'];
  openSeaProxyAddress: Scalars['String'];
  paymentCurrency: Scalars['String'];
  rpcURL: Scalars['String'];
  safeFactoryAddress: Scalars['String'];
  safeFallbackHandler: Scalars['String'];
  safeMasterContractAddress: Scalars['String'];
  wethAddress: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  buyerAddress: Scalars['String'];
  buyerCurrency?: Maybe<SupportedCurrency>;
  buyerCurrencyId?: Maybe<Scalars['UUID1']>;
  buyerTax?: Maybe<Scalars['Float']>;
  createdAt: Scalars['Time'];
  createdBy?: Maybe<User>;
  createdByUserId?: Maybe<Scalars['UUID1']>;
  fixedPrice: Scalars['Float'];
  id: Scalars['UUID1'];
  listedCurrency?: Maybe<SupportedCurrency>;
  listedCurrencyId?: Maybe<Scalars['UUID1']>;
  nftOwnerAddress: Scalars['String'];
  nftToken?: Maybe<NftToken>;
  nftTokenId: Scalars['UUID1'];
  offerExpiryDate: Scalars['Time'];
  orderStatus?: Maybe<OrderStatus>;
  orderType: NftOrderType;
  paymentToken: Scalars['String'];
  price: Array<Maybe<NftPrice>>;
  quantity: Scalars['Int'];
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
  tokenType: TokenType;
  updatedAt: Scalars['Time'];
};

export type OrderActivity = {
  __typename?: 'OrderActivity';
  ActivityName: ActivityName;
  ContractAddress: Scalars['String'];
  ContractName: Scalars['String'];
  CreatedAt?: Maybe<Scalars['Time']>;
  FromUserAvatar?: Maybe<Scalars['String']>;
  FromUserName?: Maybe<Scalars['String']>;
  FromWallet?: Maybe<Wallet>;
  ID: Scalars['UUID1'];
  InvoiceID?: Maybe<Scalars['UUID1']>;
  InvoiceURL?: Maybe<Scalars['String']>;
  NFTTokenID?: Maybe<Scalars['UUID1']>;
  NetworkID: Scalars['UUID1'];
  Price?: Maybe<Array<NftPrice>>;
  Status?: Maybe<OrderStatus>;
  ToUserAvatar?: Maybe<Scalars['String']>;
  ToUserName?: Maybe<Scalars['String']>;
  ToWallet?: Maybe<Wallet>;
  TokenID: Scalars['BigInt'];
  TokenName: Scalars['String'];
  TransactionHash?: Maybe<Scalars['String']>;
};

export enum OrderActivityFilters {
  LatestToOldest = 'LATEST_TO_OLDEST',
  OldestToLatest = 'OLDEST_TO_LATEST'
}

export type OrderActivityResponse = {
  __typename?: 'OrderActivityResponse';
  data: Array<OrderActivity>;
  totalCount: Scalars['Int'];
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Removed = 'REMOVED'
}

export type Organization = {
  __typename?: 'Organization';
  afterPaymentTransferSuspendTime?: Maybe<Scalars['Int']>;
  assets?: Maybe<Array<Asset>>;
  buyNowInvoiceExpiryMins?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Time'];
  handle: Scalars['String'];
  id: Scalars['UUID1'];
  jwtIssuerDomain?: Maybe<Scalars['String']>;
  marketplaces: Array<Marketplace>;
  members: Array<OrganizationMember>;
  mor?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  nftContracts?: Maybe<Array<NftContract>>;
  notes?: Maybe<Scalars['String']>;
  purchaseLimitWithoutKYC?: Maybe<Scalars['Float']>;
  totalUsers?: Maybe<Scalars['BigInt']>;
  wallets?: Maybe<Array<Wallet>>;
};


export type OrganizationAssetsArgs = {
  filter?: InputMaybe<AssetFilter>;
};


export type OrganizationMembersArgs = {
  filter?: InputMaybe<OrganizationMemberFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type OrganizationData = {
  __typename?: 'OrganizationData';
  data: Array<Maybe<Organization>>;
  pagination: Pagination;
};

export type OrganizationMember = {
  __typename?: 'OrganizationMember';
  KycStatus?: Maybe<KycStatus>;
  createdAt?: Maybe<Scalars['Time']>;
  email?: Maybe<Scalars['String']>;
  externalId: Scalars['String'];
  id: Scalars['UUID1'];
  name?: Maybe<Scalars['String']>;
  organizationId: Scalars['UUID1'];
  role?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
  userId: Scalars['UUID1'];
  username?: Maybe<Scalars['String']>;
  walletAddress?: Maybe<Scalars['String']>;
};

export type OrganizationMemberFilter = {
  externalUserId?: InputMaybe<Scalars['String']>;
};

export type OrganizationUserList = {
  __typename?: 'OrganizationUserList';
  pagination: Pagination;
  users: Array<Maybe<OrganizationMember>>;
};

export type OwnedTokens = {
  __typename?: 'OwnedTokens';
  requestObj?: Maybe<OwnedTokensMetadata>;
  tokens?: Maybe<Array<Maybe<WalletToken>>>;
};

export type OwnedTokensMetadata = {
  __typename?: 'OwnedTokensMetadata';
  count?: Maybe<Scalars['Int']>;
  networkID?: Maybe<Scalars['UUID1']>;
  nextPageKey?: Maybe<Scalars['String']>;
  prevPageKey?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Owners = {
  __typename?: 'Owners';
  Owners?: Maybe<Array<Scalars['String']>>;
};

export type PdfTemplate = {
  __typename?: 'PDFTemplate';
  active: Scalars['Boolean'];
  id: Scalars['UUID1'];
  organization: Organization;
  organizationID: Scalars['UUID1'];
  pdfTemplateType: EventType;
  templateContent: Scalars['String'];
};

export type PaginatedMarketplaceClaimableCodeOutput = {
  __typename?: 'PaginatedMarketplaceClaimableCodeOutput';
  count?: Maybe<Scalars['Int']>;
  results: Array<MarketplaceClaimableCodeOutput>;
};

export type Pagination = {
  __typename?: 'Pagination';
  offset: Scalars['Int'];
  totalCount: Scalars['BigInt'];
};

export type Payment = {
  __typename?: 'Payment';
  circlePaymentID: Scalars['String'];
  id: Scalars['UUID1'];
  invoiceID: Scalars['UUID1'];
  paymentMethodID: Scalars['UUID1'];
  status: PaymentStatus;
  userID: Scalars['UUID1'];
};

export type PaymentDetails = CryptoPaymentDetails | WirePaymentDetails;

export type PaymentMethodCreateInput = {
  achData?: InputMaybe<AchData>;
  creditCardData?: InputMaybe<CreditCardData>;
  paymentType: PaymentType;
  wireData?: InputMaybe<WireData>;
};

export type PaymentMethodOutput = AchPaymentMethodOutput | CreditCardPaymentMethodOutput | CryptoPaymentMethodOutput | WirePaymentMethodOutput;

export type PaymentMethodPrepareStatementOutput = AchPaymentMethodPrepareStatementOutput;

export type PaymentMethodUpdateInput = {
  achData?: InputMaybe<AchData>;
  creditCardData?: InputMaybe<CreditCardData>;
  paymentType: PaymentType;
};

export type PaymentNotification3DsMessage = {
  __typename?: 'PaymentNotification3DSMessage';
  error?: Maybe<Scalars['String']>;
  redirectURL?: Maybe<Scalars['String']>;
};

export type PaymentNotificationMessage = PaymentNotification3DsMessage;

export type PaymentNotificationOutput = {
  __typename?: 'PaymentNotificationOutput';
  message: PaymentNotificationMessage;
};

export type PaymentOutput = {
  __typename?: 'PaymentOutput';
  details?: Maybe<PaymentDetails>;
  id: Scalars['UUID1'];
  invoiceID: Scalars['UUID1'];
  paymentMethodID: Scalars['UUID1'];
  processorPaymentID: Scalars['String'];
  status: PaymentStatus;
  userID: Scalars['UUID1'];
};

export type PaymentPublicKey = {
  __typename?: 'PaymentPublicKey';
  keyID: Scalars['String'];
  publicKey: Scalars['String'];
};

export enum PaymentStatus {
  ActionRequired = 'action_required',
  Chargeback = 'chargeback',
  Confirmed = 'confirmed',
  Failed = 'failed',
  Paid = 'paid',
  Pending = 'pending'
}

export enum PaymentSubStatus {
  Overpaid = 'overpaid',
  Paid = 'paid',
  Underpaid = 'underpaid'
}

export enum PaymentType {
  Ach = 'ACH',
  CreditCard = 'CreditCard',
  Crypto = 'Crypto',
  Wire = 'Wire'
}

export type Query = {
  __typename?: 'Query';
  /** Returns Invoice Item after applying the Discount */
  applyDiscountCode: DiscountedInvoiceItem;
  availableClaimables: Scalars['Int'];
  /** Check if user can redeem claimable item */
  canRedeemClaimableItem: Scalars['Boolean'];
  /** Performs card screening and returns risk score */
  cardScreening: CardResponse;
  collection?: Maybe<MarketplaceCollection>;
  collectionBySlug?: Maybe<MarketplaceCollection>;
  collectionItemById?: Maybe<MarketplaceCollectionItem>;
  /**  Get wallet content from Alchemy  */
  getActiveWalletsContent: OwnedTokens;
  /** Retrieves all registry_tokens details by organizationID and owner address */
  getAllRegistryTokens: RegistryTokensResponse;
  /** Retrieves all registry_tokens details by organizationID and user */
  getAllRegistryTokensByUser: RegistryTokensResponse;
  getAllowList: AllowList;
  getAllowLists?: Maybe<Array<AllowList>>;
  /** Retrieves applicant details by organizationID */
  getApplicant: ApplicantResponse;
  /** getArtistById returns artist by artistId */
  getArtistById: Artist;
  /**  getArtists gets list of artists   */
  getArtists: ArtistResponse;
  getBuyNowBuyerInfo?: Maybe<Array<BuyerDetailOutput>>;
  /**  getCategories gets the list of categories  */
  getCategories: CategoryResponse;
  /**  getCategoryById returns category by categoryId  */
  getCategoryById: Category;
  getClaimableCodesForSetId: PaginatedMarketplaceClaimableCodeOutput;
  /** Retrieves Discount codes by Invoice Item ID */
  getDiscountCodes: Array<Maybe<DiscountCode>>;
  /** Retrieves email templates for organizationID and filters by eventType if provided  */
  getEmailTemplateByOrgIDAndEventType: Array<Maybe<EmailTemplate>>;
  /** Retrieves invoice details by ID */
  getInvoiceDetails: InvoiceDetails;
  /**  getInvoiceURL returns signed url of invoice for given invoice ID  */
  getInvoiceURL: Scalars['String'];
  /** Retrieves invoice list for given user, can be called by org admin */
  getInvoicesByUserID: Array<Maybe<InvoiceDetails>>;
  getMarketplaceAuctionLot: MarketplaceAuctionLot;
  /** Retrieves invoices user owns */
  getMyInvoices: Array<Maybe<InvoiceDetails>>;
  /** Retrieves payments user owns */
  getMyPayments: Array<Maybe<Payment>>;
  /**  getNFTAttributesRarity returns rarity of traits for given token  */
  getNFTAttributesRarity?: Maybe<Array<NftTraitRarity>>;
  /**  getNFTDetails returns NFT details for given contractAddress & onChainTokenID  */
  getNFTDetails: NftDetails;
  /**  getNFTDetailsByTokenId returns nft details for given nftTokenId  */
  getNFTDetailsByTokenId: NftDetails;
  /** getNFTFavouriteListByUser returns the user's favorite nft list  */
  getNFTFavouriteListByUser: FavoriteNftResponse;
  /**  getNFTHistory returns the history of an NFT  */
  getNFTHistory: Array<Maybe<NftHistory>>;
  /**  getOffers returns valid offers available for an nft  */
  getOffers?: Maybe<Array<Order>>;
  /** Retrieves PDF templates for organizationID and filters by PDFTemplateType if provided  */
  getPDFTemplateByOrgIDAndEventType: PdfTemplate;
  /** Returns requested Payment method */
  getPaymentMethod: PaymentMethodOutput;
  /** Returns Payment method list in scope of current Organization. */
  getPaymentMethodList: Array<PaymentMethodOutput>;
  /** Retrieves Payment notification */
  getPaymentNotification: PaymentNotificationOutput;
  /** Returns Public Key for further Payment data encryption. */
  getPaymentPublicKey: PaymentPublicKey;
  /** Retrieves payment list for given user, can be called by org admin */
  getPaymentsByUserID: Array<Maybe<Payment>>;
  /** Retrieves registry details by organizationID */
  getRegistries: RegistryResponse;
  /** Retrieves sdk token to inititate onfido web SDK */
  getSDKToken: SdkTokenResponse;
  /**  getSignatureForOfferApproval validate token ownership and returns signature for approval  */
  getSignatureForOfferApproval: NftSaleDetails;
  /** getSignatureMessage returns a message that should be used for in signing process */
  getSignatureMessage: Scalars['String'];
  /**  getSupportedCountries gets list of supported countries */
  getSupportedCountries: Array<Maybe<SupportedCountry>>;
  /**  getSupportedCurrencies returns list of supported currencies  */
  getSupportedCurrencies?: Maybe<Array<SupportedCurrency>>;
  /**  getSupportedCurrenciesByOrganization returns list of supported currencies against the organization */
  getSupportedCurrenciesByOrganization?: Maybe<Array<SupportedCurrency>>;
  /**  getSupportedNetworks returns list of supported networks  */
  getSupportedNetworks?: Maybe<Array<Network>>;
  /**  getSupportedNetworksByOrganization returns list of supported networks by organization */
  getSupportedNetworksByOrganization?: Maybe<Array<SupportedNetwork>>;
  /** Get Tax Quote */
  getTaxQuote: TaxQuoteOutput;
  getTokenTransfersHistory: Array<TokenTransfers>;
  /** Retrieves registry_tokenss details by organizationID and registryID */
  getTokensInRegistry: RegistryTokensResponse;
  /**  getUSDPrice returns conversion rate to USD for provided currency  */
  getUSDPrice: GetUsdPriceResponse;
  /** Get User by wallet address and orgID */
  getUserByWalletAddress?: Maybe<User>;
  /** Get UserInvitations by orgID */
  getUserInvitations: Array<Maybe<UserInvitation>>;
  /**  getUserOrderActivity returns order activities for user  */
  getUserOrderActivity?: Maybe<OrderActivityResponse>;
  getWalletDeliveryCount: Scalars['Int'];
  internalUsers: Array<UserOrganization>;
  isTokenRedeemed: Scalars['Boolean'];
  isUserOnAllowList: Scalars['Boolean'];
  isUserOnClaimableSetsAllowList: Scalars['Boolean'];
  /** Get Users list (by org id: optional) */
  listMintUsers?: Maybe<UserList>;
  /** Get Users list from Organization by orgID */
  listOrgCustomer?: Maybe<OrganizationUserList>;
  listOrganizations: OrganizationData;
  /** create invoice/lot report by collectionID and mails  to provided email */
  mailInvoiceLotDetailReportMailByCollectionID: Scalars['Boolean'];
  /** create salesreport by collectionID and mails to provided email */
  mailSalesReportByCollectionID: Scalars['Boolean'];
  marketplace: Marketplace;
  me?: Maybe<CurrentUser>;
  network: Network;
  nftContract: NftContract;
  nftToken: NftToken;
  orgUsernameAvailable: Scalars['Boolean'];
  organization: Organization;
  organizationByID: Organization;
  ping: Scalars['String'];
  /** Prepare requested Payment method for further use */
  preparePaymentMethod?: Maybe<PaymentMethodPrepareStatementOutput>;
  serverTime: Scalars['Time'];
  /**  tokenOwners returns the list of token owners */
  tokenOwners: Array<Maybe<TokenOwnersResponse>>;
  validateIp: ValidateIpResponse;
  /** Validate Payment limit */
  validatePaymentLimit: ValidatePaymentLimitOutput;
  validateTokenTransfer: Scalars['Boolean'];
  wallet: Wallet;
};


export type QueryApplyDiscountCodeArgs = {
  discountCode: Scalars['String'];
  invoiceItemID: Scalars['UUID1'];
};


export type QueryAvailableClaimablesArgs = {
  claimableSetID: Scalars['UUID1'];
};


export type QueryCanRedeemClaimableItemArgs = {
  claimableItemID: Scalars['UUID1'];
  destAddr?: InputMaybe<Scalars['String']>;
};


export type QueryCardScreeningArgs = {
  input: CardScreeningInput;
  orgID: Scalars['UUID1'];
};


export type QueryCollectionArgs = {
  id: Scalars['String'];
};


export type QueryCollectionBySlugArgs = {
  marketplaceID: Scalars['UUID1'];
  slug: Scalars['String'];
};


export type QueryCollectionItemByIdArgs = {
  id: Scalars['UUID1'];
};


export type QueryGetActiveWalletsContentArgs = {
  filters?: InputMaybe<ActiveWalletFilterInput>;
  networkId: Scalars['UUID1'];
  nextPageKey?: InputMaybe<Scalars['String']>;
  orgID: Scalars['UUID1'];
  walletAddress: Scalars['String'];
};


export type QueryGetAllRegistryTokensArgs = {
  categoryID?: InputMaybe<Scalars['UUID1']>;
  filters?: InputMaybe<RegistryTokenFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  marketplaceID?: InputMaybe<Scalars['UUID1']>;
  offset?: InputMaybe<Scalars['Int']>;
  orgID: Scalars['UUID1'];
  owner?: InputMaybe<Scalars['String']>;
  searchKey?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<RegistryTokenSortInput>;
  status?: InputMaybe<TokenStatus>;
};


export type QueryGetAllRegistryTokensByUserArgs = {
  categoryID?: InputMaybe<Scalars['UUID1']>;
  filters?: InputMaybe<RegistryTokenFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  marketplaceID?: InputMaybe<Scalars['UUID1']>;
  offset?: InputMaybe<Scalars['Int']>;
  orgID: Scalars['UUID1'];
  searchKey?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<RegistryTokenSortInput>;
  status?: InputMaybe<TokenStatus>;
};


export type QueryGetAllowListArgs = {
  allowListID: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
};


export type QueryGetAllowListsArgs = {
  orgID: Scalars['UUID1'];
};


export type QueryGetApplicantArgs = {
  organizationID: Scalars['UUID1'];
};


export type QueryGetArtistByIdArgs = {
  artistId: Scalars['UUID1'];
  marketplaceId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type QueryGetArtistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  marketplaceId: Scalars['UUID1'];
  offset?: InputMaybe<Scalars['Int']>;
  orgId: Scalars['UUID1'];
  searchKey?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetBuyNowBuyerInfoArgs = {
  itemId: Scalars['UUID1'];
};


export type QueryGetCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  marketplaceId: Scalars['UUID1'];
  offset?: InputMaybe<Scalars['Int']>;
  orgId: Scalars['UUID1'];
  searchKey?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<CategorySortInput>;
};


export type QueryGetCategoryByIdArgs = {
  categoryID: Scalars['UUID1'];
  marketplaceId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type QueryGetClaimableCodesForSetIdArgs = {
  claimableSetID: Scalars['UUID1'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryGetDiscountCodesArgs = {
  invoiceItemID: Scalars['UUID1'];
};


export type QueryGetEmailTemplateByOrgIdAndEventTypeArgs = {
  eventType?: InputMaybe<EventType>;
  orgID: Scalars['UUID1'];
};


export type QueryGetInvoiceDetailsArgs = {
  invoiceID: Scalars['UUID1'];
};


export type QueryGetInvoiceUrlArgs = {
  invoiceID: Scalars['UUID1'];
};


export type QueryGetInvoicesByUserIdArgs = {
  orgID: Scalars['UUID1'];
  userID: Scalars['UUID1'];
};


export type QueryGetMarketplaceAuctionLotArgs = {
  marketplaceAuctionLotId: Scalars['UUID'];
};


export type QueryGetMyInvoicesArgs = {
  returnAllStatuses?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetNftAttributesRarityArgs = {
  contractAddress: Scalars['String'];
  networkID: Scalars['UUID1'];
  tokenID: Scalars['BigInt'];
};


export type QueryGetNftDetailsArgs = {
  contractAddress?: InputMaybe<Scalars['String']>;
  networkId?: InputMaybe<Scalars['UUID1']>;
  nftTokenId?: InputMaybe<Scalars['UUID1']>;
  onChainTokenID?: InputMaybe<Scalars['BigInt']>;
  orgId: Scalars['UUID1'];
};


export type QueryGetNftDetailsByTokenIdArgs = {
  nftTokenId: Scalars['UUID1'];
  orgId?: InputMaybe<Scalars['UUID1']>;
};


export type QueryGetNftFavouriteListByUserArgs = {
  filter?: InputMaybe<SavedNftFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orgId: Scalars['UUID1'];
  searchKey?: InputMaybe<Scalars['String']>;
};


export type QueryGetNftHistoryArgs = {
  contractAddress: Scalars['String'];
  filterBy?: InputMaybe<NftTxEventType>;
  networkId: Scalars['String'];
  nftTokenId?: InputMaybe<Scalars['UUID1']>;
  orgId: Scalars['UUID1'];
  tokenId: Scalars['BigInt'];
};


export type QueryGetOffersArgs = {
  buyerAddress?: InputMaybe<Scalars['String']>;
  nftTokenId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type QueryGetPdfTemplateByOrgIdAndEventTypeArgs = {
  orgID: Scalars['UUID1'];
  pdfTemplateType: EventType;
};


export type QueryGetPaymentMethodArgs = {
  paymentMethodID: Scalars['UUID1'];
};


export type QueryGetPaymentMethodListArgs = {
  orgID: Scalars['UUID1'];
};


export type QueryGetPaymentPublicKeyArgs = {
  orgID: Scalars['UUID1'];
};


export type QueryGetPaymentsByUserIdArgs = {
  orgID: Scalars['UUID1'];
  userID: Scalars['UUID1'];
};


export type QueryGetRegistriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  marketplaceID: Scalars['UUID1'];
  offset?: InputMaybe<Scalars['Int']>;
  orgID: Scalars['UUID1'];
  searchKey?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<RegistrySortInput>;
};


export type QueryGetSdkTokenArgs = {
  applicantID: Scalars['String'];
  referrer: Scalars['String'];
};


export type QueryGetSignatureForOfferApprovalArgs = {
  orderId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type QueryGetSignatureMessageArgs = {
  networkID: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
  walletAddress: Scalars['String'];
};


export type QueryGetSupportedCountriesArgs = {
  marketplaceId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type QueryGetSupportedCurrenciesArgs = {
  nftTokenId: Scalars['UUID1'];
  orgId: Scalars['UUID1'];
};


export type QueryGetSupportedCurrenciesByOrganizationArgs = {
  orgId: Scalars['UUID1'];
};


export type QueryGetSupportedNetworksArgs = {
  includeTestnets?: InputMaybe<Scalars['Boolean']>;
  orgId: Scalars['UUID1'];
};


export type QueryGetSupportedNetworksByOrganizationArgs = {
  orgId: Scalars['UUID1'];
};


export type QueryGetTaxQuoteArgs = {
  input: TaxQuoteInput;
};


export type QueryGetTokenTransfersHistoryArgs = {
  orgId: Scalars['UUID1'];
};


export type QueryGetTokensInRegistryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orgID: Scalars['UUID1'];
  registryID: Scalars['UUID1'];
  sort?: InputMaybe<TokensInRegistrySortInput>;
};


export type QueryGetUsdPriceArgs = {
  cryptoCurrencyCode: CryptoCurrenyCode;
};


export type QueryGetUserByWalletAddressArgs = {
  address: Scalars['String'];
  orgId: Scalars['UUID1'];
};


export type QueryGetUserInvitationsArgs = {
  orgId: Scalars['UUID1'];
};


export type QueryGetUserOrderActivityArgs = {
  filter?: InputMaybe<OrderActivityFilters>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orgId: Scalars['UUID1'];
};


export type QueryGetWalletDeliveryCountArgs = {
  internalWallets: Scalars['Boolean'];
  marketplaceCollectionId: Scalars['UUID1'];
};


export type QueryInternalUsersArgs = {
  organizationID: Scalars['UUID1'];
};


export type QueryIsTokenRedeemedArgs = {
  extensionAddress: Scalars['String'];
  nftContractId: Scalars['UUID1'];
  tokenId: Scalars['Int'];
};


export type QueryIsUserOnAllowListArgs = {
  lotID: Scalars['UUID1'];
};


export type QueryIsUserOnClaimableSetsAllowListArgs = {
  claimableSetID: Scalars['UUID1'];
};


export type QueryListMintUsersArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orgID?: InputMaybe<Scalars['UUID1']>;
};


export type QueryListOrgCustomerArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orgID: Scalars['UUID1'];
};


export type QueryListOrganizationsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryMailInvoiceLotDetailReportMailByCollectionIdArgs = {
  collectionID: Scalars['UUID1'];
  toEmail: Scalars['String'];
};


export type QueryMailSalesReportByCollectionIdArgs = {
  collectionID: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
  toEmail: Scalars['String'];
};


export type QueryMarketplaceArgs = {
  id: Scalars['UUID'];
};


export type QueryNetworkArgs = {
  id: Scalars['UUID1'];
};


export type QueryNftContractArgs = {
  id: Scalars['UUID1'];
};


export type QueryNftTokenArgs = {
  id: Scalars['UUID1'];
};


export type QueryOrgUsernameAvailableArgs = {
  organizationID: Scalars['UUID1'];
  username: Scalars['String'];
};


export type QueryOrganizationArgs = {
  handle: Scalars['String'];
};


export type QueryOrganizationByIdArgs = {
  id: Scalars['UUID1'];
};


export type QueryPreparePaymentMethodArgs = {
  orgID?: InputMaybe<Scalars['UUID1']>;
  paymentMethodType: PaymentType;
};


export type QueryTokenOwnersArgs = {
  chainId: Scalars['Int'];
  contractAddress: Scalars['String'];
  tokenIds: Array<Scalars['Int']>;
};


export type QueryValidateIpArgs = {
  ip: Scalars['String'];
  organizationID: Scalars['UUID1'];
};


export type QueryValidatePaymentLimitArgs = {
  collectionID: Scalars['UUID1'];
  itemsCount: Scalars['Int'];
};


export type QueryValidateTokenTransferArgs = {
  contractAddress: Scalars['String'];
  onChainTokenId: Scalars['Int'];
  walletId: Scalars['UUID1'];
};


export type QueryWalletArgs = {
  id: Scalars['UUID1'];
};

export type Registry = {
  __typename?: 'Registry';
  Artist: Artist;
  ArtistID: Scalars['UUID1'];
  Category: Category;
  CategoryID: Scalars['UUID1'];
  CollectionName: Scalars['String'];
  CollectionTotal: Scalars['Int'];
  ContractAddress: Scalars['String'];
  CreatedAt: Scalars['Time'];
  CreatedBy: Scalars['UUID1'];
  ID: Scalars['UUID1'];
  IsAllTokensApproved: Scalars['Boolean'];
  MarketplaceID: Scalars['UUID1'];
  Network: Network;
  NetworkID: Scalars['UUID1'];
  OrganizationID: Scalars['UUID1'];
  TotalApproved: Scalars['Int'];
  UpdatedAt: Scalars['Time'];
};

export enum RegistryColumnType {
  CollectionName = 'collectionName',
  CollectionTotal = 'collectionTotal',
  CreatedAt = 'createdAt',
  TotalApproved = 'totalApproved'
}

export type RegistryResponse = {
  __typename?: 'RegistryResponse';
  data: Array<Maybe<Registry>>;
  totalCount: Scalars['Int'];
};

export type RegistrySortInput = {
  column: RegistryColumnType;
  type: OrderType;
};

export enum RegistryTokenColumnType {
  TokenId = 'tokenID',
  TokenName = 'tokenName',
  TokenType = 'tokenType'
}

export enum RegistryTokenFilterInput {
  PriceHighToLow = 'price_high_to_low',
  PriceLowToHigh = 'price_low_to_high',
  RecentlyListed = 'recently_listed',
  RecentlyMinted = 'recently_minted'
}

export type RegistryTokenSortInput = {
  column: RegistryTokenColumnType;
  type: OrderType;
};

export type RegistryTokens = {
  __typename?: 'RegistryTokens';
  CreatedAt?: Maybe<Scalars['Time']>;
  CreatedBy: Scalars['UUID1'];
  ID: Scalars['UUID1'];
  ListingStatus: ListingStatus;
  MetaData: Erc721Metadata;
  MintedAt?: Maybe<Scalars['Time']>;
  NFTTokenID?: Maybe<Scalars['UUID1']>;
  Owners: Scalars['String'];
  OwnersList?: Maybe<Array<Maybe<Scalars['String']>>>;
  Price: Array<Maybe<NftPrice>>;
  Registry: Registry;
  RegistryId: Scalars['UUID1'];
  Status?: Maybe<TokenStatus>;
  TokenID: Scalars['BigInt'];
  TokenName: Scalars['String'];
  TokenOwnerAddress?: Maybe<Scalars['String']>;
  TokenType: TokenType;
  TokenURI?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['Time']>;
};

export type RegistryTokensResponse = {
  __typename?: 'RegistryTokensResponse';
  data: Array<Maybe<RegistryTokens>>;
  highestSoldPrice?: Maybe<Array<Maybe<NftPrice>>>;
  latestSoldPrice?: Maybe<Array<Maybe<NftPrice>>>;
  lowestSoldPrice?: Maybe<Array<Maybe<NftPrice>>>;
  totalCount: Scalars['Int'];
  user?: Maybe<UserResponse>;
};

export type RelayTxInput = {
  networkId: Scalars['UUID1'];
  relayerAddress: Scalars['String'];
};

export type ReserveMarketplaceBuyNowLotInput = {
  itemCount: Scalars['Int'];
  marketplaceBuyNowLotID: Scalars['UUID1'];
};

export enum RiskRating {
  High = 'High',
  Low = 'Low'
}

export enum Role {
  Admin = 'admin',
  User = 'user'
}

export type SdkTokenResponse = {
  __typename?: 'SDKTokenResponse';
  token: Scalars['String'];
};

export enum SavedNftFilterInput {
  MostSaved = 'most_saved',
  PriceHighToLow = 'price_high_to_low',
  PriceLowToHigh = 'price_low_to_high',
  PurchasedFromOrg = 'purchased_from_org',
  RecentlyListed = 'recently_listed',
  RecentlyMinted = 'recently_minted'
}

export type SettingsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  settingsJson?: InputMaybe<Scalars['String']>;
  userOrgId: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type SignInRequest = {
  chainID: Scalars['Int'];
  challenge: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  signature: Scalars['String'];
  signer: Scalars['String'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  me: CurrentUser;
  refreshToken: Scalars['String'];
  token: Scalars['String'];
};

export type SignatureResponse = {
  __typename?: 'SignatureResponse';
  messageToSign: Scalars['String'];
  order: Order;
};

export type Subscription = {
  __typename?: 'Subscription';
  auctionLotUpdated: MarketplaceAuctionLot;
  bidFeed: MarketplaceAuctionBid;
  /** Returns a MarketplaceAuctionLot on subscribe and whenever a new bid is placed */
  getMarketplaceAuctionLot: MarketplaceAuctionLot;
  /** Subscribes to lots and bids updates within given marketplace collection */
  marketplaceCollectionLotsUpdates: MarketplaceAuctionLot;
};


export type SubscriptionAuctionLotUpdatedArgs = {
  marketplaceAuctionLotId: Scalars['UUID'];
};


export type SubscriptionBidFeedArgs = {
  marketplaceAuctionLotId: Scalars['UUID'];
};


export type SubscriptionGetMarketplaceAuctionLotArgs = {
  marketplaceAuctionLotId: Scalars['UUID1'];
};


export type SubscriptionMarketplaceCollectionLotsUpdatesArgs = {
  collectionId: Scalars['UUID1'];
};

export type SupportedCountry = {
  __typename?: 'SupportedCountry';
  countryCode: Scalars['String'];
  countryName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID1'];
  marketplace: Marketplace;
  marketplaceId: Scalars['UUID1'];
};

export type SupportedCountryInput = {
  countryCode: Scalars['String'];
  countryName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  marketplaceId: Scalars['UUID1'];
};

export type SupportedCurrency = {
  __typename?: 'SupportedCurrency';
  contractAddress?: Maybe<Scalars['String']>;
  id: Scalars['UUID1'];
  isErc20?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  network?: Maybe<Network>;
  networkId: Scalars['UUID1'];
  organizationId: Scalars['UUID1'];
  symbol: Scalars['String'];
};

export type SupportedCurrencyInput = {
  contractAddress: Scalars['String'];
  isErc20: Scalars['Boolean'];
  name: Scalars['String'];
  networkId: Scalars['UUID1'];
  organizationId: Scalars['UUID1'];
  symbol: Scalars['String'];
};

export type SupportedNetwork = {
  __typename?: 'SupportedNetwork';
  defaultPaymentCurrencyID?: Maybe<Scalars['UUID1']>;
  id: Scalars['UUID1'];
  isBuyNowEnabled: Scalars['Boolean'];
  isMakeOfferEnabled: Scalars['Boolean'];
  networkId: Scalars['UUID1'];
  organizationID: Scalars['UUID1'];
  secondaryMarketplaceContractAddress: Scalars['String'];
};

export type TaxEstimateResponse = {
  __typename?: 'TaxEstimateResponse';
  platformFee: Scalars['Float'];
  royaltyFee: Scalars['Float'];
  taxPercentage: Scalars['Float'];
};

export enum TaxEstimateType {
  AcceptOffer = 'AcceptOffer',
  BuyNow = 'BuyNow',
  ListForSale = 'ListForSale',
  MakeOffer = 'MakeOffer'
}

export enum TaxProvider {
  NoOp = 'NoOp',
  TaxJar = 'TaxJar',
  Vertex = 'Vertex'
}

export type TaxQuoteBillingAddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
  street1: Scalars['String'];
};

export type TaxQuoteBillingAddressOutput = {
  __typename?: 'TaxQuoteBillingAddressOutput';
  city: Scalars['String'];
  country: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
  street1: Scalars['String'];
};

export type TaxQuoteInput = {
  address: TaxQuoteBillingAddressInput;
  orgID: Scalars['UUID1'];
  taxablePrice: Scalars['Float'];
};

export type TaxQuoteOutput = {
  __typename?: 'TaxQuoteOutput';
  taxablePrice: Scalars['Float'];
  totalTaxAmount: Scalars['Float'];
  totalTaxedPrice: Scalars['Float'];
  verifiedAddress: TaxQuoteBillingAddressOutput;
};

export type TokenDraft = {
  assetId?: InputMaybe<Scalars['UUID1']>;
  copyright?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  editions?: InputMaybe<Scalars['Int']>;
  invoiceItemId?: InputMaybe<Scalars['UUID1']>;
  metadataJSON?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  royaltyBasisPoints?: InputMaybe<Scalars['Int']>;
  tokenId?: InputMaybe<Scalars['UUID1']>;
};

export type TokenMetadata = {
  __typename?: 'TokenMetadata';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TokenOwner = {
  __typename?: 'TokenOwner';
  tokenId: Scalars['Int'];
  walletAddress: Scalars['String'];
};

export type TokenOwnersResponse = {
  __typename?: 'TokenOwnersResponse';
  owners: Array<Maybe<Scalars['String']>>;
  tokenId: Scalars['Int'];
};

export type TokenRequest = {
  artistID: Scalars['UUID1'];
  categoryID: Scalars['UUID1'];
  registryID: Scalars['UUID1'];
  tokenIDs?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenStatus {
  EnquiryPending = 'ENQUIRY_PENDING',
  New = 'NEW',
  OpenForSale = 'OPEN_FOR_SALE',
  SalePending = 'SALE_PENDING',
  StaleOwnership = 'STALE_OWNERSHIP'
}

export type TokenTransfers = {
  __typename?: 'TokenTransfers';
  amount?: Maybe<Scalars['Int']>;
  callerUserId?: Maybe<Scalars['UUID1']>;
  contractAddress?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  id: Scalars['UUID1'];
  jobId?: Maybe<Scalars['UUID1']>;
  organizationId?: Maybe<Scalars['UUID1']>;
  resolvedTransferTo?: Maybe<Scalars['String']>;
  status: TransferStatus;
  token: MarketplaceToken;
  tokenOnChainId?: Maybe<Scalars['Int']>;
  tokenType?: Maybe<TokenType>;
  transactionHash?: Maybe<Scalars['String']>;
  transferTo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
  userId?: Maybe<Scalars['UUID1']>;
  walletId?: Maybe<Scalars['UUID1']>;
};

export enum TokenType {
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export enum TokensInRegistryColumnType {
  CreatedAt = 'createdAt',
  TokenId = 'tokenID',
  TokenName = 'tokenName'
}

export type TokensInRegistrySortInput = {
  column: TokensInRegistryColumnType;
  type: OrderType;
};

export type TransactionInput = {
  actionType?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Int']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  itemCategory?: InputMaybe<Scalars['String']>;
  paymentMethod: TransactionPaymentMethod;
};

export type TransactionPaymentMethod = {
  card: Card;
  type: Scalars['String'];
};

export enum TransactionStatus {
  Completed = 'Completed',
  Failed = 'Failed',
  Pending = 'Pending'
}

export enum TransactionType {
  DeployMultisig = 'DeployMultisig',
  TransferToken = 'TransferToken'
}

export enum TransferStatus {
  Canceled = 'Canceled',
  Failed = 'Failed',
  InProgress = 'InProgress',
  Queued = 'Queued',
  Success = 'Success'
}

export type UpdateMarketplaceClaimableSetInput = {
  endDate?: InputMaybe<Scalars['Time']>;
  startDate?: InputMaybe<Scalars['Time']>;
  totalAvailableUnits?: InputMaybe<Scalars['Int']>;
  totalUnits?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Time'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserApiKeyResponse = {
  __typename?: 'UserAPIKeyResponse';
  createdAt?: Maybe<Scalars['Time']>;
  id?: Maybe<Scalars['UUID1']>;
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type UserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  sub?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserInvitation = {
  __typename?: 'UserInvitation';
  email: Scalars['String'];
  id: Scalars['UUID'];
  status: Scalars['String'];
};

export type UserList = {
  __typename?: 'UserList';
  pagination: Pagination;
  users: Array<Maybe<UserOrganization>>;
};

export type UserOrgFilter = {
  orgId: Scalars['UUID'];
};

export type UserOrganization = {
  __typename?: 'UserOrganization';
  avatar?: Maybe<Scalars['String']>;
  bidAllowed: Scalars['Boolean'];
  externalUserId: Scalars['String'];
  id: Scalars['UUID'];
  isBlacklisted: Scalars['Boolean'];
  kycStatus: KycStatus;
  organization: Organization;
  organizationId: Scalars['UUID'];
  role: Scalars['String'];
  settings?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['UUID'];
  username?: Maybe<Scalars['String']>;
  w8Form: Scalars['Boolean'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type ValidateIpResponse = {
  __typename?: 'ValidateIPResponse';
  Success: Scalars['Boolean'];
  ipScreeningId: Scalars['UUID1'];
};

export type ValidatePaymentLimitData = {
  __typename?: 'ValidatePaymentLimitData';
  isLimitExceeded: Scalars['Boolean'];
  remainingTotal: Scalars['Int'];
  remainingTransaction: Scalars['Int'];
};

export type ValidatePaymentLimitOutput = {
  __typename?: 'ValidatePaymentLimitOutput';
  ach: ValidatePaymentLimitData;
  creditCard: ValidatePaymentLimitData;
  wire: ValidatePaymentLimitData;
};

export type Wallet = {
  __typename?: 'Wallet';
  address?: Maybe<Scalars['EthAddress']>;
  deployJobID: Scalars['UUID1'];
  deploymentTxHash?: Maybe<Scalars['String']>;
  gnosisSafeURL?: Maybe<Scalars['String']>;
  id: Scalars['UUID1'];
  isActive: Scalars['Boolean'];
  isExternal: Scalars['Boolean'];
  name: Scalars['String'];
  network?: Maybe<Network>;
  networkId?: Maybe<Scalars['UUID1']>;
  parentID: Scalars['UUID1'];
  parentType: Scalars['String'];
  tokens?: Maybe<Array<WalletToken>>;
};

export enum WalletParentType {
  Organization = 'organization',
  User = 'user'
}

export type WalletToken = {
  __typename?: 'WalletToken';
  artistName?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['String']>;
  contractAddress: Scalars['String'];
  contractName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  favouriteCount?: Maybe<Scalars['Int']>;
  /** Token ID in smart contract */
  id: Scalars['BigInt'];
  listedAt?: Maybe<Scalars['Time']>;
  metadata?: Maybe<Erc721Metadata>;
  mintedAt?: Maybe<Scalars['Time']>;
  network: Scalars['String'];
  nftTokenId?: Maybe<Scalars['UUID1']>;
  owner?: Maybe<Scalars['String']>;
  price: Array<Maybe<NftPrice>>;
  status: TokenStatus;
  timeLastUpdated?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
};

export enum WalletTxType {
  MojitoHotWallet = 'MojitoHotWallet',
  Multisig = 'Multisig'
}


export type WireBankAddressOutput = {
  __typename?: 'WireBankAddressOutput';
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  bankName: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  district?: InputMaybe<Scalars['String']>;
};

export type WireBeneficiary = {
  __typename?: 'WireBeneficiary';
  address1: Scalars['String'];
  address2: Scalars['String'];
  name: Scalars['String'];
};

export type WireBeneficiaryBank = {
  __typename?: 'WireBeneficiaryBank';
  accountNumber: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  name: Scalars['String'];
  postalCode: Scalars['String'];
  routingNumber: Scalars['String'];
  swiftCode: Scalars['String'];
};


export type WireBillingDetailsOutput = {
  __typename?: 'WireBillingDetailsOutput';
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  district: Scalars['String'];
  name: Scalars['String'];
  postalCode: Scalars['String'];
};

export type WireData = {
  iban?: InputMaybe<Scalars['String']>;
  accountNumber?: InputMaybe<Scalars['String']>;
  routingNumber?: InputMaybe<Scalars['String']>;
  bankAddress: WireBankAddressOutput;
  billingDetails: WireBillingDetailsOutput;
};

export type WireInstructions = {
  __typename?: 'WireInstructions';
  beneficiary: WireBeneficiary;
  beneficiaryBank: WireBeneficiaryBank;
  trackingRef: Scalars['String'];
};

export type WirePaymentDetails = {
  __typename?: 'WirePaymentDetails';
  WireInstructions?: Maybe<WireInstructions>;
};

export type WirePaymentMethodOutput = {
  __typename?: 'WirePaymentMethodOutput';
  bankAddress?: Maybe<WireBankAddressOutput>;
  billingDetails?: Maybe<WireBillingDetailsOutput>;
  description: Scalars['String'];
  id: Scalars['UUID1'];
  status: Scalars['String'];
  type: PaymentType;
};

export type ArtistResponse = {
  __typename?: 'artistResponse';
  data: Array<Maybe<Artist>>;
  totalCount: Scalars['Int'];
};

export enum CategoryColumnType {
  CreatedAt = 'createdAt',
  Name = 'name',
  Priority = 'priority'
}

export type CategoryResponse = {
  __typename?: 'categoryResponse';
  data?: Maybe<Array<Category>>;
  totalCount: Scalars['Int'];
};

export type CategorySortInput = {
  column?: InputMaybe<CategoryColumnType>;
  type?: InputMaybe<OrderType>;
};

export enum ColumnType {
  ArtistLocation = 'artistLocation',
  ArtistName = 'artistName',
  CreatedAt = 'createdAt',
  Priority = 'priority'
}

export enum OrderType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SortInput = {
  column: ColumnType;
  type: OrderType;
};

export type GetPaymentNotificationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentNotificationQuery = { __typename?: 'Query', getPaymentNotification: { __typename?: 'PaymentNotificationOutput', message: { __typename?: 'PaymentNotification3DSMessage', redirectURL?: string | null, error?: string | null } } };

export type CreatePaymentMutationVariables = Exact<{
  paymentMethodID: Scalars['UUID1'];
  invoiceID: Scalars['UUID1'];
  metadata?: InputMaybe<CreatePaymentMetadataInput>;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'PaymentOutput', id: any, invoiceID: any, processorPaymentID: string, status: PaymentStatus, userID: any, details?: { __typename?: 'CryptoPaymentDetails', hostedURL: string } | { __typename?: 'WirePaymentDetails', WireInstructions: { __typename?: 'WireInstructions', trackingRef: string } } | null } };

export type CollectionItemByIdQueryVariables = Exact<{
  id: Scalars['UUID1'];
}>;


export type CollectionItemByIdQuery = { __typename?: 'Query', collectionItemById?: { __typename?: 'MarketplaceCollectionItem', id: any, collectionId: any } | null };

export type CreateAuctionInvoiceMutationVariables = Exact<{
  orgID: Scalars['UUID1'];
  lotID: Scalars['UUID1'];
}>;


export type CreateAuctionInvoiceMutation = { __typename?: 'Mutation', createAuctionLotInvoice: { __typename?: 'InvoiceDetails', invoiceID: any, status: InvoiceStatus, items: Array<{ __typename?: 'ItemInvoiceDetail', units: number, unitPrice: number, taxes: number, totalPrice: number } | null> } };

export type ReserveBuyNowLotMutationVariables = Exact<{
  input: ReserveMarketplaceBuyNowLotInput;
}>;


export type ReserveBuyNowLotMutation = { __typename?: 'Mutation', reserveMarketplaceBuyNowLot: { __typename?: 'MarketplaceBuyNowOutput', invoice?: { __typename?: 'InvoiceDetails', invoiceID: any, status: InvoiceStatus, items: Array<{ __typename?: 'ItemInvoiceDetail', units: number, unitPrice: number, taxes: number, totalPrice: number, invoiceItemID: any } | null> } | null } };

export type ReleaseReservationBuyNowLotMutationVariables = Exact<{
  orgID: Scalars['UUID1'];
  invoiceID: Scalars['UUID1'];
}>;


export type ReleaseReservationBuyNowLotMutation = { __typename?: 'Mutation', releaseReservation: boolean };

export type GetInvoiceDetailsQueryVariables = Exact<{
  invoiceID: Scalars['UUID1'];
}>;


export type GetInvoiceDetailsQuery = { __typename?: 'Query', getInvoiceDetails: { __typename?: 'InvoiceDetails', items: Array<{ __typename?: 'ItemInvoiceDetail', collectionItemID: any, destinationAddress: string, units: number, unitPrice: number, taxes: number, totalPrice: number } | null> } };

export type ApplyDiscountCodeQueryVariables = Exact<{
  discountCode: Scalars['String'];
  invoiceItemID: Scalars['UUID1'];
}>;


export type ApplyDiscountCodeQuery = { __typename?: 'Query', applyDiscountCode: { __typename?: 'DiscountedInvoiceItem', discountedAmount: number, totalPrice: number, totalPriceAfterDiscount: number, invoiceItemID: any, discountCode: { __typename?: 'DiscountCode', id: any, discountCode: string, discountType: string, description?: string | null, value: number, organizationID: any } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'CurrentUser', id: any, user: { __typename?: 'User', id: any, username: string, name?: string | null, email?: string | null }, userOrgs: Array<{ __typename?: 'UserOrganization', organization: { __typename?: 'Organization', id: any, name: string } }>, wallets?: Array<{ __typename?: 'Wallet', id: any, name: string, address?: any | null }> | null } | null };

export type PaymentKeyQueryVariables = Exact<{
  orgID: Scalars['UUID1'];
}>;


export type PaymentKeyQuery = { __typename?: 'Query', getPaymentPublicKey: { __typename?: 'PaymentPublicKey', keyID: string, publicKey: string } };

export type GetPaymentMethodListQueryVariables = Exact<{
  orgID: Scalars['UUID1'];
}>;


export type GetPaymentMethodListQuery = { __typename?: 'Query', getPaymentMethodList: Array<{ __typename?: 'ACHPaymentMethodOutput', id: any, type: PaymentType, status: string, accountNumber: string, metadata?: { __typename?: 'ACHMetadataOutput', email: string, phoneNumber: string } | null, billingDetails?: { __typename?: 'ACHBillingDetailsOutput', name: string, city: string, country: string, address1: string, address2: string, district: string, postalCode: string } | null, bankAddress?: { __typename?: 'ACHBankAddressOutput', bankName: string } | null } | { __typename?: 'CreditCardPaymentMethodOutput', id: any, type: PaymentType, status: string, network: string, last4Digit: string, metadata?: { __typename?: 'CreditCardMetadataOutput', email: string, phoneNumber: string } | null, billingDetails?: { __typename?: 'CreditCardBillingDetailsOutput', name: string, city: string, country: string, address1: string, address2: string, district: string, postalCode: string } | null } | { __typename?: 'CryptoPaymentMethodOutput', id: any, type: PaymentType, status: string } | { __typename?: 'WirePaymentMethodOutput', id: any, type: PaymentType, status: string, description: string, bankAddress?: { __typename?: 'WireBankAddressOutput', bankName: string, address1: string, address2: string, country: string, district: string, city: string } | null, billingDetails?: { __typename?: 'WireBillingDetailsOutput', name: string, city: string, country: string, address1: string, address2: string, district: string, postalCode: string } | null }> };

export type CreatePaymentMethodMutationVariables = Exact<{
  orgID: Scalars['UUID1'];
  input: PaymentMethodCreateInput;
}>;


export type CreatePaymentMethodMutation = { __typename?: 'Mutation', createPaymentMethod: { __typename?: 'ACHPaymentMethodOutput', id: any, status: string } | { __typename?: 'CreditCardPaymentMethodOutput', id: any, status: string } | { __typename?: 'CryptoPaymentMethodOutput', id: any, status: string } | { __typename?: 'WirePaymentMethodOutput', id: any, status: string } };

export type DeletePaymentMethodMutationVariables = Exact<{
  paymentMethodID: Scalars['UUID1'];
  orgID: Scalars['UUID1'];
}>;


export type DeletePaymentMethodMutation = { __typename?: 'Mutation', deletePaymentMethod: boolean };

export type PreparePaymentMethodQueryVariables = Exact<{
  orgID: Scalars['UUID1'];
}>;


export type PreparePaymentMethodQuery = { __typename?: 'Query', preparePaymentMethod?: { __typename?: 'ACHPaymentMethodPrepareStatementOutput', linkToken: string } | null };

export type GetPaymentMethodStatusQueryVariables = Exact<{
  paymentMethodID: Scalars['UUID1'];
}>;


export type GetPaymentMethodStatusQuery = { __typename?: 'Query', getPaymentMethod: { __typename?: 'ACHPaymentMethodOutput', id: any, status: string } | { __typename?: 'CreditCardPaymentMethodOutput', id: any, status: string } | { __typename?: 'CryptoPaymentMethodOutput', id: any, status: string } | { __typename?: 'WirePaymentMethodOutput', id: any, status: string } };

export type ValidatePaymentLimitQueryVariables = Exact<{
  collectionId: Scalars['UUID1'];
  itemsCount: Scalars['Int'];
}>;


export type ValidatePaymentLimitQuery = { __typename?: 'Query', validatePaymentLimit: { __typename?: 'ValidatePaymentLimitOutput', ach: { __typename?: 'ValidatePaymentLimitData', remainingTotal: number, isLimitExceeded: boolean, remainingTransaction: number }, wire: { __typename?: 'ValidatePaymentLimitData', remainingTotal: number, isLimitExceeded: boolean, remainingTransaction: number }, creditCard: { __typename?: 'ValidatePaymentLimitData', remainingTotal: number, isLimitExceeded: boolean, remainingTransaction: number } } };

export type AddressScreeningMutationVariables = Exact<{
  orgId: Scalars['UUID1'];
  input: AddressScreeningInput;
}>;


export type AddressScreeningMutation = { __typename?: 'Mutation', addressScreening: RiskRating };

export type CardScreeningQueryVariables = Exact<{
  orgId: Scalars['UUID1'];
  input: CardScreeningInput;
}>;


export type CardScreeningQuery = { __typename?: 'Query', cardScreening: { __typename?: 'CardResponse', level?: string | null, status?: string | null } };

export type GetTaxQuoteQueryVariables = Exact<{
  input: TaxQuoteInput;
}>;


export type GetTaxQuoteQuery = { __typename?: 'Query', getTaxQuote: { __typename?: 'TaxQuoteOutput', taxablePrice: number, totalTaxAmount: number, totalTaxedPrice: number, verifiedAddress: { __typename?: 'TaxQuoteBillingAddressOutput', street1: string, city: string, state: string, postalCode: string, country: string } } };


export const GetPaymentNotificationDocument = gql`
    query GetPaymentNotification {
  getPaymentNotification {
    message {
      ... on PaymentNotification3DSMessage {
        redirectURL
        error
      }
    }
  }
}
    `;

/**
 * __useGetPaymentNotificationQuery__
 *
 * To run a query within a React component, call `useGetPaymentNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentNotificationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentNotificationQuery(baseOptions?: Apollo.QueryHookOptions<GetPaymentNotificationQuery, GetPaymentNotificationQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPaymentNotificationQuery, GetPaymentNotificationQueryVariables>(GetPaymentNotificationDocument, options);
}
export function useGetPaymentNotificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentNotificationQuery, GetPaymentNotificationQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPaymentNotificationQuery, GetPaymentNotificationQueryVariables>(GetPaymentNotificationDocument, options);
}
export type GetPaymentNotificationQueryHookResult = ReturnType<typeof useGetPaymentNotificationQuery>;
export type GetPaymentNotificationLazyQueryHookResult = ReturnType<typeof useGetPaymentNotificationLazyQuery>;
export type GetPaymentNotificationQueryResult = Apollo.QueryResult<GetPaymentNotificationQuery, GetPaymentNotificationQueryVariables>;
export const CreatePaymentDocument = gql`
    mutation CreatePayment($paymentMethodID: UUID1!, $invoiceID: UUID1!, $metadata: CreatePaymentMetadataInput) {
  createPayment(
    paymentMethodID: $paymentMethodID
    invoiceID: $invoiceID
    metadata: $metadata
  ) {
    id
    invoiceID
    processorPaymentID
    status
    userID
    details {
      ... on CryptoPaymentDetails {
        hostedURL
      }
      ...on  WirePaymentDetails{
        WireInstructions{
           trackingRef
          beneficiary{
            name
            address1
            address2
          }
          beneficiaryBank{
             name
            swiftCode 
            routingNumber
            accountNumber
            address
            city
            postalCode
            country
          }
        }
      }
    }
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      paymentMethodID: // value for 'paymentMethodID'
 *      invoiceID: // value for 'invoiceID'
 *      metadata: // value for 'metadata'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
}
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CollectionItemByIdDocument = gql`
    query CollectionItemById($id: UUID1!) {
  collectionItemById(id: $id) {
    id
    collectionId
  }
}
    `;

/**
 * __useCollectionItemByIdQuery__
 *
 * To run a query within a React component, call `useCollectionItemByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionItemByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionItemByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionItemByIdQuery(baseOptions: Apollo.QueryHookOptions<CollectionItemByIdQuery, CollectionItemByIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CollectionItemByIdQuery, CollectionItemByIdQueryVariables>(CollectionItemByIdDocument, options);
}
export function useCollectionItemByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionItemByIdQuery, CollectionItemByIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CollectionItemByIdQuery, CollectionItemByIdQueryVariables>(CollectionItemByIdDocument, options);
}
export type CollectionItemByIdQueryHookResult = ReturnType<typeof useCollectionItemByIdQuery>;
export type CollectionItemByIdLazyQueryHookResult = ReturnType<typeof useCollectionItemByIdLazyQuery>;
export type CollectionItemByIdQueryResult = Apollo.QueryResult<CollectionItemByIdQuery, CollectionItemByIdQueryVariables>;
export const CreateAuctionInvoiceDocument = gql`
    mutation CreateAuctionInvoice($orgID: UUID1!, $lotID: UUID1!) {
  createAuctionLotInvoice(orgID: $orgID, lotID: $lotID) {
    invoiceID
    status
    items {
      units
      unitPrice
      taxes
      totalPrice
    }
  }
}
    `;
export type CreateAuctionInvoiceMutationFn = Apollo.MutationFunction<CreateAuctionInvoiceMutation, CreateAuctionInvoiceMutationVariables>;

/**
 * __useCreateAuctionInvoiceMutation__
 *
 * To run a mutation, you first call `useCreateAuctionInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuctionInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuctionInvoiceMutation, { data, loading, error }] = useCreateAuctionInvoiceMutation({
 *   variables: {
 *      orgID: // value for 'orgID'
 *      lotID: // value for 'lotID'
 *   },
 * });
 */
export function useCreateAuctionInvoiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuctionInvoiceMutation, CreateAuctionInvoiceMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateAuctionInvoiceMutation, CreateAuctionInvoiceMutationVariables>(CreateAuctionInvoiceDocument, options);
}
export type CreateAuctionInvoiceMutationHookResult = ReturnType<typeof useCreateAuctionInvoiceMutation>;
export type CreateAuctionInvoiceMutationResult = Apollo.MutationResult<CreateAuctionInvoiceMutation>;
export type CreateAuctionInvoiceMutationOptions = Apollo.BaseMutationOptions<CreateAuctionInvoiceMutation, CreateAuctionInvoiceMutationVariables>;
export const ReserveBuyNowLotDocument = gql`
    mutation ReserveBuyNowLot($input: ReserveMarketplaceBuyNowLotInput!) {
  reserveMarketplaceBuyNowLot(input: $input) {
    invoice {
      invoiceID
      status
      items {
        units
        unitPrice
        taxes
        totalPrice
        invoiceItemID
      }
    }
  }
}
    `;
export type ReserveBuyNowLotMutationFn = Apollo.MutationFunction<ReserveBuyNowLotMutation, ReserveBuyNowLotMutationVariables>;

/**
 * __useReserveBuyNowLotMutation__
 *
 * To run a mutation, you first call `useReserveBuyNowLotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReserveBuyNowLotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reserveBuyNowLotMutation, { data, loading, error }] = useReserveBuyNowLotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReserveBuyNowLotMutation(baseOptions?: Apollo.MutationHookOptions<ReserveBuyNowLotMutation, ReserveBuyNowLotMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ReserveBuyNowLotMutation, ReserveBuyNowLotMutationVariables>(ReserveBuyNowLotDocument, options);
}
export type ReserveBuyNowLotMutationHookResult = ReturnType<typeof useReserveBuyNowLotMutation>;
export type ReserveBuyNowLotMutationResult = Apollo.MutationResult<ReserveBuyNowLotMutation>;
export type ReserveBuyNowLotMutationOptions = Apollo.BaseMutationOptions<ReserveBuyNowLotMutation, ReserveBuyNowLotMutationVariables>;
export const ReleaseReservationBuyNowLotDocument = gql`
    mutation ReleaseReservationBuyNowLot($orgID: UUID1!, $invoiceID: UUID1!) {
  releaseReservation(orgID: $orgID, invoiceID: $invoiceID)
}
    `;
export type ReleaseReservationBuyNowLotMutationFn = Apollo.MutationFunction<ReleaseReservationBuyNowLotMutation, ReleaseReservationBuyNowLotMutationVariables>;

/**
 * __useReleaseReservationBuyNowLotMutation__
 *
 * To run a mutation, you first call `useReleaseReservationBuyNowLotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReleaseReservationBuyNowLotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [releaseReservationBuyNowLotMutation, { data, loading, error }] = useReleaseReservationBuyNowLotMutation({
 *   variables: {
 *      orgID: // value for 'orgID'
 *      invoiceID: // value for 'invoiceID'
 *   },
 * });
 */
export function useReleaseReservationBuyNowLotMutation(baseOptions?: Apollo.MutationHookOptions<ReleaseReservationBuyNowLotMutation, ReleaseReservationBuyNowLotMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ReleaseReservationBuyNowLotMutation, ReleaseReservationBuyNowLotMutationVariables>(ReleaseReservationBuyNowLotDocument, options);
}
export type ReleaseReservationBuyNowLotMutationHookResult = ReturnType<typeof useReleaseReservationBuyNowLotMutation>;
export type ReleaseReservationBuyNowLotMutationResult = Apollo.MutationResult<ReleaseReservationBuyNowLotMutation>;
export type ReleaseReservationBuyNowLotMutationOptions = Apollo.BaseMutationOptions<ReleaseReservationBuyNowLotMutation, ReleaseReservationBuyNowLotMutationVariables>;
export const GetInvoiceDetailsDocument = gql`
    query GetInvoiceDetails($invoiceID: UUID1!) {
  getInvoiceDetails(invoiceID: $invoiceID) {
    items {
      collectionItemID
      destinationAddress
      units
      unitPrice
      taxes
      totalPrice
    }
  }
}
    `;

/**
 * __useGetInvoiceDetailsQuery__
 *
 * To run a query within a React component, call `useGetInvoiceDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvoiceDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvoiceDetailsQuery({
 *   variables: {
 *      invoiceID: // value for 'invoiceID'
 *   },
 * });
 */
export function useGetInvoiceDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetInvoiceDetailsQuery, GetInvoiceDetailsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetInvoiceDetailsQuery, GetInvoiceDetailsQueryVariables>(GetInvoiceDetailsDocument, options);
}
export function useGetInvoiceDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvoiceDetailsQuery, GetInvoiceDetailsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetInvoiceDetailsQuery, GetInvoiceDetailsQueryVariables>(GetInvoiceDetailsDocument, options);
}
export type GetInvoiceDetailsQueryHookResult = ReturnType<typeof useGetInvoiceDetailsQuery>;
export type GetInvoiceDetailsLazyQueryHookResult = ReturnType<typeof useGetInvoiceDetailsLazyQuery>;
export type GetInvoiceDetailsQueryResult = Apollo.QueryResult<GetInvoiceDetailsQuery, GetInvoiceDetailsQueryVariables>;
export const ApplyDiscountCodeDocument = gql`
    query ApplyDiscountCode($discountCode: String!, $invoiceItemID: UUID1!) {
  applyDiscountCode(discountCode: $discountCode, invoiceItemID: $invoiceItemID) {
    discountedAmount
    totalPrice
    totalPriceAfterDiscount
    invoiceItemID
    discountCode {
      id
      discountCode
      discountType
      description
      value
      organizationID
    }
  }
}
    `;

/**
 * __useApplyDiscountCodeQuery__
 *
 * To run a query within a React component, call `useApplyDiscountCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplyDiscountCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplyDiscountCodeQuery({
 *   variables: {
 *      discountCode: // value for 'discountCode'
 *      invoiceItemID: // value for 'invoiceItemID'
 *   },
 * });
 */
export function useApplyDiscountCodeQuery(baseOptions: Apollo.QueryHookOptions<ApplyDiscountCodeQuery, ApplyDiscountCodeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ApplyDiscountCodeQuery, ApplyDiscountCodeQueryVariables>(ApplyDiscountCodeDocument, options);
}
export function useApplyDiscountCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApplyDiscountCodeQuery, ApplyDiscountCodeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ApplyDiscountCodeQuery, ApplyDiscountCodeQueryVariables>(ApplyDiscountCodeDocument, options);
}
export type ApplyDiscountCodeQueryHookResult = ReturnType<typeof useApplyDiscountCodeQuery>;
export type ApplyDiscountCodeLazyQueryHookResult = ReturnType<typeof useApplyDiscountCodeLazyQuery>;
export type ApplyDiscountCodeQueryResult = Apollo.QueryResult<ApplyDiscountCodeQuery, ApplyDiscountCodeQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    user {
      id
      username
      name
      email
    }
    userOrgs {
      organization {
        id
        name
      }
    }
    wallets {
      id
      name
      address
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PaymentKeyDocument = gql`
    query PaymentKey($orgID: UUID1!) {
  getPaymentPublicKey(orgID: $orgID) {
    keyID
    publicKey
  }
}
    `;

/**
 * __usePaymentKeyQuery__
 *
 * To run a query within a React component, call `usePaymentKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentKeyQuery({
 *   variables: {
 *      orgID: // value for 'orgID'
 *   },
 * });
 */
export function usePaymentKeyQuery(baseOptions: Apollo.QueryHookOptions<PaymentKeyQuery, PaymentKeyQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PaymentKeyQuery, PaymentKeyQueryVariables>(PaymentKeyDocument, options);
}
export function usePaymentKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentKeyQuery, PaymentKeyQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PaymentKeyQuery, PaymentKeyQueryVariables>(PaymentKeyDocument, options);
}
export type PaymentKeyQueryHookResult = ReturnType<typeof usePaymentKeyQuery>;
export type PaymentKeyLazyQueryHookResult = ReturnType<typeof usePaymentKeyLazyQuery>;
export type PaymentKeyQueryResult = Apollo.QueryResult<PaymentKeyQuery, PaymentKeyQueryVariables>;
export const GetPaymentMethodListDocument = gql`
    query GetPaymentMethodList($orgID: UUID1!) {
  getPaymentMethodList(orgID: $orgID) {
    ... on ACHPaymentMethodOutput {
      id
      type
      status
      accountNumber
      metadata {
        email
        phoneNumber
      }
      billingDetails {
        name
        city
        country
        address1
        address2
        district
        postalCode
      }
      bankAddress {
        bankName
      }
    }
    ... on CreditCardPaymentMethodOutput {
      id
      type
      status
      network
      last4Digit
      metadata {
        email
        phoneNumber
      }
      billingDetails {
        name
        city
        country
        address1
        address2
        district
        postalCode
      }
    }
    ... on CryptoPaymentMethodOutput {
      id
      type
      status
    }
    ... on WirePaymentMethodOutput {
      id
      type
      status
      description
      bankAddress {
        bankName
        address1
        address2
        country
        district
        city
      }
      billingDetails {
        name
        city
        country
        address1
        address2
        district
        postalCode
      }
    }
  }
}
    `;

/**
 * __useGetPaymentMethodListQuery__
 *
 * To run a query within a React component, call `useGetPaymentMethodListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentMethodListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentMethodListQuery({
 *   variables: {
 *      orgID: // value for 'orgID'
 *   },
 * });
 */
export function useGetPaymentMethodListQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentMethodListQuery, GetPaymentMethodListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPaymentMethodListQuery, GetPaymentMethodListQueryVariables>(GetPaymentMethodListDocument, options);
}
export function useGetPaymentMethodListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentMethodListQuery, GetPaymentMethodListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPaymentMethodListQuery, GetPaymentMethodListQueryVariables>(GetPaymentMethodListDocument, options);
}
export type GetPaymentMethodListQueryHookResult = ReturnType<typeof useGetPaymentMethodListQuery>;
export type GetPaymentMethodListLazyQueryHookResult = ReturnType<typeof useGetPaymentMethodListLazyQuery>;
export type GetPaymentMethodListQueryResult = Apollo.QueryResult<GetPaymentMethodListQuery, GetPaymentMethodListQueryVariables>;
export const CreatePaymentMethodDocument = gql`
    mutation CreatePaymentMethod($orgID: UUID1!, $input: PaymentMethodCreateInput!) {
  createPaymentMethod(orgID: $orgID, input: $input) {
    ... on ACHPaymentMethodOutput {
      id
      status
    }
    ... on CreditCardPaymentMethodOutput {
      id
      status
    }
    ... on WirePaymentMethodOutput {
      id
      status
    }
    ... on CryptoPaymentMethodOutput {
      id
      status
    }
  }
}
    `;
export type CreatePaymentMethodMutationFn = Apollo.MutationFunction<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;

/**
 * __useCreatePaymentMethodMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMethodMutation, { data, loading, error }] = useCreatePaymentMethodMutation({
 *   variables: {
 *      orgID: // value for 'orgID'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>(CreatePaymentMethodDocument, options);
}
export type CreatePaymentMethodMutationHookResult = ReturnType<typeof useCreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationResult = Apollo.MutationResult<CreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;
export const DeletePaymentMethodDocument = gql`
    mutation DeletePaymentMethod($paymentMethodID: UUID1!, $orgID: UUID1!) {
  deletePaymentMethod(paymentMethodID: $paymentMethodID, orgID: $orgID)
}
    `;
export type DeletePaymentMethodMutationFn = Apollo.MutationFunction<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>;

/**
 * __useDeletePaymentMethodMutation__
 *
 * To run a mutation, you first call `useDeletePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentMethodMutation, { data, loading, error }] = useDeletePaymentMethodMutation({
 *   variables: {
 *      paymentMethodID: // value for 'paymentMethodID'
 *      orgID: // value for 'orgID'
 *   },
 * });
 */
export function useDeletePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>(DeletePaymentMethodDocument, options);
}
export type DeletePaymentMethodMutationHookResult = ReturnType<typeof useDeletePaymentMethodMutation>;
export type DeletePaymentMethodMutationResult = Apollo.MutationResult<DeletePaymentMethodMutation>;
export type DeletePaymentMethodMutationOptions = Apollo.BaseMutationOptions<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>;
export const PreparePaymentMethodDocument = gql`
    query PreparePaymentMethod($orgID: UUID1!) {
  preparePaymentMethod(paymentMethodType: ACH, orgID: $orgID) {
    ... on ACHPaymentMethodPrepareStatementOutput {
      linkToken
    }
  }
}
    `;

/**
 * __usePreparePaymentMethodQuery__
 *
 * To run a query within a React component, call `usePreparePaymentMethodQuery` and pass it any options that fit your needs.
 * When your component renders, `usePreparePaymentMethodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreparePaymentMethodQuery({
 *   variables: {
 *      orgID: // value for 'orgID'
 *   },
 * });
 */
export function usePreparePaymentMethodQuery(baseOptions: Apollo.QueryHookOptions<PreparePaymentMethodQuery, PreparePaymentMethodQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PreparePaymentMethodQuery, PreparePaymentMethodQueryVariables>(PreparePaymentMethodDocument, options);
}
export function usePreparePaymentMethodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PreparePaymentMethodQuery, PreparePaymentMethodQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PreparePaymentMethodQuery, PreparePaymentMethodQueryVariables>(PreparePaymentMethodDocument, options);
}
export type PreparePaymentMethodQueryHookResult = ReturnType<typeof usePreparePaymentMethodQuery>;
export type PreparePaymentMethodLazyQueryHookResult = ReturnType<typeof usePreparePaymentMethodLazyQuery>;
export type PreparePaymentMethodQueryResult = Apollo.QueryResult<PreparePaymentMethodQuery, PreparePaymentMethodQueryVariables>;
export const GetPaymentMethodStatusDocument = gql`
    query GetPaymentMethodStatus($paymentMethodID: UUID1!) {
  getPaymentMethod(paymentMethodID: $paymentMethodID) {
    ... on ACHPaymentMethodOutput {
      id
      status
    }
    ... on CreditCardPaymentMethodOutput {
      id
      status
    }
    ... on WirePaymentMethodOutput {
      id
      status
    }
    ... on CryptoPaymentMethodOutput {
      id
      status
    }
  }
}
    `;

/**
 * __useGetPaymentMethodStatusQuery__
 *
 * To run a query within a React component, call `useGetPaymentMethodStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentMethodStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentMethodStatusQuery({
 *   variables: {
 *      paymentMethodID: // value for 'paymentMethodID'
 *   },
 * });
 */
export function useGetPaymentMethodStatusQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentMethodStatusQuery, GetPaymentMethodStatusQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPaymentMethodStatusQuery, GetPaymentMethodStatusQueryVariables>(GetPaymentMethodStatusDocument, options);
}
export function useGetPaymentMethodStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentMethodStatusQuery, GetPaymentMethodStatusQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPaymentMethodStatusQuery, GetPaymentMethodStatusQueryVariables>(GetPaymentMethodStatusDocument, options);
}
export type GetPaymentMethodStatusQueryHookResult = ReturnType<typeof useGetPaymentMethodStatusQuery>;
export type GetPaymentMethodStatusLazyQueryHookResult = ReturnType<typeof useGetPaymentMethodStatusLazyQuery>;
export type GetPaymentMethodStatusQueryResult = Apollo.QueryResult<GetPaymentMethodStatusQuery, GetPaymentMethodStatusQueryVariables>;
export const ValidatePaymentLimitDocument = gql`
    query ValidatePaymentLimit($collectionId: UUID1!, $itemsCount: Int!) {
  validatePaymentLimit(collectionID: $collectionId, itemsCount: $itemsCount) {
    ach {
      remainingTotal
      isLimitExceeded
      remainingTransaction
    }
    wire {
      remainingTotal
      isLimitExceeded
      remainingTransaction
    }
    creditCard {
      remainingTotal
      isLimitExceeded
      remainingTransaction
    }
  }
}
    `;

/**
 * __useValidatePaymentLimitQuery__
 *
 * To run a query within a React component, call `useValidatePaymentLimitQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatePaymentLimitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatePaymentLimitQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      itemsCount: // value for 'itemsCount'
 *   },
 * });
 */
export function useValidatePaymentLimitQuery(baseOptions: Apollo.QueryHookOptions<ValidatePaymentLimitQuery, ValidatePaymentLimitQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ValidatePaymentLimitQuery, ValidatePaymentLimitQueryVariables>(ValidatePaymentLimitDocument, options);
}
export function useValidatePaymentLimitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatePaymentLimitQuery, ValidatePaymentLimitQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ValidatePaymentLimitQuery, ValidatePaymentLimitQueryVariables>(ValidatePaymentLimitDocument, options);
}
export type ValidatePaymentLimitQueryHookResult = ReturnType<typeof useValidatePaymentLimitQuery>;
export type ValidatePaymentLimitLazyQueryHookResult = ReturnType<typeof useValidatePaymentLimitLazyQuery>;
export type ValidatePaymentLimitQueryResult = Apollo.QueryResult<ValidatePaymentLimitQuery, ValidatePaymentLimitQueryVariables>;
export const AddressScreeningDocument = gql`
    mutation AddressScreening($orgId: UUID1!, $input: AddressScreeningInput!) {
  addressScreening(orgID: $orgId, input: $input)
}
    `;
export type AddressScreeningMutationFn = Apollo.MutationFunction<AddressScreeningMutation, AddressScreeningMutationVariables>;

/**
 * __useAddressScreeningMutation__
 *
 * To run a mutation, you first call `useAddressScreeningMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressScreeningMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressScreeningMutation, { data, loading, error }] = useAddressScreeningMutation({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddressScreeningMutation(baseOptions?: Apollo.MutationHookOptions<AddressScreeningMutation, AddressScreeningMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddressScreeningMutation, AddressScreeningMutationVariables>(AddressScreeningDocument, options);
}
export type AddressScreeningMutationHookResult = ReturnType<typeof useAddressScreeningMutation>;
export type AddressScreeningMutationResult = Apollo.MutationResult<AddressScreeningMutation>;
export type AddressScreeningMutationOptions = Apollo.BaseMutationOptions<AddressScreeningMutation, AddressScreeningMutationVariables>;
export const CardScreeningDocument = gql`
    query CardScreening($orgId: UUID1!, $input: CardScreeningInput!) {
  cardScreening(orgID: $orgId, input: $input) {
    level
    status
  }
}
    `;

/**
 * __useCardScreeningQuery__
 *
 * To run a query within a React component, call `useCardScreeningQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardScreeningQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardScreeningQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCardScreeningQuery(baseOptions: Apollo.QueryHookOptions<CardScreeningQuery, CardScreeningQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CardScreeningQuery, CardScreeningQueryVariables>(CardScreeningDocument, options);
}
export function useCardScreeningLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardScreeningQuery, CardScreeningQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CardScreeningQuery, CardScreeningQueryVariables>(CardScreeningDocument, options);
}
export type CardScreeningQueryHookResult = ReturnType<typeof useCardScreeningQuery>;
export type CardScreeningLazyQueryHookResult = ReturnType<typeof useCardScreeningLazyQuery>;
export type CardScreeningQueryResult = Apollo.QueryResult<CardScreeningQuery, CardScreeningQueryVariables>;
export const GetTaxQuoteDocument = gql`
    query GetTaxQuote($input: TaxQuoteInput!) {
  getTaxQuote(input: $input) {
    verifiedAddress {
      street1
      city
      state
      postalCode
      country
    }
    taxablePrice
    totalTaxAmount
    totalTaxedPrice
  }
}
    `;

/**
 * __useGetTaxQuoteQuery__
 *
 * To run a query within a React component, call `useGetTaxQuoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaxQuoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaxQuoteQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTaxQuoteQuery(baseOptions: Apollo.QueryHookOptions<GetTaxQuoteQuery, GetTaxQuoteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTaxQuoteQuery, GetTaxQuoteQueryVariables>(GetTaxQuoteDocument, options);
}
export function useGetTaxQuoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaxQuoteQuery, GetTaxQuoteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTaxQuoteQuery, GetTaxQuoteQueryVariables>(GetTaxQuoteDocument, options);
}
export type GetTaxQuoteQueryHookResult = ReturnType<typeof useGetTaxQuoteQuery>;
export type GetTaxQuoteLazyQueryHookResult = ReturnType<typeof useGetTaxQuoteLazyQuery>;
export type GetTaxQuoteQueryResult = Apollo.QueryResult<GetTaxQuoteQuery, GetTaxQuoteQueryVariables>;