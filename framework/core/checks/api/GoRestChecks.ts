import {BaseApiCheck} from "./BaseApiCheck";
import {GoRestService} from "../../api/services/goRest/GoRestService";
export class GoRestChecks extends BaseApiCheck {

    private goRestService: GoRestService;

    constructor(goRestService: GoRestService) {
        super();
        this.goRestService = goRestService;
    }
}