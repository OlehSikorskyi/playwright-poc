import {GoRestServiceInterface} from "./GoRestServiceInterface";
import {BaseRestService, PromiseResponse} from "../../BaseRestService";
import {Users} from "./types/Users";
import {RequestOptions} from "../../RequestOptions";
import {APIRequestContext} from "playwright-core/index";

export class GoRestServiceImplementation implements GoRestServiceInterface {
    private baseRestService: BaseRestService;
    host: string;

    constructor(apiRequest: APIRequestContext, host: string) {
        this.host = host;
        this.baseRestService = new BaseRestService(apiRequest);
    }

    async getUsers(): PromiseResponse<Users> {
        const requestOptions: RequestOptions = {
            ignoreHTTPSErrors: true,
        };
        return await this.baseRestService.get(this.host + '/users', requestOptions);
    }
}