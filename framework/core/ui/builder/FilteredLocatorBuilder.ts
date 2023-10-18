import {ElementLocatorBuilder} from "./ElementLocatorBuilder";
import {BaseElement} from "../elements/BaseElement";
import {Locator} from "@playwright/test";

export abstract class FilteredLocatorBuilder<T extends BaseElement> extends ElementLocatorBuilder<T> {

    public withFilter(elementLocator: Locator) {
        return this.filter ? elementLocator.filter(this.filter) : elementLocator;
    }
}