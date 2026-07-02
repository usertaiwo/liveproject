import { test, expect } from '@playwright/test'

test.beforeEach('main t', async ({ page }) => { 
  await page.goto('https://accounts.saucelabs.com/am/XUI/#login/')

})

test('locator', async ({ page }) => {
    //by Tag Name
  await page.locator('input1').nth(3).click();
  await page.locator('.login__title').click()

  
})

test('select an item from a page', async ({ page }) => {
  
  const pageconst = await page.locator('[class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1kafhpn"]').allTextContents()
  expect(pageconst).toContain('Pricing')
})