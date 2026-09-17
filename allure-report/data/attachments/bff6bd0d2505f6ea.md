# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> has title4
- Location: tests\demo.spec.ts:38:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.element-list li:visible').last()
Expected: "Broken Links - Images"
Received: "Dynamic Properties"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" locator('.element-list li:visible').last() with timeout 5000ms
  - waiting for locator('.element-list li:visible').last()
    13 × locator resolved to <li id="item-8" class="btn btn-light active">…</li>
       - unexpected value "Dynamic Properties"

```

```yaml
- listitem:
  - link "Dynamic Properties":
    - /url: /dynamic-properties
    - img
    - text: Dynamic Properties
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
  11 | //Chaining using filter
  12 | test('select Male using filter', async ({ page }) => {
  13 |   await page.goto('https://demoqa.com/automation-practice-form');
  14 | 
  15 |   await page
  16 |     .locator('#genterWrapper label')
  17 |     .filter({ hasText: /^Male$/ })
  18 |     .click();
  19 | });
  20 | 
  21 | //using first()--when multiple elements match and want the first one
  22 | test('has title2', async ({ page }) => {
  23 | await page.goto("https://demoqa.com/elements")
  24 | const menuItems = page.locator('.menu-list li');
  25 | await menuItems.first().click();
  26 | //same as
  27 | await page.locator('.menu-list li').nth(0).click();
  28 |  });
  29 | 
  30 | 
  31 | test('has title3', async ({ page }) => {
  32 | //webtables
  33 | await page.goto("https://demoqa.com/webtables")
  34 | const rows = page.locator('tbody tr');
  35 | console.log(await rows.first().textContent());
  36 |  });
  37 | 
  38 | test.only('has title4', async ({ page }) => { //use scrollintoview
  39 | //using last()--when we need last matching element
  40 | await page.goto("https://demoqa.com/elements")
  41 | const lastItem = page.locator('.element-list li:visible').last()
  42 | await lastItem.click();
> 43 | await expect(lastItem).toHaveText('Broken Links - Images');
     |                        ^ Error: expect(locator).toHaveText(expected) failed
  44 |  });
  45 | 
  46 |  test('has title5', async ({ page }) => {
  47 | //webtables
  48 | await page.goto("https://demoqa.com/webtables")
  49 | const rows = page.locator('tbody tr');
  50 | await expect(rows.last()).toContainText('Kierra');
  51 | });
  52 | ``
  53 | test('has title6', async ({ page }) => {
  54 | //Using nth -- Used to select an element by index, starts from 0
  55 | await page.goto("https://demoqa.com/elements")
  56 | await page.locator('.menu-list li').nth(2).click();
  57 | });
  58 | 
  59 | test('has title7', async ({ page }) => {
  60 | //webtables
  61 | await page.goto("https://demoqa.com/webtables")
  62 | const rows = page.locator('tbody tr');
  63 | await expect(rows.nth(1)).toContainText('Alden');
  64 | });
  65 | 
  66 | test('has title8', async ({ page }) => {
  67 | //Using and() -- combines 2 locators,Element must satisfy both conditions
  68 | await page.goto('https://demoqa.com/text-box');
  69 | const fullName = page.getByPlaceholder('Full Name').and(page.locator('#userName'));
  70 | await fullName.fill('Jimi');
  71 | 
  72 | const emailTextbox = page.getByPlaceholder('name@example.com').and(page.locator('#userEmail'));
  73 | await emailTextbox.fill('jimi@test.com');
  74 | });
  75 | 
  76 | test('has title9', async ({ page }) => {
  77 | //Using or() -- Matches either locator, when UI can display one of multiple elements
  78 | await page.goto('https://demoqa.com/text-box');
  79 | const fullName = page.locator('#userName');
  80 | const email = page.locator('#userEmail');
  81 | await expect(fullName.or (email).first() ).toBeVisible();
  82 | });
  83 | 
```