import { test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
//import { loginpage} from '../pages/LoginPage.js';

test.only('Login to the application', async ({ page }) => {
	const loginpage = new LoginPage(page);
	await loginpage.gotologinPage();
	await page.waitForTimeout(3000);
	await loginpage.login("user1.n@yahoo.com", "Oddy2026");
	await page.waitForTimeout(3000);
	await loginpage.verifyWelcomePage("user1.n@yahoo.com");
	await page.waitForTimeout(3000);
	//dddhdhd
	//ddhdhd

	// const welcomeText = await page.locator('#nameofuser');
	//await expect(welcomeText).toContainText('Welcome user1.n@yahoo.com1');
})