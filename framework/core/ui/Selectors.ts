export enum ElementSelector {
    Button = 'button',
    Input = 'input',
    Select = 'select',
    Image = 'img',
}

export enum FragmentSelector {
    Form = 'form',
    InventoryItem = 'div.inventory_item',
    CartItem = 'div.cart_item',
    Header = 'div.primary_header',
}

export type SelectorType = ElementSelector | FragmentSelector;