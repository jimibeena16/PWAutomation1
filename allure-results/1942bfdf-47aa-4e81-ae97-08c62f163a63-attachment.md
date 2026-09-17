# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> has title5
- Location: tests\demo.spec.ts:47:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('tbody tr').last()
Expected substring: "Alden"
Received string:    "KierraGentry29kierra@example.com2000Legal"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('tbody tr').last() with timeout 5000ms
  - waiting for locator('tbody tr').last()
    12 × locator resolved to <tr>…</tr>
       - unexpected value "KierraGentry29kierra@example.com2000Legal"

```

```yaml
- row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete":
  - cell "Kierra"
  - cell "Gentry"
  - cell "29"
  - cell "kierra@example.com"
  - cell "2000"
  - cell "Legal"
  - cell "EditDelete":
    - img
    - img
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('has title', async ({ page }) => {
  4  | //Chaining using getByPlaceholder
  5  | await page.goto("https://demoqa.com/text-box")
  6  | const form = page.locator('#userForm');
  7  | await form.getByPlaceholder('Full Name').fill('Jimi');
  8  | await form.getByPlaceholder('name@example.com').fill('jimi@test.com');
  9  | });
  10 | 
  11 | test('has title1', async ({ page }) => {
  12 | //Chaining using filter
  13 | await page.goto("https://demoqa.com/automation-practice-form")
  14 | // forms page
  15 | const genderSection = page.locator('#genterWrapper');
  16 | 
  17 | await genderSection
  18 |     .locator('label')
  19 |     .filter({ hasText: 'Male' })
  20 |     .click();
  21 | 
  22 |     });
  23 | 
  24 | //using first()--when multiple elements match and want the first one
  25 | test('has title2', async ({ page }) => {
  26 | await page.goto("https://demoqa.com/elements")
  27 | const menuItems = page.locator('.menu-list li');
  28 | await menuItems.first().click();
  29 | //same as
  30 | await page.locator('.menu-list li').nth(0).click();
  31 |  });
  32 | 
  33 | test('has title3', async ({ page }) => {
  34 | //webtables
  35 | await page.goto("https://demoqa.com/webtables")
  36 | const rows = page.locator('tbody tr');
  37 | console.log(await rows.first().textContent());
  38 |  });
  39 | 
  40 | test('has title4', async ({ page }) => {
  41 | //using last()--when we need last matching element
  42 | await page.goto("https://demoqa.com/elements")
  43 | const menuItems = page.locator('.menu-list li');
  44 | await menuItems.last().click();
  45 |  });
  46 | 
  47 |  test('has title5', async ({ page }) => {
  48 | //webtables
  49 | await page.goto("https://demoqa.com/webtables")
  50 | const rows = page.locator('tbody tr');
> 51 | await expect(rows.last()).toContainText('Alden');
     |                           ^ Error: expect(locator).toContainText(expected) failed
  52 | });
  53 | ``
  54 | test('has title6', async ({ page }) => {
  55 | //Using nth -- Used to select an element by index, starts from 0
  56 | await page.goto("https://demoqa.com/elements")
  57 | await page.locator('.menu-list li').nth(2).click();
  58 | });
  59 | 
  60 | test('has title7', async ({ page }) => {
  61 | //webtables
  62 | await page.goto("https://demoqa.com/webtables")
  63 | const rows = page.locator('.rt-tbody .rt-tr-group');
  64 | await expect(rows.nth(1)).toContainText('Alden');
  65 | });
  66 | 
  67 | test('has title8', async ({ page }) => {
  68 | //Using and() -- combines 2 locators,Element must satisfy both conditions
  69 | await page.goto('https://demoqa.com/text-box');
  70 | const fullName = page.getByPlaceholder('Full Name').and(page.locator('#userName'));
  71 | await fullName.fill('Jimi');
  72 | 
  73 | const emailTextbox = page.getByPlaceholder('name@example.com').and(page.locator('#userEmail'));
  74 | await emailTextbox.fill('jimi@test.com');
  75 | });
  76 | 
  77 | test('has title9', async ({ page }) => {
  78 | //Using or() -- Matches either locator, when UI can display one of multiple elements
  79 | await page.goto('https://demoqa.com/text-box');
  80 | const fullName = page.locator('#userName');
  81 | const email = page.locator('#userEmail');
  82 | await expect(fullName.or (email).first() ).toBeVisible();
  83 | });
  84 | 
```