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

Expected: "https://www.saucedemo.com/"
Received: "about:blank"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "about:blank"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Page Assertions Example', async ({ page }) => {
  4   |   // 1. Assert Login Page URL
> 5   |   await expect(page).toHaveURL('https://www.saucedemo.com/');
      |                      ^ Error: expect(page).toHaveURL(expected) failed
  6   |   
  7   |   // 2. Assert Login Page Title
  8   |   await expect(page).toHaveTitle('Swag Labs');
  9   | 
  10  |   // Perform login to reach inventory
  11  |   await page.locator('#user-name').fill('standard_user');
  12  |   await page.locator('#password').fill('secret_sauce');
  13  |   await page.locator('#login-button').click();
  14  | 
  15  |   // 3. Assert Inventory Page URL redirection
  16  |   await expect(page).toHaveURL(/.*inventory\.html/);
  17  | });
  18  | 
  19  | test('Locator State Assertions Example', async ({ page }) => {
  20  |   const usernameInput = page.locator('#user-name');
  21  |   const loginButton = page.locator('#login-button');
  22  | 
  23  |   // toBeVisible & toBeAttached
  24  |   await expect(usernameInput).toBeVisible();
  25  |   await expect(usernameInput).toBeAttached();
  26  | 
  27  |   // toBeEditable
  28  |   await expect(usernameInput).toBeEditable();
  29  | 
  30  |   // toBeEmpty (Check if input box has no text initially)
  31  |   await expect(usernameInput).toBeEmpty();
  32  | 
  33  |   // toBeEnabled
  34  |   await expect(loginButton).toBeEnabled();
  35  | 
  36  |   // Type something and verify it's no longer empty
  37  |   await usernameInput.fill('locked_out_user');
  38  |   await expect(usernameInput).not.toBeEmpty();
  39  | 
  40  |   // Check element disabled state (Locked out user flow)
  41  |   await page.locator('#password').fill('secret_sauce');
  42  |   await loginButton.click();
  43  |   
  44  |   const errorMessage = page.locator('[data-test="error"]');
  45  |   await expect(errorMessage).toBeVisible();
  46  | });
  47  | 
  48  | test('Locator Content & Text Assertions Example', async ({ page }) => {
  49  |   // Login first
  50  |   await page.locator('#user-name').fill('standard_user');
  51  |   await page.locator('#password').fill('secret_sauce');
  52  |   await page.locator('#login-button').click();
  53  | 
  54  |   const titleHeader = page.locator('.title');
  55  |   
  56  |   // toHaveText (Exact match check)
  57  |   await expect(titleHeader).toHaveText('Products');
  58  | 
  59  |   // toContainText (Partial match check)
  60  |   await expect(titleHeader).toContainText('Prod');
  61  | 
  62  |   // toHaveValue (Verifying pre-filled or typed input values)
  63  |   const searchOrFilter = page.locator('.product_sort_container');
  64  |   await searchOrFilter.selectOption('hilo'); // High to Low price
  65  |   await expect(searchOrFilter).toHaveValue('hilo');
  66  | });
  67  | 
  68  |  
  69  | test('DemoQA Radio Button Selection Assertions', async ({ page }) => {
  70  |   await page.goto('https://demoqa.com/radio-button');
  71  | 
  72  |   const yesRadioButton = page.locator('#yesRadio');
  73  |   const impressiveRadioButton = page.locator('#impressiveRadio');
  74  |   const outputResult = page.locator('.text-success');
  75  | 
  76  |   // 1. Assert initial state: Radio buttons should not be checked yet
  77  |   await expect(yesRadioButton).not.toBeChecked();
  78  |   await expect(impressiveRadioButton).not.toBeChecked();
  79  | 
  80  |   // Click the label for 'Yes' (since the actual input is hidden behind custom CSS)
  81  |   await page.locator('label[for="yesRadio"]').click();
  82  | 
  83  |   // 2. Assert 'toBeChecked()' matches positive state
  84  |   await expect(yesRadioButton).toBeChecked();
  85  |   
  86  |   // Verify UI text response element reflects the selection
  87  |   await expect(outputResult).toHaveText('Yes');
  88  | 
  89  |   // Switch selection to 'Impressive'
  90  |   await page.locator('label[for="impressiveRadio"]').click();
  91  | 
  92  |   // 3. Assert state changes correctly
  93  |   await expect(impressiveRadioButton).toBeChecked();
  94  |   await expect(yesRadioButton).not.toBeChecked(); // 'Yes' should now be unchecked
  95  |   await expect(outputResult).toHaveText('Impressive');
  96  | });
  97  | 
  98  |  
  99  | test('DemoQA Practice Form Checkbox Assertions', async ({ page }) => {
  100 |   await page.goto('https://demoqa.com/automation-practice-form');
  101 | 
  102 |   const sportsCheckbox = page.locator('#hobbies-checkbox-1'); // Sports
  103 |   const readingCheckbox = page.locator('#hobbies-checkbox-2'); // Reading
  104 | 
  105 |   // 1. Verify checkboxes are unchecked by default
```