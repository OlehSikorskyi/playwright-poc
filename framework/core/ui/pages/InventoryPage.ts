import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import {InventoryItem} from "../fragments/InventoryItem";
import {ElementBuilder} from "../ElementBuilder";
import {Filter} from "../Filter";
import {Header} from "../fragments/Header";
import {Select} from "../elements/Select";

export class InventoryPage extends BasePage {

    private headerFragment: Header;
    private sortingSelectElement: Select;

    constructor(page: Page) {
        super(page);

        this.headerFragment = new ElementBuilder(page, Header).build();
        this.sortingSelectElement = new ElementBuilder(page, Select).setRootSelector('span.select_container').build();
    }

    inventoryItem(id: string): InventoryItem {
        const filter = new Filter().has(this.page.locator(`a#${id}`)).create();
        return new ElementBuilder(this.page, InventoryItem).setFilter(filter).build();
    }

    header() {
        return this.headerFragment;
    }

    sortingSelect() {
        return this.sortingSelectElement;
    }

    async getSelectedSortingOption() {
        return await this.page.locator('span.select_container').locator('span.active_option').innerText();
    }
}