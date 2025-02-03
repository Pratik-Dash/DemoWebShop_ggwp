import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../Pages/registrationPage';
import { CommonPageActions } from '../Pages/common';
import { CartPage } from '../Pages/cartPage';
import { CheckoutPage } from '../Pages/checkoutPage';
let user = {firstName:'', lastName:'', email:'', password:'', confirmPassword:''}

let userAddress = {
    
    billingAddressCity:'',
    billingAddressAddress1:'',
    billingAddressZip:'',
    billingAddressPhoneNumber:''

}
test.describe('Complete checkout processs',() => {
    
    test.beforeAll(async () => {
        user.firstName = `testUser+${Date.now()}+firstName`;
        user.lastName = `testUser+${Date.now()}+lastName`;
        user.email = `testuser+${Date.now()}@gmail.com`;
        user.password = 'Password@123';
        user.confirmPassword = 'Password@123';
        userAddress.billingAddressCity = `testusercity+${Date.now()}`;
        userAddress.billingAddressAddress1 = `testuserAddress1+${Date.now()}`;
        userAddress.billingAddressZip = `testzip+${Date.now()}`;
        userAddress.billingAddressPhoneNumber = `8899882211`
    });
    test('Checkout from cart with in-store pick up and cash on Delivery option', async({page}) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);
        await expect(page).toHaveURL('/registerresult/1');
        const commonActions = new CommonPageActions(page);
        await commonActions.searchStore("TBlue jeans");
        await commonActions.addToCart();
        const cartPage = new CartPage(page);
        await cartPage.navigateToCartPage();
        await cartPage.agreeTermsAndCheckout();
        const checkoutPage = new CheckoutPage(page)
        await expect(checkoutPage.billingAddressFirstName).toHaveValue(user.firstName);
        await expect(checkoutPage.billingAddressLastName).toHaveValue(user.lastName);
        await expect(checkoutPage.billingAddressEmail).toHaveValue(user.email);
        await checkoutPage.FillinBillingAddress(userAddress);
        await checkoutPage.fillInShippingAddressStep(true)
        await checkoutPage.selectModeOfPayment("COD")
        await checkoutPage.addPaymentInformation("COD")
        await checkoutPage.confirmOrder();
        await expect(page.locator("//div[@class= 'title']")).toBeVisible
        await expect (page.locator("//div[@class= 'title']")).toHaveText("Your order has been successfully processed!");
        await expect(page.locator("//ul[@class='details']/li[1]")).toBeVisible();
        await expect(page.locator("//ul[@class='details']/li[1]")).toHaveText(/Order number:/)
        

    })

    

    test('Checkout from cart with Ground Shipping and cash on Delivery option', async({page}) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user); 
        await expect(page).toHaveURL('/registerresult/1');        
        const commonActions = new CommonPageActions(page);
        await commonActions.searchStore("TBlue jeans");
        await commonActions.addToCart();
        const cartPage = new CartPage(page);
        
        await cartPage.navigateToCartPage();
        await cartPage.agreeTermsAndCheckout();
        const checkoutPage = new CheckoutPage(page)
        await expect(checkoutPage.billingAddressFirstName).toHaveValue(user.firstName);
        await expect(checkoutPage.billingAddressLastName).toHaveValue(user.lastName);
        await expect(checkoutPage.billingAddressEmail).toHaveValue(user.email);
        await checkoutPage.FillinBillingAddress(userAddress);
        await checkoutPage.fillInShippingAddressStep(false)
        await checkoutPage.selectShippingMethod(0)
        await checkoutPage.selectModeOfPayment("COD")
        await checkoutPage.addPaymentInformation("COD")
        await checkoutPage.confirmOrder();
        await expect(page.locator("//div[@class= 'title']")).toBeVisible
        await expect (page.locator("//div[@class= 'title']")).toHaveText("Your order has been successfully processed!");
        await expect(page.locator("//ul[@class='details']/li[1]")).toBeVisible();
        await expect(page.locator("//ul[@class='details']/li[1]")).toHaveText(/Order number:/)
    })

    test('Checkout from cart with Next Day Air Shipping and credit card option', async({page}) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user); 
        await expect(page).toHaveURL('/registerresult/1');        
        const commonActions = new CommonPageActions(page);
        await commonActions.searchStore("TBlue jeans");
        await commonActions.addToCart();
        const cartPage = new CartPage(page);
        await cartPage.navigateToCartPage();
        await cartPage.agreeTermsAndCheckout();
        const checkoutPage = new CheckoutPage(page)
        await expect(checkoutPage.billingAddressFirstName).toHaveValue(user.firstName);
        await expect(checkoutPage.billingAddressLastName).toHaveValue(user.lastName);
        await expect(checkoutPage.billingAddressEmail).toHaveValue(user.email);
        await checkoutPage.FillinBillingAddress(userAddress);
        await checkoutPage.fillInShippingAddressStep(false)
        await checkoutPage.selectShippingMethod(1)
        await checkoutPage.selectModeOfPayment("Credit Card")
        await checkoutPage.addPaymentInformation("Credit Card")
        await checkoutPage.confirmOrder();
        await expect(page.locator("//div[@class= 'title']")).toBeVisible
        await expect (page.locator("//div[@class= 'title']")).toHaveText("Your order has been successfully processed!");
        await expect(page.locator("//ul[@class='details']/li[1]")).toBeVisible();
        await expect(page.locator("//ul[@class='details']/li[1]")).toHaveText(/Order number:/)
    })

    test('Checkout from cart with 2nd Day Air Shipping and Purchase Order option', async({page}) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user); 
        await expect(page).toHaveURL('/registerresult/1');        
        const commonActions = new CommonPageActions(page);
        await commonActions.searchStore("TBlue jeans");
        await commonActions.addToCart();
        const cartPage = new CartPage(page);
        await cartPage.navigateToCartPage();
        await cartPage.agreeTermsAndCheckout();
        const checkoutPage = new CheckoutPage(page);
        await expect(checkoutPage.billingAddressFirstName).toHaveValue(user.firstName);
        await expect(checkoutPage.billingAddressLastName).toHaveValue(user.lastName);
        await expect(checkoutPage.billingAddressEmail).toHaveValue(user.email);
        await checkoutPage.FillinBillingAddress(userAddress);
        await checkoutPage.fillInShippingAddressStep(false);
        await checkoutPage.selectShippingMethod(2);
        await checkoutPage.selectModeOfPayment("Purchase Order");
        await checkoutPage.addPaymentInformation("Purchase Order");
        await checkoutPage.confirmOrder();
        await expect(page.locator("//div[@class= 'title']")).toBeVisible
        await expect (page.locator("//div[@class= 'title']")).toHaveText("Your order has been successfully processed!");
        await expect(page.locator("//ul[@class='details']/li[1]")).toBeVisible();
        await expect(page.locator("//ul[@class='details']/li[1]")).toHaveText(/Order number:/)
    })
    
})