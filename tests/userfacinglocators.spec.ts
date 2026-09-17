import { test, expect } from '@playwright/test';

//Built in locators

/*page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceholder()
page.getByAltText()
page.getByTitle()
page.getByTestId() */

//page.getByRole()
test('Handling getByRole', async ({ page }) => {
await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    await expect(page.getByRole("button",{name: "Get Sum"})).toBeVisible();
    await page.getByRole("button",{name:"Get Checked Value"}).click();
    
});

test('getByRole example', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.getByRole('button', { name: 'Submit' }).click();
});

//page.getByText()
test('getByText example', async ({ page }) => {
    await page.goto('https://demoqa.com/elements');
    await page.getByText('Text Box', { exact: true }).click();  //exact matching
});

//Locating Elements by Label
test('Locating Elements by Label', async ({ page }) => {
  await page.goto('https://www.testmuai.com/login/');
   await page.getByLabel('EMail Address').fill('testabc@gmail.com');
  });

test('getByLabel example', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByLabel('Male', { exact: true }).check();
});

//Locating Elements By Placeholder
test('getByPlaceholder example', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').fill('Jimi');
    await page.getByPlaceholder('name@example.com').fill('jimi@example.com');
});

//page.getByAltText()

test("Locating Elements By Alttext",async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
await page.getByAltText('TestMu AI Logo').first().click();    
});

//page.getByTitle()
test('Locating Elements By Title', async ({ page }) => {
   await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
   const logo = page.getByTitle('TestMu AI Logo');
   await expect(logo).toBeVisible();
   await logo.click();
   
});

//getBy AltText

test('Locating Elements By Alt Text', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  const logo = page.getByAltText('TestMu AI Logo');
  await expect(logo).toBeVisible();
  await logo.click();
});

//get by test id --to locate an element based on its data-testid attribute.

//<button data-testid="directions">Itinéraire</button>

//await page.getByTestId('directions').click();





