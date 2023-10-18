import {Locator} from "@playwright/test";

export interface FilteringConfig {
    has?: Locator;
    hasNot?: Locator;
    hasText?: string | RegExp;
    hasNotText?: string | RegExp;
}