import {expect} from '@playwright/test'
 export class LoginPage {

    constructor(page) { 
        this.page = page;
        this.loginLink = "//a[@id='login2']";
        //this.loginLink = page.getByRole('link', { name: 'Log in' })
        this.userNameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        //this.passwordInput = 'a:has-text("#logInModal")'
        this.loginButton = "//button[@onclick='logIn()']";
        //this.welcomePage = page.getByRole("heading", { name: 'Welcome user1.n@yahoo.com' });
        // this.welcomePage = page.locator("//a[@id='nameofuser']")
        this.welcomePage = '#nameofuser'
        this.ahdhhdhd = 'jfjfjfjfj'
        // gttfdddss rr
        //his.log.loginButton = "//button[@onclick='logIn()']"
        //this.loginURL = 'https://www.demoblaze.com/index.html';
        //https://www.demoblaze.com/index.html
        //jdjdjdj

        // NEW COMMENT
        // newest comment
        //hytg

    }

    async gotologinPage() { 
        await this.page.goto('https://www.demoblaze.com/index.html');
    }
    
 
     async login(username, password) {
       
         //await this.page.locator(this.loginButton).click()
         //await this.page.getByRole('button', { name: 'Log in' }).click();
         //await this.loginLink.click();
         await this.page.locator(this.loginLink).click();
         await this.page.locator(this.userNameInput).fill(username);
         await this.page.locator(this.passwordInput).fill(password);
       
         await this.page.locator(this.loginButton).click();

     }
     
     async verifyWelcomePage(username) {
         //let welcome = await expect(this.welcomePage).toBeVisible();
         //let dashPage = expect(this.welcomePage).toHaveText('Welcome user1.n@yahoo.com');
         //console.log(dashPage)

        // await expect(this.welcomePage).toContainText(username);
         await expect(this.page.locator('#nameofuser1'))
         
     }

}
//module.exports = { LoginPage };
