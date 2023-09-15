import {ConfigurationHandler} from "../../../../configuration/ConfigurationHandler";
import {GoRestServiceImplementation} from "./GoRestServiceImplementation";
import {APIRequest} from "@playwright/test";
import {RequestOptions} from "../../RequestOptions";
import {Services} from "../../../../configuration/Services";
import {APIRequestContext} from "playwright-core";
import {Service} from "../../../../configuration/types/Service";

export class GoRestService {
    public host: string;
    public service: Service;
    public goRestServiceImplementation: GoRestServiceImplementation;

    constructor(apiRequest: APIRequestContext) {
        this.service = new ConfigurationHandler().getService(Services.GoRest);
        this.host = this.service.url + this.service.version;
        this.goRestServiceImplementation = new GoRestServiceImplementation(apiRequest, this.host);
    }

    public async getUsers() {
        return await this.goRestServiceImplementation.getUsers();
    }
}