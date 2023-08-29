import {BaseElement} from "./BaseElement";
import {Locator, Page} from "@playwright/test";
import {ElementSelector} from "../Selectors";

export class Select extends BaseElement {

    constructor(page: Page, elementLocator: Locator) {
        super(page, elementLocator);
    }

    getElementSelector(): ElementSelector {
        return ElementSelector.Select;
    }

    async select(option: string): Promise<void> {
        await this.elementLocator.selectOption(option);
    }
}