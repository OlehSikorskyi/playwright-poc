import {LoginPage} from "../../ui/pages/LoginPage";
import {BaseUiStep} from "./BaseUiStep";

export class LoginSteps extends BaseUiStep {

    public loginPage: LoginPage;

    constructor(loginPage: LoginPage) {
        super(loginPage);
        this.loginPage = loginPage;
    }

    // async login(type: Users) {
    //     await Scenario.step(`Login to the application`, async () => {
    //         const user = new ConfigurationHandler().getUser(type);
    //         await this.loginPage.loginForm().login(user.email, user.password);
    //     });
    // }
}