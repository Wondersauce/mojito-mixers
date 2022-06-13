import React from "react";
import { PUIRouterOptions } from "../../../domain/router/router.types";
import { ProvidersInjectorProps } from "../../shared/ProvidersInjector/ProvidersInjector";
import { PUIStaticErrorOverlayProps } from "./StaticErrorOverlay";
export interface PUIErrorOverlayProps extends PUIStaticErrorOverlayProps {
    onGoTo: (pathnameOrUrl: string, options?: PUIRouterOptions) => void;
}
export declare type PUIErrorProps = PUIErrorOverlayProps & ProvidersInjectorProps;
export declare const PUIErrorOverlay: React.FC<PUIErrorOverlayProps>;
export declare const PUIError: React.FC<PUIErrorProps>;
