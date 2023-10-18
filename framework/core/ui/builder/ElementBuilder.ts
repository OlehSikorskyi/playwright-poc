import {BaseElement} from "../elements/BaseElement";
import {Locator, Page} from "@playwright/test";
import {FilteringConfig} from "./FilteringConfig";
import {FilteredLocatorBuilder} from "./FilteredLocatorBuilder";

export class ElementBuilder<T extends BaseElement> extends FilteredLocatorBuilder<T> {

    constructor(page: Page, type: new (page: Page, rootSelector: Locator) => T) {
        super(page, type);
    }

    public setRootSelector(rootSelector: string | Locator): ElementBuilder<T> {
        this.rootSelector = rootSelector;
        return this;
    }

    public setFrameSelector(frameSelector: string): ElementBuilder<T> {
        this.frameSelector = frameSelector;
        return this;
    }

    public setElementLocator(elementSelector: string): ElementBuilder<T> {
        this.elementSelector = elementSelector;
        return this;
    }

    public setFilter(filter: FilteringConfig): ElementBuilder<T> {
        this.filter = filter;
        return this;
    }

    // TODO: Make it possible to create the list of Elements of type T
    public build(): T {
        let finalLocator = this.withRootLocator()
            .withFrameLocator(this.locatorBuilder)
            .withElementLocator(this.locatorBuilder)
            .withFilter(this.locatorBuilder);

        return new this.type(this.page, finalLocator);
    }
}