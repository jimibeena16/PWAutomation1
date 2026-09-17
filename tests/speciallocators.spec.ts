//Locator chaining -- creating a locator from another locator to narrow the search scope.
  //first locate a parent element and then locate child elements inside it.

import { test, expect } from '@playwright/test';

// Chaining using getByPlaceholder
test('Fill user details using placeholder locators', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const form = page.locator('#userForm');

  await form.getByPlaceholder('Full Name').fill('Jimi');
  await form.getByPlaceholder('name@example.com').fill('jimi@test.com');

  await expect(page.locator('#userName')).toHaveValue('Jimi');
  await expect(page.locator('#userEmail')).toHaveValue('jimi@test.com');
});

// Chaining using filter
test('chaining using filter', async({page}) => {
    await page.goto("https://demoqa.com/automation-practice-form")
// forms page
const genderSection = page.locator('#genterWrapper');
 await genderSection.getByText('Male', {exact: true}).click();
 await expect(page.locator('#gender-radio-1')).toBeChecked();
}
)

// Using first()
test('Click the first item from Elements menu', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');

  const firstMenuItem = page.locator('.menu-list li').first();
  await firstMenuItem.click();
  await expect(firstMenuItem).toHaveText('Text Box');
});

// Using first() with Web Tables
test('Verify first row contains Cierra in Web Tables', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  const rows = page.locator('tbody tr');
  console.log(await rows.first().textContent());
  await expect(rows.first()).toContainText('Cierra');
});

// Using last()
test('Verify Dynamic Properties is the last visible menu item', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');

  const lastItem = page.locator('.element-list li:visible').last();
  await expect(lastItem).toHaveText('Dynamic Properties');
  await lastItem.click();
});

// Using last() with Web Tables
test('last locator', async({page}) => {
    test.setTimeout(10000)
   await page.goto("https://demoqa.com/webtables")
   const rows = page.locator('tbody tr');
   await expect(rows.nth(1)).toContainText('Alden');
})

// Using nth()
test('Click Radio Button menu using nth locator', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');

  const thirdMenuItem = page.locator('.menu-list li').nth(2);
  await thirdMenuItem.click();
  await expect(thirdMenuItem).toHaveText('Radio Button');
});

// Using nth() on Web Tables
test('Verify second row contains Alden in Web Tables', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  const secondRow = page.locator('tbody tr').nth(1);
  await expect(secondRow).toContainText('Alden');
});

// Using and()
test('Fill name and email using combined locators with and()', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const fullName = page
    .getByPlaceholder('Full Name')
    .and(page.locator('#userName'));

  const emailTextbox = page
    .getByPlaceholder('name@example.com')
    .and(page.locator('#userEmail'));

  await fullName.fill('Jimi');
  await emailTextbox.fill('jimi@test.com');

  await expect(fullName).toHaveValue('Jimi');
  await expect(emailTextbox).toHaveValue('jimi@test.com');
});

// Using or()
test('Verify either Name or Email textbox is visible using or()', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const fullName = page.locator('#userName');
  const email = page.locator('#userEmail');

  await expect(fullName.or(email).first()).toBeVisible();

  await expect(fullName).toBeVisible();
});