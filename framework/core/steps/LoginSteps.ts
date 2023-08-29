import {Step} from "./Step";
import {LoginPage} from "../ui/pages/LoginPage";
import {Scenario} from "../Scenario";
import {ConfigurationHandler} from "../../configuration/ConfigurationHandler";
import {Users} from "../../configuration/Users";

export class LoginSteps extends Step {

    public loginPage: LoginPage;

    constructor(loginPage: LoginPage) {
        super(loginPage);
        this.loginPage = loginPage;
    }

    async login(type: Users) {
        await Scenario.step(`Login to the application`, async () => {
            const user = new ConfigurationHandler().getUser(type);
            await this.loginPage.loginForm().login(user.email, user.password);
        })
    }
}