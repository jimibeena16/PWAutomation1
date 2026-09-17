# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo2.spec.ts >> Page Assertions Example
- Location: tests\demo2.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html/"
Received: "https://www.saucedemo.com/inventory.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/inventory.html"

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs Products Name (A to Z)
- combobox:
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- link "Sauce Labs Backpack":
  - /url: "#"
  - img "Sauce Labs Backpack"
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- link "Sauce Labs Bike Light":
  - /url: "#"
  - img "Sauce Labs Bike Light"
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
  - img "Sauce Labs Bolt T-Shirt"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "Add to cart"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
  - img "Sauce Labs Fleece Jacket"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Add to cart"
- link "Sauce Labs Onesie":
  - /url: "#"
  - img "Sauce Labs Onesie"
- link "Sauce Labs Onesie":
  - /url: "#"
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "Add to cart"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
  - img "Test.allTheThings() T-Shirt (Red)"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Page Assertions Example', async ({ page }) => {
  4   | 
  5   |     await page.goto('https://www.saucedemo.com/');
  6   |   // 1. Assert Login Page URL
  7   |   await expect(page).toHaveURL('https://www.saucedemo.com/');
  8   |   
  9   |   // 2. Assert Login Page Title
  10  |   await expect(page).toHaveTitle('Swag Labs');
  11  | 
  12  |   // Perform login to reach inventory
  13  |   await page.locator('#user-name').fill('standard_user');
  14  |   await page.locator('#password').fill('secret_sauce');
  15  |   await page.locator('#login-button').click();
  16  | 
  17  |   // 3. Assert Inventory Page URL redirection
> 18  |   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html/");
      |                      ^ Error: expect(page).toHaveURL(expected) failed
  19  | });
  20  | 
  21  | test('Locator State Assertions Example', async ({ page }) => {
  22  |   await page.goto('https://www.saucedemo.com/');
  23  | 
  24  |   const usernameInput = page.locator('#user-name');
  25  |   const loginButton = page.locator('#login-button');
  26  | 
  27  |   // toBeVisible & toBeAttached
  28  |   await expect(usernameInput).toBeVisible();
  29  |   await expect(usernameInput).toBeAttached();
  30  | 
  31  |   // toBeEditable
  32  |   await expect(usernameInput).toBeEditable();
  33  | 
  34  |   // toBeEmpty (Check if input box has no text initially)
  35  |   await expect(usernameInput).toBeEmpty();
  36  | 
  37  |   // toBeEnabled
  38  |   await expect(loginButton).toBeEnabled();
  39  | 
  40  |   // Type something and verify it's no longer empty
  41  |   await usernameInput.fill('locked_out_user');
  42  |   await expect(usernameInput).not.toBeEmpty();
  43  | 
  44  |   // Check element disabled state (Locked out user flow)
  45  |   await page.locator('#password').fill('secret_sauce');
  46  |   await loginButton.click();
  47  |   
  48  |   const errorMessage = page.locator('[data-test="error"]');
  49  |   await expect(errorMessage).toBeVisible();
  50  | });
  51  | 
  52  | test('Locator Content & Text Assertions Example', async ({ page }) => {
  53  | 
  54  |      await page.goto('https://www.saucedemo.com/');
  55  |   // Login first
  56  |   await page.locator('#user-name').fill('standard_user');
  57  |   await page.locator('#password').fill('secret_sauce');
  58  |   await page.locator('#login-button').click();
  59  | 
  60  |   const titleHeader = page.locator('.title');
  61  |   
  62  |   // toHaveText (Exact match check)
  63  |   await expect(titleHeader).toHaveText('Products');
  64  | 
  65  |   // toContainText (Partial match check)
  66  |   await expect(titleHeader).toContainText('Prod');
  67  | 
  68  |   // toHaveValue (Verifying pre-filled or typed input values)
  69  |   const searchOrFilter = page.locator('.product_sort_container');
  70  |   await searchOrFilter.selectOption('hilo'); // High to Low price
  71  |   await expect(searchOrFilter).toHaveValue('hilo');
  72  | });
  73  | 
  74  |  
  75  | test('DemoQA Radio Button Selection Assertions', async ({ page }) => {
  76  |   await page.goto('https://demoqa.com/radio-button');
  77  | 
  78  |   const yesRadioButton = page.locator('#yesRadio');
  79  |   const impressiveRadioButton = page.locator('#impressiveRadio');
  80  |   const outputResult = page.locator('.text-success');
  81  | 
  82  |   // 1. Assert initial state: Radio buttons should not be checked yet
  83  |   await expect(yesRadioButton).not.toBeChecked();
  84  |   await expect(impressiveRadioButton).not.toBeChecked();
  85  | 
  86  |   // Click the label for 'Yes' (since the actual input is hidden behind custom CSS)
  87  |   await page.locator('label[for="yesRadio"]').click();
  88  | 
  89  |   // 2. Assert 'toBeChecked()' matches positive state
  90  |   await expect(yesRadioButton).toBeChecked();
  91  |   
  92  |   // Verify UI text response element reflects the selection
  93  |   await expect(outputResult).toHaveText('Yes');
  94  | 
  95  |   // Switch selection to 'Impressive'
  96  |   await page.locator('label[for="impressiveRadio"]').click();
  97  | 
  98  |   // 3. Assert state changes correctly
  99  |   await expect(impressiveRadioButton).toBeChecked();
  100 |   await expect(yesRadioButton).not.toBeChecked(); // 'Yes' should now be unchecked
  101 |   await expect(outputResult).toHaveText('Impressive');
  102 | });
  103 | 
  104 |  
  105 | test('DemoQA Practice Form Checkbox Assertions', async ({ page }) => {
  106 |   await page.goto('https://demoqa.com/automation-practice-form');
  107 | 
  108 |   const sportsCheckbox = page.locator('#hobbies-checkbox-1'); // Sports
  109 |   const readingCheckbox = page.locator('#hobbies-checkbox-2'); // Reading
  110 | 
  111 |   // 1. Verify checkboxes are unchecked by default
  112 |   await expect(sportsCheckbox).not.toBeChecked();
  113 |   await expect(readingCheckbox).not.toBeChecked();
  114 | 
  115 |   // Select a checkbox by clicking its corresponding <label>
  116 |   await page.locator('label[for="hobbies-checkbox-1"]').click();
  117 | 
  118 |   // 2. Verify 'toBeChecked()' becomes true for Sports, but remains false for Reading
```