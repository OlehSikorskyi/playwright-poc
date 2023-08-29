import {Check} from "./Check";
import {expect, Page} from "@playwright/test";
import {Scenario} from "../Scenario";
import {InventoryPage} from "../ui/pages/InventoryPage";

export class InventoryChecks extends Check {
    protected inventoryPage: InventoryPage;

    constructor(page: Page, inventoryPage: InventoryPage) {
        super(page);
        this.inventoryPage = inventoryPage;
    }

    async checkSelectedSortingOption(sortingOption: string) {
        await Scenario.step(`Check that  sorting option is set to ${sortingOption} for Inventory page.`, async () => {
            const result = await this.inventoryPage.getSelectedSortingOption();
            expect(result).toBe(sortingOption);
        });
    }
}