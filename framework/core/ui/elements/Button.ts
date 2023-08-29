import {BaseElement} from "./BaseElement";
import {Locator, Page} from "@playwright/test";
import {ElementSelector} from "../Selectors";

export class Button extends BaseElement {

    constructor(page: Page, elementLocator: Locator,) {
        super(page, elementLocator);
    }

    getElementSelector(): ElementSelector {
        return ElementSelector.Button;
    }
}