import {Scenario} from "../../../framework/core/Scenario";
import {GoRestSteps} from "../../../framework/core/steps/api/GoRestSteps";
import {Suite} from "../../../framework/configuration/Suites";
import {GoRestChecks} from "../../../framework/core/checks/api/GoRestChecks";

let goRestStep: GoRestSteps;
let goRestCheck: GoRestChecks;

Scenario.describe('GoRest Service Test Suite. Get Users.', () => {

    Scenario.beforeEach(async ({goRestService}) => {
        goRestStep = new GoRestSteps(goRestService);
        goRestCheck = new GoRestChecks(goRestService);

    });

    Scenario.only(`Test that users can be retrieved. ${Suite.GoRestService} ${Suite.Regression}`, async ({TestCase}) => {
        TestCase('ID-3258');
        let getUserResponse = await goRestStep.getUsers();
        await goRestCheck.checkStatusCode(getUserResponse.apiResponse, 200);
    });
});