import {expect} from '@playwright/test'
 export class LoginPage {

    constructor(page) { 
        this.page = page;
        this.loginLink =page.locator( "//a[@id='login2']");
        //this.loginLink = page.getByRole('link', { name: 'Log in' })
        
        this.userNameInput = page.locator("#loginusername");
		this.passwordInput = page.locator("#loginpassword");
		this.loginButton = page.locator("//button[@onclick='logIn()']");
				//this.welcomePage = page.getByRole("heading", { name: 'Welcome user1.n@yahoo.com' });
				// this.welcomePage = page.locator("//a[@id='nameofuser']")
		this.welcomePage = "#nameofuser";
        
        
    

        

    }

    async gotologinPage() { 
        await this.page.goto('https://www.demoblaze.com/index.html');
        
    }
    
 
     async login(username, password) {
       
         
         //await this.page.locator(this.loginLink).click();
         await this.loginLink.click()
         await this.userNameInput.fill(username);
         await this.passwordInput.fill(password);
       
         await this.loginButton.click();

     }
     
     async verifyWelcomePage(username) {
         //let welcome = await expect(this.welcomePage).toBeVisible();
         //let dashPage = expect(this.welcomePage).toHaveText('Welcome user1.n@yahoo.com');
         //console.log(dashPage)
         //await 
         //await 

        // await expect(this.welcomePage).toContainText(username);
         await expect(this.page.locator('#nameofuser1'))
         
     }

}
//module.exports = { LoginPage };
