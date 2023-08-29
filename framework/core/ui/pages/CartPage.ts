import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import {Filter} from "../Filter";
import {ElementBuilder} from "../ElementBuilder";
import {CartItem} from "../fragments/CartItem";

export class CartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    cartItem(id: string) {
        const filter = new Filter().has(this.page.locator(`a#${id}`)).create();
        return new ElementBuilder(this.page, CartItem).setFilter(filter).build();
    }
}