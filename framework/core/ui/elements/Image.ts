import {BaseElement} from "./BaseElement";
import {Locator, Page} from "@playwright/test";
import {ElementSelector} from "../Selectors";

export class Image extends BaseElement {
    constructor(page: Page, rootSelector: Locator,) {
        super(page, rootSelector);
    }

    getElementSelector(): ElementSelector {
        return ElementSelector.Image;
    }

    async getAlt() {
        return this.elementLocator.getAttribute('alt');
    }

    async getSrc() {
        return this.elementLocator.getAttribute('src');
    }
}