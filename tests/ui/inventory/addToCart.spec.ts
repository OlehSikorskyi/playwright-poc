import {Suite} from "../../../framework/configuration/Suites";
import {Scenario} from "../../../framework/core/Scenario";
import {LoginSteps} from "../../../framework/core/steps/ui/LoginSteps";
import {Users} from "../../../framework/configuration/Users";
import {InventorySteps} from "../../../framework/core/steps/ui/InventorySteps";
import {CartChecks} from "../../../framework/core/checks/ui/CartChecks";
import {ConfigurationHandler} from "../../../framework/configuration/ConfigurationHandler";

let loginSteps: LoginSteps;
let inventoryStep: InventorySteps;
let cartChecks: CartChecks;
Scenario.describe('Inventory page suite. Add to cart.', () => {

    Scenario.beforeEach(async ({page, loginPage, inventoryPage, cartPage}) => {
        loginSteps = new LoginSteps(loginPage);
        inventoryStep = new InventorySteps(inventoryPage);
        cartChecks = new CartChecks(page, cartPage);

        //TODO: move launch and login action to separate before script
        await loginSteps.launch();
        const user = new ConfigurationHandler().getUser(Users.Standard);
        await loginPage.loginForm().login(user.email, user.password);
        // await loginSteps.login(Users.Standard);
    });

    Scenario(`Test that item can be added to the cart. ${Suite.Inventory} ${Suite.Regression}`, async ({TestCase}) => {
        TestCase('ID-3258');
        await inventoryStep.addToCartById('item_4_title_link');
        await inventoryStep.clickCartIcon();
        await cartChecks.checkCartItemPresentOnThePage('item_4_title_link');
    });

    Scenario(`Test that total price in the Cart matches sun of items price. ${Suite.Inventory} ${Suite.Regression}`, async ({TestCase}) => {
        TestCase('ID-3259');
        const sauceLabsBike = 'item_4_title_link';
        const sauceLabsBikeLight = 'item_0_title_link';
        const sauceLabsBikePrice = await inventoryStep.getPrice(sauceLabsBike);
        const sauceLabsBikeLightPrice = await inventoryStep.getPrice(sauceLabsBikeLight);
        await inventoryStep.addToCartById(sauceLabsBike);
        await inventoryStep.addToCartById(sauceLabsBikeLight);
        await inventoryStep.clickCartIcon();
        await cartChecks.checkCartTotalPrice(sauceLabsBikePrice + sauceLabsBikeLightPrice, sauceLabsBike, sauceLabsBikeLight);
    });
});

