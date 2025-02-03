import { Locator, Page } from '@playwright/test';

export class RegistrationPage{
    readonly page:Page;
    readonly firstNameInput:Locator;
    readonly lastNameInput:Locator;
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly confirmPasswordInput:Locator;
    readonly registerBtn:Locator;

    constructor(page:Page){
        this.page = page;
        this.firstNameInput = page.locator('#FirstName');
        this.lastNameInput = page.locator('#LastName');
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.confirmPasswordInput = page.locator('#ConfirmPassword');
        this.registerBtn = page.locator('#register-button');

    }

    async navigateToRegistrationPage(){
        await this.page.goto('/register')
    }

    async registerUser(user:{firstName:string, lastName:string,email:string, password:string, confirmPassword:string}){
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.emailInput.fill(user.email)
        await this.passwordInput.fill(user.password);
        await this.confirmPasswordInput.fill(user.confirmPassword);
        await this.registerBtn.click();


    }
}