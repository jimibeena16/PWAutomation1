# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alerts.spec.ts >> page.once example
- Location: tests\alerts.spec.ts:64:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 3000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]:
        - generic [ref=e38] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
      - generic [ref=e71]: Widgets
      - generic [ref=e84]: Interactions
      - generic [ref=e96]: Book Store Application
    - generic [ref=e109]:
      - heading "Alerts" [level=1] [ref=e110]
      - generic [ref=e111]:
        - generic [ref=e112]: Click Button to see alert
        - button "Click me" [ref=e114] [cursor=pointer]
      - generic [ref=e115]:
        - generic [ref=e116]: On button click, alert will appear after 5 seconds
        - button "Click me" [active] [ref=e118] [cursor=pointer]
      - generic [ref=e119]:
        - generic [ref=e120]: On button click, confirm box will appear
        - button "Click me" [ref=e122] [cursor=pointer]
      - generic [ref=e123]:
        - generic [ref=e124]: On button click, prompt box will appear
        - button "Click me" [ref=e126] [cursor=pointer]
  - contentinfo [ref=e133]:
    - generic [ref=e134]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | //handling simple alert
  4  | test('DemoQA Simple Alert Example', async ({ page }) => {
  5  |   await page.goto('https://demoqa.com/alerts');
  6  | 
  7  |   page.on('dialog', async dialog => {
  8  |     expect(dialog.type()).toBe('alert');
  9  |     expect(dialog.message()).toBe('You clicked a button');
  10 |     await dialog.accept(); // Clicks OK
  11 |   });
  12 | 
  13 |    await page.locator('#alertButton').click();
  14 | });
  15 | 
  16 | //handling timer alert
  17 | test('DemoQA Timer Alert Example', async ({ page }) => {
  18 |   await page.goto('https://demoqa.com/alerts');
  19 | 
  20 |     page.on('dialog', async dialog => {
  21 |     console.log(`Timer Alert Message: ${dialog.message()}`);
  22 |     await dialog.accept();
  23 |   });
  24 | 
  25 |   // Trigger the alert that takes 5 seconds to show up
  26 |   await page.locator('#timerAlertButton').click();
  27 | 
  28 |  
  29 | });
  30 | 
  31 | //handling confirmation box 
  32 | test('DemoQA Confirmation Box - Dismiss Example', async ({ page }) => {
  33 |   await page.goto('https://demoqa.com/alerts');
  34 | 
  35 |     page.on('dialog', async dialog => {
  36 |     expect(dialog.type()).toBe('confirm');
  37 |     expect(dialog.message()).toBe('Do you confirm action?');
  38 |     await dialog.dismiss(); 
  39 |   });
  40 | 
  41 |   await page.locator('#confirmButton').click();
  42 | 
  43 |     await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
  44 | });
  45 | 
  46 | //handling prompt -- 
  47 | test('DemoQA Prompt Box Example', async ({ page }) => {
  48 |   await page.goto('https://demoqa.com/alerts');
  49 | 
  50 |   page.on('dialog', async dialog => {
  51 |     expect(dialog.type()).toBe('prompt');
  52 |     expect(dialog.message()).toBe('Please enter your name');
  53 |     
  54 |     // Type text into the prompt box and click OK
  55 |     await dialog.accept('Playwright Automation');
  56 |   });
  57 | 
  58 |   await page.locator('#promtButton').click();
  59 | 
  60 |    await expect(page.locator('#promptResult')).toHaveText('You entered Playwright Automation');
  61 | });
  62 | 
  63 | 
  64 | test('page.once example', async ({ page }) => {
  65 |   await page.goto('https://demoqa.com/alerts');
  66 |   page.once('dialog', async dialog => {
  67 |     console.log('Type:', dialog.type());
  68 |     console.log('Message:', dialog.message());
  69 |     await dialog.accept();
  70 |   });
  71 |   // First alert
  72 |   await page.click('#alertButton');
  73 |   // Second alert after 5 seconds
  74 |   await page.click('#timerAlertButton'); //never runs, auto dismiss if in page.once
> 75 |   await page.waitForTimeout(6000)
     |              ^ Error: page.waitForTimeout: Test timeout of 3000ms exceeded.
  76 |   //await page.getByRole('button', {name: 'Click me' }).nth(1).click();
  77 | });
  78 | 
```