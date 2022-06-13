import React from "react";
import { PUIRouterOptions } from "../../../domain/router/router.types";
import { ThemeProviderProps } from "../../shared/ProvidersInjector/ProvidersInjector";
import { PUIStaticSuccessOverlayProps } from "./StaticSuccessOverlay";
export interface PUISuccessOverlayProps extends PUIStaticSuccessOverlayProps {
    onGoTo: (pathnameOrUrl: string, options?: PUIRouterOptions) => void;
}
export declare type PUISuccessProps = PUISuccessOverlayProps & ThemeProviderProps;
export declare const PUISuccessOverlay: React.FC<PUISuccessOverlayProps>;
export declare const PUISuccess: React.FC<PUISuccessProps>;
