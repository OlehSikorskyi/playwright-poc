import {Check} from "./Check";
import {Scenario} from "../Scenario";
import {expect, Page} from "@playwright/test";
import {LoginPage} from "../ui/pages/LoginPage";

export class LoginChecks extends Check {
    protected loginPage: LoginPage;

    constructor(page: Page, loginPage: LoginPage) {
        super(page);
        this.loginPage = loginPage;
    }

    async checkLoginFormErrorMessage(errorMessage: string) {
        await Scenario.step(`Check Login page Form error message is: ${errorMessage}`, async () => {
            const actualErrorMessage = await this.loginPage.loginForm().getErrorMessage();
            expect(errorMessage).toBe(actualErrorMessage);
        })
    }
}