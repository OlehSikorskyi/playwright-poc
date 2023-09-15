import {expect, Page} from "@playwright/test";
import {Scenario} from "../../Scenario";

export class BaseUiCheck {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkPageTitle(title: string | RegExp) {
        await Scenario.step(`Check page title is: ${title}`, async () => {
            await expect(this.page).toHaveTitle(title);
        })
    }
}