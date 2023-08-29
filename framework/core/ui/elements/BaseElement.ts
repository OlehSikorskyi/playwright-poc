import {Locator, Page} from "@playwright/test";
import {FilteringConfig} from "../FilteringConfig";
import {SelectorType} from "../Selectors";

export abstract class BaseElement {
    public page: Page;
    public elementLocator: Locator;

    public constructor(page: Page, elementSelector: Locator) {
        this.page = page;
        this.elementLocator = elementSelector;
    }

    abstract getElementSelector(): SelectorType;

    async click() {
        await this.elementLocator.click();
    }

    async isVisible() {
        return await this.elementLocator.isVisible();
    }

    async count() {
        return await this.elementLocator.count();
    }

    first() {
        return this.elementLocator.first();
    }

    filter(filter: FilteringConfig) {
        return this.elementLocator.filter(filter);
    }

    async waitForLoad() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('networkidle');
    }
}