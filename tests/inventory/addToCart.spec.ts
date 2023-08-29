import {Suite} from "../../framework/configuration/Suites";
import {Scenario} from "../../framework/core/Scenario";
import {LoginSteps} from "../../framework/core/steps/LoginSteps";
import {Users} from "../../framework/configuration/Users";
import {LoginChecks} from "../../framework/core/checks/LoginChecks";
import {InventorySteps} from "../../framework/core/steps/InventorySteps";
import {CartChecks} from "../../framework/core/checks/CartChecks";

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
        await loginSteps.login(Users.Standard);
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

