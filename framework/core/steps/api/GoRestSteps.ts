import {Scenario} from "../../Scenario";
import {GoRestService} from "../../api/services/goRest/GoRestService";
import {BaseApiStep} from "./BaseApiStep";

export class GoRestSteps extends BaseApiStep {

    public goRestService: GoRestService;

    constructor(goRestService: GoRestService) {
        super();
        this.goRestService = goRestService;
    }

    async getUsers() {
        return await Scenario.step(`GoRest Service: Get Users from.`, async () => {
            return await this.goRestService.getUsers()
        })
    }
}