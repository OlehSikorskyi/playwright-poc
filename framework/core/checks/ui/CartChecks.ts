import {BaseUiCheck} from "./BaseUiCheck";
import {expect, Page} from "@playwright/test";
import {Scenario} from "../../Scenario";
import {CartPage} from "../../ui/pages/CartPage";

export class CartChecks extends BaseUiCheck {
    protected cartPage: CartPage;

    constructor(page: Page, cartPage: CartPage) {
        super(page);
        this.cartPage = cartPage;
    }

    async checkCartItemPresentOnThePage(id: string) {
        await Scenario.step(`Check Cart item with ${id} is present on page.`, async () => {
            const result = await this.cartPage.cartItem(id).isVisible();
            expect(result).toBeTruthy();
        })
    }

    async checkCartTotalPrice(itemsPrice: number, ...args: string[]) {
        await Scenario.step(`Check Cart items total price.`, async () => {
            let totalPrice = 0.0;
            for (const numbElement of args) {
                const price = await this.cartPage.cartItem(numbElement).getPrice();
                totalPrice = totalPrice + price;
            }
            expect(totalPrice).toBe(itemsPrice);
        })
    }
}