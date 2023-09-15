import {BaseUiCheck} from "./BaseUiCheck";
import {Scenario} from "../../Scenario";
import {expect, Page} from "@playwright/test";
import {LoginPage} from "../../ui/pages/LoginPage";

export class LoginChecks extends BaseUiCheck {
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