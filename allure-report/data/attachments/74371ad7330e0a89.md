# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> has title1
- Location: tests\demo.spec.ts:11:6

# Error details

```
Error: locator.click: Error: strict mode violation: locator('#genterWrapper').locator('label').filter({ hasText: 'Male' }) resolved to 2 elements:
    1) <label title="" for="gender-radio-1" class="form-check-label">Male</label> aka getByText('Male', { exact: true })
    2) <label title="" for="gender-radio-2" class="form-check-label">Female</label> aka getByText('Female')

Call log:
  - waiting for locator('#genterWrapper').locator('label').filter({ hasText: 'Male' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]: Elements
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]: Forms
        - list [ref=e36]:
          - listitem [ref=e37] [cursor=pointer]:
            - link "Practice Form" [ref=e38]:
              - /url: /automation-practice-form
      - generic [ref=e41]: Alerts, Frame & Windows
      - generic [ref=e53]: Widgets
      - generic [ref=e66]: Interactions
      - generic [ref=e78]: Book Store Application
    - generic [ref=e91]:
      - heading "Practice Form" [level=1] [ref=e92]
      - heading "Student Registration Form" [level=5] [ref=e93]
      - generic [ref=e94]:
        - generic [ref=e95]:
          - generic [ref=e96]: Name
          - textbox "First Name" [ref=e99]
          - textbox "Last Name" [ref=e101]
        - generic [ref=e102]:
          - generic [ref=e103]: Email
          - textbox "name@example.com" [ref=e106]
        - generic [ref=e107]:
          - generic [ref=e108]: Gender
          - generic [ref=e109]:
            - generic [ref=e110]:
              - radio "Male" [ref=e111]
              - generic [ref=e112]: Male
            - generic [ref=e113]:
              - radio "Female" [ref=e114]
              - generic [ref=e115]: Female
            - generic [ref=e116]:
              - radio "Other" [ref=e117]
              - generic [ref=e118]: Other
        - generic [ref=e119]:
          - generic [ref=e120]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e123]
        - generic [ref=e124]:
          - generic [ref=e125]: Date of Birth
          - textbox [ref=e130]: 10 Sep 2026
        - generic [ref=e131]:
          - generic [ref=e132]: Subjects
          - generic [ref=e135]:
            - log [ref=e137]
            - combobox [ref=e141]
        - generic [ref=e144]:
          - generic [ref=e145]: Hobbies
          - generic [ref=e147]:
            - generic [ref=e148]:
              - checkbox "Sports" [ref=e149]
              - generic [ref=e150]: Sports
            - generic [ref=e151]:
              - checkbox "Reading" [ref=e152]
              - generic [ref=e153]: Reading
            - generic [ref=e154]:
              - checkbox "Music" [ref=e155]
              - generic [ref=e156]: Music
        - generic [ref=e157]:
          - generic [ref=e158]: Picture
          - button "Choose File" [ref=e161] [cursor=pointer]
        - generic [ref=e162]:
          - generic [ref=e163]: Current Address
          - textbox "Current Address" [ref=e166]
        - generic [ref=e167]:
          - generic [ref=e168]: State and City
          - generic [ref=e171]:
            - log [ref=e173]
            - generic [ref=e175]:
              - generic [ref=e176]: Select State
              - combobox [ref=e178]
          - generic [ref=e184]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=e187] [cursor=pointer]
  - contentinfo [ref=e194]:
    - generic [ref=e195]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
  11 | test.only('has title1', async ({ page }) => {
  12 | //Chaining using filter
  13 | await page.goto("https://demoqa.com/automation-practice-form")
  14 | // forms page
  15 | const genderSection = page.locator('#genterWrapper');
  16 | 
  17 | await genderSection.locator('label').filter({hasText: 'Male'})
> 18 |     .click();
     |      ^ Error: locator.click: Error: strict mode violation: locator('#genterWrapper').locator('label').filter({ hasText: 'Male' }) resolved to 2 elements:
  19 | 
  20 |     });
  21 | 
  22 | 
  23 | test.only('select Male using filter', async ({ page }) => {
  24 |   await page.goto('https://demoqa.com/automation-practice-form');
  25 | 
  26 |   await page
  27 |     .locator('#genterWrapper label')
  28 |     .filter({ hasText: /^Male$/ })
  29 |     .click();
  30 | });
  31 | 
  32 | //using first()--when multiple elements match and want the first one
  33 | test('has title2', async ({ page }) => {
  34 | await page.goto("https://demoqa.com/elements")
  35 | const menuItems = page.locator('.menu-list li');
  36 | await menuItems.first().click();
  37 | //same as
  38 | await page.locator('.menu-list li').nth(0).click();
  39 |  });
  40 | 
  41 | 
  42 | test('has title3', async ({ page }) => {
  43 | //webtables
  44 | await page.goto("https://demoqa.com/webtables")
  45 | const rows = page.locator('tbody tr');
  46 | console.log(await rows.first().textContent());
  47 |  });
  48 | 
  49 | test('has title4', async ({ page }) => { //use scrollintoview
  50 | //using last()--when we need last matching element
  51 | await page.goto("https://demoqa.com/elements")
  52 | const menuItems = page.locator('.menu-list li');
  53 | await menuItems.last().click();
  54 |  });
  55 | 
  56 |  test('has title5', async ({ page }) => {
  57 | //webtables
  58 | await page.goto("https://demoqa.com/webtables")
  59 | const rows = page.locator('tbody tr');
  60 | await expect(rows.last()).toContainText('Kierra');
  61 | });
  62 | ``
  63 | test('has title6', async ({ page }) => {
  64 | //Using nth -- Used to select an element by index, starts from 0
  65 | await page.goto("https://demoqa.com/elements")
  66 | await page.locator('.menu-list li').nth(2).click();
  67 | });
  68 | 
  69 | test('has title7', async ({ page }) => {
  70 | //webtables
  71 | await page.goto("https://demoqa.com/webtables")
  72 | const rows = page.locator('tbody tr');
  73 | await expect(rows.nth(1)).toContainText('Alden');
  74 | });
  75 | 
  76 | test('has title8', async ({ page }) => {
  77 | //Using and() -- combines 2 locators,Element must satisfy both conditions
  78 | await page.goto('https://demoqa.com/text-box');
  79 | const fullName = page.getByPlaceholder('Full Name').and(page.locator('#userName'));
  80 | await fullName.fill('Jimi');
  81 | 
  82 | const emailTextbox = page.getByPlaceholder('name@example.com').and(page.locator('#userEmail'));
  83 | await emailTextbox.fill('jimi@test.com');
  84 | });
  85 | 
  86 | test('has title9', async ({ page }) => {
  87 | //Using or() -- Matches either locator, when UI can display one of multiple elements
  88 | await page.goto('https://demoqa.com/text-box');
  89 | const fullName = page.locator('#userName');
  90 | const email = page.locator('#userEmail');
  91 | await expect(fullName.or (email).first() ).toBeVisible();
  92 | });
  93 | 
```