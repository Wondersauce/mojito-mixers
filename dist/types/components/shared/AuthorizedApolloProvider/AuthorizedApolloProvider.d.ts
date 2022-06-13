import React from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export interface AuthorizedApolloProviderProps {
    apolloClient?: ApolloClient<NormalizedCacheObject> | null;
    uri: string;
    getAuthenticationToken: (() => Promise<string | undefined>) | null;
    children?: React.ReactNode;
}
export declare const AuthorizedApolloProvider: React.FC<AuthorizedApolloProviderProps>;
