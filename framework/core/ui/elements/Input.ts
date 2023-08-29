import {BaseElement} from "./BaseElement";
import {Locator, Page} from "@playwright/test";
import {ElementSelector} from "../Selectors";

export class Input extends BaseElement {

    constructor(page: Page, rootSelector: Locator) {
        super(page, rootSelector);
    }

    getElementSelector(): ElementSelector {
        return ElementSelector.Input;
    }

    async fill(value: string) {
        await this.elementLocator.fill(value);
    }
}