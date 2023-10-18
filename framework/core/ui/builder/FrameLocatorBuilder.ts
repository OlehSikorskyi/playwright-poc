import {RootLocatorBuilder} from "./RootLocatorBuilder";
import {BaseElement} from "../elements/BaseElement";
import {Locator} from "@playwright/test";

export abstract class FrameLocatorBuilder<T extends BaseElement> extends RootLocatorBuilder<T> {

    public withFrameLocator(rootLocator: Locator) {
        this.locatorBuilder = this.frameSelector ? this.page.frameLocator(this.frameSelector).locator(rootLocator) : rootLocator;
        return this;
    }
}