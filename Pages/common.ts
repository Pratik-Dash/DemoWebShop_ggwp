import { Locator, Page } from '@playwright/test';

export class CommonPageActions{
    readonly page:Page;
    readonly SearchInput:Locator;
    readonly searchBtn:Locator;
    readonly addToCartBtn:Locator;
    readonly continueBtn:Locator;
    readonly loadingImage:Locator;

    constructor(page:Page){
        this.page = page;
        this.SearchInput = page.locator('#small-searchterms');
        this.searchBtn = page.locator("//input[@value='Search']");
        this.addToCartBtn = page.locator("//input[@value = 'Add to cart']");
        this.continueBtn = page.locator("//input[@value='Continue']")
        this.loadingImage = page.locator("//div[@class='loading-image']");

    }
    

    async searchStore(product:string){
        
        await this.SearchInput.fill("TBlue Jeans");
        await this.page.keyboard.press('Enter');

    }
    async addToCart(){

        await this.addToCartBtn.click();
        await this.loadingImage.waitFor({"state":"hidden"});
        
    }

    async moveToNextStep(){
        await this.continueBtn.click();
    }
}