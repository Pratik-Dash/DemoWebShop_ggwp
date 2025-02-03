import { Locator, Page } from '@playwright/test';
import { LoadFnOutput } from 'module';

export class CheckoutPage{
    readonly page:Page;
    readonly selectBillingAddress:Locator
    readonly billingAddressFirstName:Locator
    readonly billingAddressLastName:Locator
    readonly billingAddressEmail:Locator
    readonly billingAddressCountry:Locator
    readonly billingAddressCity:Locator
    readonly billingAddressAddress1:Locator
    readonly billingAddressZip:Locator
    readonly billingAddressPhoneNumber:Locator
    readonly selectedCountry:Locator
    readonly billingAddressContinueBtn:Locator
    readonly shippingAddressContinueBtn:Locator
    readonly paymentModeContinueBtn:Locator
    readonly paymentInfoContinueBtn:Locator
    readonly shippingMethodContinueBtn:Locator
    readonly inStorePickCheck:Locator
    readonly creditcardHolderName:Locator
    readonly creditcardNumber:Locator
    readonly creditcardCode:Locator
    readonly puchaseOrder:Locator
    readonly confirmOrderBtn:Locator
    
    
    constructor(page:Page){
        this.page = page;
        this.selectBillingAddress = page.locator("#billing-address-select");
        this.billingAddressFirstName = page.locator("#BillingNewAddress_FirstName");
        this.billingAddressLastName = page.locator("#BillingNewAddress_LastName");
        this.billingAddressEmail = page.locator("#BillingNewAddress_Email")
        this.billingAddressCountry = page.locator("#BillingNewAddress_CountryId");
        this.billingAddressCity = page.locator("#BillingNewAddress_City");
        this.billingAddressAddress1 = page.locator("#BillingNewAddress_Address1")
        this. billingAddressZip = page.locator("#BillingNewAddress_ZipPostalCode");
        this.billingAddressPhoneNumber = page.locator("#BillingNewAddress_PhoneNumber");
        this.selectedCountry = page.locator("//option[text()='India']")
        this.billingAddressContinueBtn = page.locator("//div[@id='billing-buttons-container']/input");
        this.shippingAddressContinueBtn = page.locator("//div[@id='shipping-buttons-container']/input");
        this.inStorePickCheck = page.locator("#PickUpInStore")
        this.paymentModeContinueBtn = page.locator("//div[@id='payment-method-buttons-container']/input");
        this.paymentInfoContinueBtn = page.locator("//div[@id='payment-info-buttons-container']/input")
        this.creditcardHolderName = page.locator("#CardholderName")
        this.creditcardNumber = page.locator("#CardNumber")
        this.creditcardCode = page.locator("#CardCode")
        this.puchaseOrder = page.locator("#PurchaseOrderNumber")
        this.confirmOrderBtn = page.locator("//div[@id='confirm-order-buttons-container']/input")
        this.shippingMethodContinueBtn = page.locator("//div[@id='shipping-method-buttons-container']/input")
        

    }

    async addCreditCardDetails(creditCard:{creditcardHolderName:string,creditcardNumber:string, creditcardCode:string }){
        await this.creditcardHolderName.fill(creditCard.creditcardHolderName);
        await this.creditcardNumber.fill(creditCard.creditcardNumber);
        await this.creditcardCode.fill(creditCard.creditcardCode);
    }

    async navigateToRegistrationPage(){
        await this.page.goto('/register')
    }

    async FillinBillingAddress(billingAddress:{billingAddressCity:string, billingAddressAddress1:string, billingAddressZip:string, billingAddressPhoneNumber:string }){
      
        
        await this.billingAddressCountry.selectOption('41');
        await this.billingAddressCity.fill(billingAddress.billingAddressCity);
        await this.billingAddressAddress1.fill(billingAddress.billingAddressAddress1);
        await this.billingAddressZip.fill(billingAddress.billingAddressZip);
        await this.billingAddressPhoneNumber.fill(billingAddress.billingAddressPhoneNumber)
        await this.billingAddressContinueBtn.click();
       


    }

    async fillInShippingAddressStep(inStorePickup:boolean){
        if(inStorePickup){
            await this.inStorePickCheck.click();
            await this.shippingAddressContinueBtn.click()
        }else{
            await this.shippingAddressContinueBtn.click()
        }
    }
    async selectShippingMethod(shippingOption:number){

        switch(shippingOption){
            case 0:
                await this.page.locator("#shippingoption_0").click();
                break;
            case 1:
                await this.page.locator("#shippingoption_1").click();
                break;
            case 2:
                await this.page.locator("#shippingoption_2").click();
                break;
        }
        await this.shippingMethodContinueBtn.click();
    }
    async selectModeOfPayment(paymentMode:string){
       switch(paymentMode){

        case "COD":
            await this.page.locator("#paymentmethod_0").click();
            break;
        case "Money Order":
            await this.page.locator("#paymentmethod_1").click();
            break;
        case "Credit Card":
           await this.page.locator("#paymentmethod_2").click();
           break;
           
        case "Purchase Order":
        await this.page.locator("#paymentmethod_3").click();
        break;  

       }
       await this.paymentModeContinueBtn.click();

    }

    async addPaymentInformation(paymentMode:string){
        if(paymentMode === "COD" || paymentMode === "Money Order"){

            await this.paymentInfoContinueBtn.click();
        }
        else if (paymentMode === "Credit Card"){
            let creditCardDetails = {
                creditcardHolderName : "Alex M.",
                creditcardNumber:"6677111188228899111111",
                creditcardCode:"124"

            }
            await this.addCreditCardDetails(creditCardDetails)
            await this.paymentInfoContinueBtn.click();
        }

        else if (paymentMode === "Purchase Order"){
            await this.puchaseOrder.fill("4736734627738");
            await this.paymentInfoContinueBtn.click();
        }
    }

    async  confirmOrder(){
        
        await this.confirmOrderBtn.click()
        
    }
}