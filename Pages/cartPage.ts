import { Locator, Page } from '@playwright/test';

export class CartPage{
    readonly page:Page;
    readonly termsAndServiceCheckbox:Locator;
    readonly checkout:Locator;
    constructor(page:Page){
        this.page = page;
        this.termsAndServiceCheckbox = page.locator("#termsofservice");
        this.checkout = page.locator("#checkout");

    }

    async navigateToCartPage(){
        await this.page.goto('/cart')
    }

    async agreeTermsAndCheckout(){

        await this.termsAndServiceCheckbox.click();
        await this.checkout.click();
    }


    }
