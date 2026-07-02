import{test, expect} from '@playwright/test'

test.beforeEach('loginurl', async ({ page }) => { 
  await page.goto('https://www.bbc.co.uk/')

})

test('navigate to sport', async ({ page }) => { 



})

test('hello', async ({ page }) => { 

    await page.locator('[class="ssrcss-fcu5mr-NavigationLink eki2hvo14"]').click();
    //await page.getByRole('heading', { name: 'Sport' }).click();
    const elementscount = await page.locator('ul').click();
    console.log(elementscount)

})

// test('Sport heading elements count', async ({ page }) => {

//     await page.locator('.e14xdrat1').first().click();
    

// })

//jdjdjdjdjdjdj
//dd90wkwlwlwl
//diii-2jwnne


//dddhddddl