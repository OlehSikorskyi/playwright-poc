import {Fixtures} from "./Fixtures";
import {test} from "@playwright/test";
import {ScenarioAttributes} from "./ScenarioAttributes";
import {LoginPage} from "./ui/pages/LoginPage";
import {InventoryPage} from "./ui/pages/InventoryPage";
import {CartPage} from "./ui/pages/CartPage";

export const Scenario = test.extend<Fixtures>({
    TestCase: async ({}, use, testInfo) => {
        const callback = (id: string) => {
            testInfo.annotations.push({type: ScenarioAttributes.TesCaseId, description: id});
        };
        await use(callback);
    },

    Defects: async ({}, use, testInfo) => {
        const callback = (id: string) => {
            testInfo.annotations.push({type: ScenarioAttributes.Defects, description: id});
        };
        await use(callback);
    },

    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page));
    },

    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
})