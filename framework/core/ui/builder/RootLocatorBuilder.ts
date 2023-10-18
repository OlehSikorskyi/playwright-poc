import {BaseBuilder} from "./BaseBuilder";
import {BaseElement} from "../elements/BaseElement";

export abstract class RootLocatorBuilder<T extends BaseElement> extends BaseBuilder<T> {

    public withRootLocator() {
        if (this.rootSelector) {
            if (typeof this.rootSelector === 'string') {
                this.locatorBuilder = this.page.locator(this.rootSelector);
            } else {
                this.locatorBuilder = this.rootSelector;
            }
        }
        return this;
    }
}