import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import 'react';
import '../../node_modules/graphql/version.mjs.js';
import '../../node_modules/graphql/language/ast.mjs.js';
import '../../node_modules/graphql/language/directiveLocation.mjs.js';
import '../../node_modules/graphql/language/kinds.mjs.js';
import '../../node_modules/graphql/language/tokenKind.mjs.js';
import '../../node_modules/graphql/jsutils/instanceOf.mjs.js';
import '../../node_modules/graphql/language/visitor.mjs.js';
import '../../node_modules/graphql/type/directives.mjs.js';
import '../../node_modules/graphql/type/introspection.mjs.js';
import '../../node_modules/graphql/validation/specifiedRules.mjs.js';
import '../../node_modules/graphql/type/scalars.mjs.js';
import '../../node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs.js';
import '../../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs.js';
import '../../node_modules/graphql/utilities/extendSchema.mjs.js';
import '../../node_modules/graphql/utilities/findBreakingChanges.mjs.js';
import '../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../node_modules/@apollo/client/utilities/common/canUse.js';
import { useLazyQuery } from '../../node_modules/@apollo/client/react/hooks/useLazyQuery.js';
import { useMutation } from '../../node_modules/@apollo/client/react/hooks/useMutation.js';
import { useQuery } from '../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../node_modules/@apollo/client/react/parser/index.js';
import { gql } from '../../node_modules/graphql-tag/lib/index.js';

