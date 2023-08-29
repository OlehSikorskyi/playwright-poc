import {Suite} from "../../framework/configuration/Suites";
import {Scenario} from "../../framework/core/Scenario";
import {LoginSteps} from "../../framework/core/steps/LoginSteps";
import {Users} from "../../framework/configuration/Users";
import {LoginChecks} from "../../framework/core/checks/LoginChecks";
import {InventorySteps} from "../../framework/core/steps/InventorySteps";
import {CartChecks} from "../../framework/core/checks/CartChecks";
import {InventoryChecks} from "../../framework/core/checks/InventoryChecks";

let loginSteps: LoginSteps;
let inventoryStep: InventorySteps;
let inventoryChecks: InventoryChecks;
Scenario.describe('Inventory page suite. Add to cart.', () => {

    Scenario.beforeEach(async ({page, loginPage, inventoryPage}) => {
        loginSteps = new LoginSteps(loginPage);
        inventoryStep = new InventorySteps(inventoryPage);
        inventoryChecks = new InventoryChecks(page, inventoryPage);

        await loginSteps.launch();
        await loginSteps.login(Users.Standard);
    });

    Scenario(`Test that Sorting option Name (A to Z) is set by default. ${Suite.Inventory} ${Suite.Regression}`, async ({TestCase}) => {
        TestCase('ID-3260');
        await inventoryChecks.checkSelectedSortingOption('Name (A to Z)');
    });

    Scenario(`Test that it is possible to select different sorting option than default. ${Suite.Inventory} ${Suite.Regression}`, async ({TestCase}) => {
        TestCase('ID-3261');
        await inventoryStep.selectSortingOption('Price (low to high)')
        await inventoryChecks.checkSelectedSortingOption('Price (low to high)');
    });
});

