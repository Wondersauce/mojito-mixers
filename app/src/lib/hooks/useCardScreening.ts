import { CardScreeningInput, useCardScreeningQuery } from "@lib/queries/graphqlGenerated";

export interface Name {
  firstName: string,
  lastName: string,
}

// const hashCode = (str: string) => {
//   var hash = 0,
//     i, chr;
//   if (str.length === 0) return hash;
//   for (i = 0; i < str.length; i++) {
//     chr = str.charCodeAt(i);
//     hash = ((hash << 5) - hash) + chr;
//     hash |= 0; // Convert to 32bit integer
//   }
//   return hash;
// }


export const useCardScreening = (orgId: string, sessionKey: string, card: string, name: Name, email: string) => {
  const input: CardScreeningInput = {
    flow: "card-payment",
    sessionKey,
    customer: {
      ...name,
      emailAddress: email,
      isEmailVerified: true,
      isPhoneVerified: false,

    },
    transaction: {
      id: "some_tx_id",
      paymentMethod: {
        type: "card",
        card: {
          first6: card.slice(0, 6),
          last4: card.slice(card.length - 5, card.length - 1),
          hash: "c9ef1083e85cf4d6cc85bd7e7505e4bf5416be80f185e120e634a9c2666e2540",
        },
      },
    },
  };

  const cardScreeningData = useCardScreeningQuery({ variables: { orgId, input } });
  return cardScreeningData;
};
