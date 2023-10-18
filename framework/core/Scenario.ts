import {Fixtures} from "./Fixtures";
import { screenshotOnFailure } from "../../helpers/ScreenshotOnFailure";
import {test} from "@playwright/test";
import {ScenarioAttributes} from "./ScenarioAttributes";
import {LoginPage} from "./ui/pages/LoginPage";
import {InventoryPage} from "./ui/pages/InventoryPage";
import {CartPage} from "./ui/pages/CartPage";
import {GoRestService} from "./api/services/goRest/GoRestService";

export const Scenario = test.extend<Fixtures>({
    screenshotOnFailure: [async ({page}, use, testInfo) => {
        await use();
        await screenshotOnFailure(page, testInfo);
    }, {auto: true}],
    
    // Scanario atributes
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

    // Pages
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page));
    },

    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },


    // Services
    goRestService: async ({request}, use) => {
        await use(new GoRestService(request));
    },
})