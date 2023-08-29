import {BaseFragment} from "./BaseFragment";
import {Locator, Page} from "@playwright/test";
import {Button} from "../elements/Button";
import {ElementBuilder} from "../ElementBuilder";
import {FragmentSelector} from "../Selectors";
import {Filter} from "../Filter";
import {Image} from "../elements/Image";

export class CartItem extends BaseFragment {
    private title: Locator;
    private description: Locator;
    private price: Locator;
    private removeButtonElement;


    constructor(page: Page, rootSelector: Locator) {
        super(page, rootSelector);

        this.title = this.elementLocator.locator('div.inventory_item_name a');
        this.description = this.elementLocator.locator('div.inventory_item_desc');
        this.price = this.elementLocator.locator('div.inventory_item_price');
        this.removeButtonElement = new ElementBuilder(page, Button).setRootSelector(this.elementLocator).build();
    }

    getElementSelector(): FragmentSelector {
        return FragmentSelector.CartItem;
    }

    async getTitle() {
        return await this.title.innerText();
    }

    async getDescription() {
        return await this.description.innerText();
    }

    async getPrice() {
        const price = await this.price.innerText();
        return parseFloat(price.replace('$', ''));
    }

    removeButton(): Button {
        return this.removeButtonElement;
    }
}