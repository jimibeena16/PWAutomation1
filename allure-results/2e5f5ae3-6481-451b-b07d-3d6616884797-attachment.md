# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: special_locators.spec.ts >> last locator
- Location: tests\special_locators.spec.ts:25:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]: Elements
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
      - generic [ref=e62]: Forms
      - generic [ref=e75]: Alerts, Frame & Windows
      - generic [ref=e87]: Widgets
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e124]: Please select an item from left to start practice.
  - contentinfo [ref=e131]:
    - generic [ref=e132]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test, expect} from "@playwright/test"
  2  | 
  3  | test('chaining using placeholder', async({page}) => 
  4  |     {
  5  | await page.goto("https://demoqa.com/text-box")
  6  | const form = page.locator('#userForm');
  7  | await form.getByPlaceholder('Full Name').fill('Jimi');
  8  | await page.pause()
  9  | await form.getByPlaceholder('name@example.com').fill('jimi@test.com');
  10 | 
  11 | }
  12 | )
  13 | 
  14 | test('chaining using filter', async({page}) => {
  15 |     await page.goto("https://demoqa.com/automation-practice-form")
  16 | // forms page
  17 | const genderSection = page.locator('#genterWrapper');
  18 |  await page.pause()
  19 | await genderSection.getByText('Male', {exact: true}).click();
  20 | await page.pause()
  21 |    
  22 | }
  23 | )
  24 | 
  25 | test.only('last locator', async({page}) => {
  26 |    
  27 |  await page.goto("https://demoqa.com/elements")
> 28 |  page.waitForTimeout(50000)
     |       ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  29 | const menuItems = page.locator('.menu-list li');
  30 | //await page.pause()
  31 | await menuItems.last().click();
  32 | 
  33 | await page.screenshot({
  34 |     path:'screenshots/screenshot1.png'
  35 | })
  36 | }
  37 | 
  38 | )
```