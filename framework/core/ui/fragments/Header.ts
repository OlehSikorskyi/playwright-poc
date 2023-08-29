import {BaseFragment} from "./BaseFragment";
import {Locator, Page} from "@playwright/test";
import {FragmentSelector} from "../Selectors";

export class Header extends BaseFragment {
    private appLogo: Locator;
    private cartIcon: Locator;

    constructor(page: Page, rootSelector: Locator) {
        super(page, rootSelector);

        this.appLogo = this.elementLocator.locator('div.app_logo');
        this.cartIcon = this.elementLocator.locator('div#shopping_cart_container');
    }

    getElementSelector(): FragmentSelector {
        return FragmentSelector.Header;
    }

    async getLogo() {
        return await this.appLogo.innerText();
    }

    async clickCartIcon() {
        await this.cartIcon.click();
        await this.waitForLoad();
    }
}