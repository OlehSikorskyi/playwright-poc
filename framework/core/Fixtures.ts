import {LoginPage} from "./ui/pages/LoginPage";
import {InventoryPage} from "./ui/pages/InventoryPage";
import {CartPage} from "./ui/pages/CartPage";
import {GoRestService} from "./api/services/goRest/GoRestService";

export type Fixtures = {
    TestCase: (id: string) => void;
    Defects: (id: string) => void;

    screenshotOnFailure: void;

    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;

    goRestService: GoRestService;
}