import {BaseElement} from "../elements/BaseElement";
import {Locator, Page} from "@playwright/test";
import {FilteringConfig} from "./FilteringConfig";

export abstract class BaseBuilder<T extends BaseElement> {
    protected page: Page;
    protected rootSelector?: string | Locator;
    protected frameSelector?: string;
    protected elementSelector?: string;
    protected filter?: FilteringConfig;
    protected type: new (page: Page, elementBuilder: Locator) => T;
    protected locatorBuilder: Locator;

    constructor(page: Page, type: new (page: Page, rootSelector: Locator) => T) {
        this.page = page;
        this.type = type;
    }

    protected abstract build(): T;
}