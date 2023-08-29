import {FrameLocatorBuilder} from "./FrameLocatorBuilder";
import {BaseElement} from "./elements/BaseElement";
import {Locator} from "@playwright/test";
import {SelectorType} from "./Selectors";

export abstract class ElementLocatorBuilder<T extends BaseElement> extends FrameLocatorBuilder<T> {

    public withElementLocator(frameLocator: Locator) {
        let elementSelector = this.elementSelector ? this.elementSelector : this.type.prototype.getElementSelector() as SelectorType;
        this.locatorBuilder = frameLocator ? frameLocator.locator(elementSelector) : this.page.locator(elementSelector);
        return this;
    }
}