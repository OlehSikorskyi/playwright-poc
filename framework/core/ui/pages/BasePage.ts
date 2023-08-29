import {Page} from "@playwright/test";
import {ConfigurationHandler} from "../../../configuration/ConfigurationHandler";

export class BasePage {
    public page: Page;
    public configuration: ConfigurationHandler;

    constructor(page: Page) {
        this.page = page;
        this.configuration = new ConfigurationHandler();
    }

    public async launch(): Promise<void> {
        await this.page.goto(this.configuration.getBaseUrl());
    }

    public async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }
}