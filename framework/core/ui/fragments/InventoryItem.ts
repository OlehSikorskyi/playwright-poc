import {Locator, Page} from "@playwright/test";
import {Image} from "../elements/Image";
import {Button} from "../elements/Button";
import {ElementBuilder} from "../builder/ElementBuilder";
import {FragmentSelector} from "../Selectors";
import {BaseFragment} from "./BaseFragment";

export class InventoryItem extends BaseFragment {
    private imageElement: Image;
    private title: Locator;
    private description: Locator;
    private price: Locator;
    private addToCartButtonElement: Button;


    constructor(page: Page, rootSelector: Locator) {
        super(page, rootSelector);

        this.imageElement = new ElementBuilder(page, Image).setRootSelector(this.elementLocator).build();
        this.title = this.elementLocator.locator('div.inventory_item_label a');
        this.description = this.elementLocator.locator('div.inventory_item_desc');
        this.price = this.elementLocator.locator('div.inventory_item_price');
        this.addToCartButtonElement = new ElementBuilder(page, Button).setRootSelector(this.elementLocator).build();
    }

    getElementSelector(): FragmentSelector {
        return FragmentSelector.InventoryItem;
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

    image(): Image {
        return this.imageElement;
    }

    addToCartButton(): Button {
        return this.addToCartButtonElement;
    }
}