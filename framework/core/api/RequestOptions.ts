import {Serializable} from "playwright-core/types/structs";

export interface RequestOptions {
    headers?: Record<string, string>;
    data?: string | Buffer | Serializable;
    ignoreHTTPSErrors?: boolean;
    maxRedirects?: number;
    failOnStatusCode?: boolean;
    form?: { [key: string]: string | number | boolean; };
    params?: { [key: string]: string | number | boolean; };
    timeout?: number;
}