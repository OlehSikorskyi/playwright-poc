import {APIResponse, expect} from "@playwright/test";
import {Scenario} from "../../Scenario";

export class BaseApiCheck {
    async checkStatusCode(response: APIResponse, statusCode: number) {
        await Scenario.step(`Check response status code to be: ${statusCode}.`, async () => {
            expect(response.status()).toBe(statusCode);
        })
    }
}