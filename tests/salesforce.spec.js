import { test, expext } from '@playwright/test';


test("salesforce login", async ({ page }) => {
	await page.goto(
		"https://orgfarm-c1290765ed-dev-ed.develop.my.salesforce.com/",
	);

	// await page.waitForTimeout(6000);
	// await page.locator("[type='email']").fill("user1.n653@agentforce.com");
	// await page.waitForTimeout(6000);
	// await page.locator("#password").fill("Olufolajimi2025!");
	// await page.locator("#Login").click();
});

test("login", async ({ page }) => {
    await page.goto('https://orgfarm-c1290765ed-dev-ed.develop.my.salesforce.com/');
	await page.waitForTimeout(6000);
	await page.locator("[type='email']").fill("user1.n653@agentforce.com");
	await page.waitForTimeout(6000);
	await page.locator("#password").fill("Olufolajimi2025!");
	await page.locator("#Login").click();
	//fhfhfhf
});