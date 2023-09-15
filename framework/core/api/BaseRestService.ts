import {APIRequestContext} from "playwright-core";
import {APIResponse} from "@playwright/test";
import {RequestOptions} from "./RequestOptions";
import {Method} from "./Method";

export type PromiseResponse<T> = Promise<{ apiResponse: APIResponse; data: T }>;

export class BaseRestService {
    private apiRequestContext: APIRequestContext;

    constructor(apiRequest: APIRequestContext) {
        this.apiRequestContext = apiRequest;
    }

    async get<T>(endpoint: string, requestOptions?: RequestOptions): PromiseResponse<T> {
        this.logRequest(Method.Get, endpoint, requestOptions);
        const response = await this.apiRequestContext.get(endpoint, requestOptions);
        await this.logResponse(response);
        return {
            apiResponse: response,
            data: await response.json() as T
        };
    }

    async post<T>(endpoint: string, requestOptions: RequestOptions): PromiseResponse<T> {
        this.logRequest(Method.Post, endpoint, requestOptions);
        const response = await this.apiRequestContext.post(endpoint, requestOptions);
        await this.logResponse(response);
        return {
            apiResponse: response,
            data: await response.json() as T
        };
    }

    private logRequest(method: string, url: string, requestOption: RequestOptions, log: boolean = true): void {
        if (log) {
            console.log('Request: ', method, url);
            console.log('Headers: ', requestOption.headers ? JSON.stringify(requestOption.headers) : ' ');
            console.log('Body: ', requestOption.data ? JSON.stringify(requestOption.data, null, 2) : '{}', '\n');
        }
    }

    private async logResponse(response: APIResponse, log: boolean = true): Promise<void> {
        if (log) {
            console.log('Response: ', response.status());
            console.log(JSON.stringify(await response.json(), null, 2), '\n');
        }
    }
}