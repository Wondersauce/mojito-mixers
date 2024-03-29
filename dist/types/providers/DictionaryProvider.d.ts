import React from "react";
import { PUIDictionary } from "../domain/dictionary/dictionary.interfaces";
export declare const DictionaryContext: React.Context<PUIDictionary>;
export interface DictionaryProviderProps {
    dictionary?: Partial<PUIDictionary>;
    children?: React.ReactNode;
}
export declare const DictionaryProvider: React.FC<DictionaryProviderProps>;
