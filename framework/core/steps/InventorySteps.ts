import {BaseStep} from "./BaseStep";
import {LoginPage} from "../ui/pages/LoginPage";
import {Users} from "../../configuration/Users";
import {Scenario} from "../Scenario";
import {ConfigurationHandler} from "../../configuration/ConfigurationHandler";
import {InventoryPage} from "../ui/pages/InventoryPage";
import {InventoryItem} from "../ui/fragments/InventoryItem";
import {expect} from "@playwright/test";

export class InventorySteps extends BaseStep {
    public inventoryPage: InventoryPage;

    constructor(inventoryPage: InventoryPage) {
        super(inventoryPage);
        this.inventoryPage = inventoryPage;
    }

    async addToCartById(id: string) {
        await Scenario.step(`Inventory Step: Add item to cart by ID: ${id}.`, async () => {
            const item = await this.inventoryPage.inventoryItem(id).addToCartButton().click();
        })
    }

    async getPrice(id: string) {
        return await Scenario.step(`Inventory Step: Get item price by ID: ${id}.`, async () => {
            return await this.inventoryPage.inventoryItem(id).getPrice();
        })
    }

    async clickCartIcon() {
        await Scenario.step(`Click cart icon.`, async () => {
            await this.inventoryPage.header().clickCartIcon();
        })
    }

    async selectSortingOption(sortingOption: string) {
        await Scenario.step(`Select '${sortingOption}' sorting option for Inventory page.`, async () => {
            await this.inventoryPage.sortingSelect().select(sortingOption);
        });
    }
}