import {Locator, Page} from "@playwright/test";
import {Input} from "../elements/Input";
import {ElementBuilder} from "../builder/ElementBuilder";
import {FragmentSelector} from "../Selectors";
import {BaseFragment} from "./BaseFragment";
import {Step} from "../../../../helpers/Step";
import { Button } from "../elements/Button";

export class Form extends BaseFragment {
    private usernameElement: Input;
    private passwordElement: Input;
    private loginButtonElement: Button;
    private errorMessage: Locator;

    constructor(page: Page, rootSelector: Locator) {
        super(page, rootSelector);

        this.usernameElement = new ElementBuilder(page, Input).setElementLocator('input#user-name').setRootSelector(this.elementLocator).build();
        this.passwordElement = new ElementBuilder(page, Input).setElementLocator('input#password').setRootSelector(this.elementLocator).build();
        this.loginButtonElement = new ElementBuilder(page, Button).setElementLocator('input#login-button').setRootSelector(this.elementLocator).build();
        this.errorMessage = this.elementLocator.locator('div.error h3');
    }

    getElementSelector(): FragmentSelector {
        return FragmentSelector.Form;
    }

    // @Step("Login to the application")
    async login(userName: string, password: string) {
        await this.usernameElement.fill(userName);
        await this.passwordElement.fill(password);
        await this.loginButtonElement.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.innerText();
    }
}