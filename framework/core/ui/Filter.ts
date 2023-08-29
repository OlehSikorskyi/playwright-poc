import {Locator} from "@playwright/test";
import {FilteringConfig} from "./FilteringConfig";

export class Filter {
    private hasLocator?: Locator;
    private hasNotLocator?: Locator;
    private hasTextOrRegExp?: string | RegExp;
    private hasNotTextOrRegExp?: string | RegExp;

    constructor() {
    }

    public has(locator: Locator) {
        this.hasLocator = locator;
        return this;
    }

    public hasNot(locator: Locator) {
        this.hasNotLocator = locator;
        return this;
    }

    public hasText(text: string | RegExp) {
        this.hasTextOrRegExp = text;
        return this;
    }

    public hasNotText(text: string | RegExp) {
        this.hasNotTextOrRegExp = text;
        return this;
    }

    public create(): FilteringConfig {
        return {
            has: this.hasLocator,
            hasNot: this.hasNotLocator,
            hasText: this.hasTextOrRegExp,
            hasNotText: this.hasNotTextOrRegExp,
        };
    }
}