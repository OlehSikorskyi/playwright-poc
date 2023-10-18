import {Suite} from "../../../framework/configuration/Suites";
import {Scenario} from "../../../framework/core/Scenario";
import {LoginSteps} from "../../../framework/core/steps/ui/LoginSteps";
import {Users} from "../../../framework/configuration/Users";
import {LoginChecks} from "../../../framework/core/checks/ui/LoginChecks";
import {ConfigurationHandler} from "../../../framework/configuration/ConfigurationHandler";
import { expect } from "@playwright/test";

let loginSteps: LoginSteps;
let loginChecks: LoginChecks;
Scenario.describe('Login page suite.', () => {

    Scenario.beforeEach(async ({page, loginPage}) => {
        loginSteps = new LoginSteps(loginPage);
        loginChecks = new LoginChecks(page, loginPage);
    });

    Scenario(`Test that standard user can login. ${Suite.Login} ${Suite.Regression}`, async ({TestCase}) => {
        TestCase('ID-3257');
        await loginSteps.launch();
        await loginSteps.login(Users.Standard);
        await loginChecks.checkPageTitle('Swag Labs');
    });

    Scenario(`Test that locked out user cannot login. ${Suite.Login} ${Suite.Regression}`, async ({TestCase, Defects, loginPage}) => {
        TestCase('ID-3256');
        Defects("BUG-3222");
        const user = new ConfigurationHandler().getUser(Users.LockedOutUser);
        await loginPage.launch();
        await loginPage.loginForm().login(user.email, user.password);
        const actualErrorMessage = await loginPage.loginForm().getErrorMessage();
        expect('Epic sadface: Sorry, this user has been locked out.').toBe(actualErrorMessage);
    });
});

