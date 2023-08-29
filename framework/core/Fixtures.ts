import {LoginPage} from "./ui/pages/LoginPage";
import {InventoryPage} from "./ui/pages/InventoryPage";
import {CartPage} from "./ui/pages/CartPage";

export type Fixtures = {
    TestCase: (id: string) => void;
    Defects: (id: string) => void;
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
}