import {BasePage} from "../../ui/pages/BasePage";
import {Scenario} from "../../Scenario";

export class BaseUiStep {
    public page: BasePage;

    constructor(page: BasePage) {
        this.page = page;
    }

    async launch() {
        await Scenario.step('Open app', async () => {
            await this.page.launch();
        })
    }

    async navigateTo(url: string) {
        await Scenario.step(`Navigate to the url: ${url}`, async () => {
            await this.page.navigateTo(url);
        })
    }
}