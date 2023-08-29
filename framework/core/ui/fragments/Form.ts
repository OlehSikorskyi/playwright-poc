import {Locator, Page} from "@playwright/test";
import {Input} from "../elements/Input";
import {ElementBuilder} from "../ElementBuilder";
import {FragmentSelector} from "../Selectors";
import {BaseFragment} from "./BaseFragment";

export class Form extends BaseFragment {
    private usernameElement;
    private passwordElement;
    private loginButtonElement;
    private errorMessage: Locator;

    constructor(page: Page, rootSelector: Locator) {
        super(page, rootSelector);

        this.usernameElement = new ElementBuilder(page, Input).setElementLocator('input#user-name').setRootSelector(this.elementLocator).build();
        this.passwordElement = new ElementBuilder(page, Input).setElementLocator('input#password').setRootSelector(this.elementLocator).build();
        this.loginButtonElement = new ElementBuilder(page, Input).setElementLocator('input#login-button').setRootSelector(this.elementLocator).build();
        this.errorMessage = this.elementLocator.locator('div.error h3');
    }

    getElementSelector(): FragmentSelector {
        return FragmentSelector.Form;
    }

    async login(userName: string, password: string) {
        await this.usernameElement.fill(userName);
        await this.passwordElement.fill(password);
        await this.loginButtonElement.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.innerText();
    }
}