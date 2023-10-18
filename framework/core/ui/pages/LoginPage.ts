import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import {ElementBuilder} from "../builder/ElementBuilder";
import {Form} from "../fragments/Form";

export class LoginPage extends BasePage {

    private loginFormFragment: Form;

    constructor(page: Page) {
        super(page);
        this.loginFormFragment = new ElementBuilder(page, Form).setRootSelector('div.login-box').build();
    }

    loginForm() {
        return this.loginFormFragment;
    }
}