const defaultOptions = {};
var AuctionBidOrder;
(function (AuctionBidOrder) {
    AuctionBidOrder["Asc"] = "ASC";
    AuctionBidOrder["Desc"] = "DESC";
})(AuctionBidOrder || (AuctionBidOrder = {}));
var AuctionLotStatus;
(function (AuctionLotStatus) {
    AuctionLotStatus["Active"] = "Active";
    AuctionLotStatus["Completed"] = "Completed";
    AuctionLotStatus["Hidden"] = "Hidden";
    AuctionLotStatus["Preview"] = "Preview";
})(AuctionLotStatus || (AuctionLotStatus = {}));
var CollectionType;
(function (CollectionType) {
    CollectionType["Auction"] = "Auction";
    CollectionType["Tk2"] = "TK2";
})(CollectionType || (CollectionType = {}));
var ContractType;
(function (ContractType) {
    ContractType["Erc721Creator"] = "ERC721Creator";
    ContractType["Erc1155Creator"] = "ERC1155Creator";
})(ContractType || (ContractType = {}));
var DeliveryMethod;
(function (DeliveryMethod) {
    DeliveryMethod["Erc721Provenance"] = "ERC721Provenance";
    DeliveryMethod["Erc721Transfer"] = "ERC721Transfer";
    DeliveryMethod["Erc721TransferByRange"] = "ERC721TransferByRange";
    DeliveryMethod["Erc1155OpenEdition"] = "ERC1155OpenEdition";
    DeliveryMethod["Erc1155Transfer"] = "ERC1155Transfer";
    DeliveryMethod["NoOp"] = "NoOp";
})(DeliveryMethod || (DeliveryMethod = {}));
var ExtensionType;
(function (ExtensionType) {
    ExtensionType["ProvenanceExtension"] = "ProvenanceExtension";
    ExtensionType["RedeemableExtension"] = "RedeemableExtension";
})(ExtensionType || (ExtensionType = {}));
var FilteringType;
(function (FilteringType) {
    FilteringType["AllowList"] = "AllowList";
})(FilteringType || (FilteringType = {}));
var IdentifierType;
(function (IdentifierType) {
    IdentifierType["ExternalUserId"] = "ExternalUserID";
    IdentifierType["UserId"] = "UserID";
})(IdentifierType || (IdentifierType = {}));
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["AwaitingUserPayment"] = "AwaitingUserPayment";
    InvoiceStatus["Canceled"] = "Canceled";
    InvoiceStatus["Delivered"] = "Delivered";
    InvoiceStatus["Draft"] = "Draft";
    InvoiceStatus["Expired"] = "Expired";
    InvoiceStatus["Failed"] = "Failed";
    InvoiceStatus["Paid"] = "Paid";
    InvoiceStatus["Pending"] = "Pending";
})(InvoiceStatus || (InvoiceStatus = {}));
var KycStatus;
(function (KycStatus) {
    KycStatus["Clear"] = "Clear";
    KycStatus["Failed1"] = "Failed1";
    KycStatus["Failed2"] = "Failed2";
    KycStatus["Level1"] = "Level1";
    KycStatus["Level2"] = "Level2";
    KycStatus["None"] = "None";
    KycStatus["Pending"] = "Pending";
})(KycStatus || (KycStatus = {}));
var MarketCollectionStatus;
(function (MarketCollectionStatus) {
    MarketCollectionStatus["Active"] = "Active";
    MarketCollectionStatus["Archived"] = "Archived";
    MarketCollectionStatus["Inactive"] = "Inactive";
})(MarketCollectionStatus || (MarketCollectionStatus = {}));
var MarketplaceCollectionItemStatus;
(function (MarketplaceCollectionItemStatus) {
    MarketplaceCollectionItemStatus["Active"] = "Active";
    MarketplaceCollectionItemStatus["Completed"] = "Completed";
    MarketplaceCollectionItemStatus["Hidden"] = "Hidden";
    MarketplaceCollectionItemStatus["Preview"] = "Preview";
})(MarketplaceCollectionItemStatus || (MarketplaceCollectionItemStatus = {}));
var MarketplaceSaleType;
(function (MarketplaceSaleType) {
    MarketplaceSaleType["Auction"] = "Auction";
    MarketplaceSaleType["BuyNow"] = "BuyNow";
    MarketplaceSaleType["Claimable"] = "Claimable";
})(MarketplaceSaleType || (MarketplaceSaleType = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["ActionRequired"] = "action_required";
    PaymentStatus["Confirmed"] = "confirmed";
    PaymentStatus["Failed"] = "failed";
    PaymentStatus["Paid"] = "paid";
    PaymentStatus["Pending"] = "pending";
})(PaymentStatus || (PaymentStatus = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType["Ach"] = "ACH";
    PaymentType["CreditCard"] = "CreditCard";
    PaymentType["Crypto"] = "Crypto";
    PaymentType["Wire"] = "Wire";
})(PaymentType || (PaymentType = {}));
var RiskRating;
(function (RiskRating) {
    RiskRating["High"] = "High";
    RiskRating["Low"] = "Low";
})(RiskRating || (RiskRating = {}));
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
})(Role || (Role = {}));
var TaxProvider;
(function (TaxProvider) {
    TaxProvider["NoOp"] = "NoOp";
    TaxProvider["TaxJar"] = "TaxJar";
    TaxProvider["Vertex"] = "Vertex";
})(TaxProvider || (TaxProvider = {}));
var TokenType;
(function (TokenType) {
    TokenType["Erc721"] = "ERC721";
    TokenType["Erc1155"] = "ERC1155";
})(TokenType || (TokenType = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Completed"] = "Completed";
    TransactionStatus["Failed"] = "Failed";
    TransactionStatus["Pending"] = "Pending";
})(TransactionStatus || (TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["DeployMultisig"] = "DeployMultisig";
    TransactionType["TransferToken"] = "TransferToken";
})(TransactionType || (TransactionType = {}));
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Canceled"] = "Canceled";
    TransferStatus["Failed"] = "Failed";
    TransferStatus["InProgress"] = "InProgress";
    TransferStatus["Queued"] = "Queued";
    TransferStatus["Success"] = "Success";
})(TransferStatus || (TransferStatus = {}));
var WalletParentType;
(function (WalletParentType) {
    WalletParentType["Organization"] = "organization";
    WalletParentType["User"] = "user";
})(WalletParentType || (WalletParentType = {}));
var WalletTxType;
(function (WalletTxType) {
    WalletTxType["MojitoHotWallet"] = "MojitoHotWallet";
    WalletTxType["Multisig"] = "Multisig";
})(WalletTxType || (WalletTxType = {}));
const GetPaymentNotificationDocument = gql `
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
function useGetPaymentNotificationQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useQuery(GetPaymentNotificationDocument, options);
}
const CreatePaymentDocument = gql `
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
    }
  }
}
    `;
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
function useCreatePaymentMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useMutation(CreatePaymentDocument, options);
}
const CollectionItemByIdDocument = gql `
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
function useCollectionItemByIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useQuery(CollectionItemByIdDocument, options);
}
const CreateAuctionInvoiceDocument = gql `
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
function useCreateAuctionInvoiceMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useMutation(CreateAuctionInvoiceDocument, options);
}
const ReserveBuyNowLotDocument = gql `
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
function useReserveBuyNowLotMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useMutation(ReserveBuyNowLotDocument, options);
}
const ReleaseReservationBuyNowLotDocument = gql `
    mutation ReleaseReservationBuyNowLot($orgID: UUID1!, $invoiceID: UUID1!) {
  releaseReservation(orgID: $orgID, invoiceID: $invoiceID)
}
    `;
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
function useReleaseReservationBuyNowLotMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useMutation(ReleaseReservationBuyNowLotDocument, options);
}
const GetInvoiceDetailsDocument = gql `
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
function useGetInvoiceDetailsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useQuery(GetInvoiceDetailsDocument, options);
}
const ApplyDiscountCodeDocument = gql `
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
function useApplyDiscountCodeLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useLazyQuery(ApplyDiscountCodeDocument, options);
}
const MeDocument = gql `
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
function useMeQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useQuery(MeDocument, options);
}
const PaymentKeyDocument = gql `
    query PaymentKey($orgID: UUID1!) {
  getPaymentPublicKey(orgID: $orgID) {
    keyID
    publicKey
  }
}
    `;
function usePaymentKeyLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useLazyQuery(PaymentKeyDocument, options);
}
const GetPaymentMethodListDocument = gql `
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
function useGetPaymentMethodListQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useQuery(GetPaymentMethodListDocument, options);
}
const CreatePaymentMethodDocument = gql `
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
function useCreatePaymentMethodMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useMutation(CreatePaymentMethodDocument, options);
}
const DeletePaymentMethodDocument = gql `
    mutation DeletePaymentMethod($paymentMethodID: UUID1!, $orgID: UUID1!) {
  deletePaymentMethod(paymentMethodID: $paymentMethodID, orgID: $orgID)
}
    `;
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
function useDeletePaymentMethodMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useMutation(DeletePaymentMethodDocument, options);
}
const PreparePaymentMethodDocument = gql `
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
function usePreparePaymentMethodQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useQuery(PreparePaymentMethodDocument, options);
}
const GetPaymentMethodStatusDocument = gql `
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
function useGetPaymentMethodStatusLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useLazyQuery(GetPaymentMethodStatusDocument, options);
}
const ValidatePaymentLimitDocument = gql `
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
function useValidatePaymentLimitQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useQuery(ValidatePaymentLimitDocument, options);
}
const GetTaxQuoteDocument = gql `
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
function useGetTaxQuoteLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return useLazyQuery(GetTaxQuoteDocument, options);
}

export { ApplyDiscountCodeDocument, AuctionBidOrder, AuctionLotStatus, CollectionItemByIdDocument, CollectionType, ContractType, CreateAuctionInvoiceDocument, CreatePaymentDocument, CreatePaymentMethodDocument, DeletePaymentMethodDocument, DeliveryMethod, ExtensionType, FilteringType, GetInvoiceDetailsDocument, GetPaymentMethodListDocument, GetPaymentMethodStatusDocument, GetPaymentNotificationDocument, GetTaxQuoteDocument, IdentifierType, InvoiceStatus, KycStatus, MarketCollectionStatus, MarketplaceCollectionItemStatus, MarketplaceSaleType, MeDocument, PaymentKeyDocument, PaymentStatus, PaymentType, PreparePaymentMethodDocument, ReleaseReservationBuyNowLotDocument, ReserveBuyNowLotDocument, RiskRating, Role, TaxProvider, TokenType, TransactionStatus, TransactionType, TransferStatus, ValidatePaymentLimitDocument, WalletParentType, WalletTxType, useApplyDiscountCodeLazyQuery, useCollectionItemByIdQuery, useCreateAuctionInvoiceMutation, useCreatePaymentMethodMutation, useCreatePaymentMutation, useDeletePaymentMethodMutation, useGetInvoiceDetailsQuery, useGetPaymentMethodListQuery, useGetPaymentMethodStatusLazyQuery, useGetPaymentNotificationQuery, useGetTaxQuoteLazyQuery, useMeQuery, usePaymentKeyLazyQuery, usePreparePaymentMethodQuery, useReleaseReservationBuyNowLotMutation, useReserveBuyNowLotMutation, useValidatePaymentLimitQuery };
//# sourceMappingURL=graphqlGenerated.js.map
