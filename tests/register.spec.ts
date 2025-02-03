import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../Pages/registrationPage';
let user = {firstName:'', lastName:'', email:'', password:'', confirmPassword:''}
test.describe('New user registration',() => {
    
    test.beforeAll(async () => {
        user.firstName =`testUser+${Date.now()}+firstName`;
        user.lastName = `testUser+${Date.now()}+lastName`;
        user.email = `testuser+${Date.now()}@gmail.com`;
        user.password = 'Password@123';
        user.confirmPassword = 'Password@123';
    });
    test('Register new user', async({page}) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        //Assertions
        await expect(page).toHaveURL('/registerresult/1');
        const message = page.locator("//div[@class = 'result']");
        const continueBtn = page.locator("//input[@value='Continue']")
        await expect(message).toBeVisible();
        await expect (message).toHaveText("Your registration completed ");
        await expect (continueBtn).toBeVisible();
        

    })
    
})