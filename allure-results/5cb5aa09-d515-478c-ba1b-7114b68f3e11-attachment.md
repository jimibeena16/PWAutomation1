# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: window.spec.ts >> Handling a new tab on DemoQA
- Location: tests\window.spec.ts:3:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: page.click: Test timeout of 3000ms exceeded.
Call log:
  - waiting for locator('#tabButton')
    - locator resolved to <button type="button" id="tabButton" class="btn btn-primary">New Tab</button>

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
      - generic [ref=e22]: Forms
      - generic [ref=e35]:
        - generic [ref=e36] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e48]:
          - listitem [ref=e49] [cursor=pointer]:
            - link "Browser Windows" [ref=e50]:
              - /url: /browser-windows
          - listitem [ref=e53] [cursor=pointer]:
            - link "Alerts" [ref=e54]:
              - /url: /alerts
          - listitem [ref=e57] [cursor=pointer]:
            - link "Frames" [ref=e58]:
              - /url: /frames
          - listitem [ref=e61] [cursor=pointer]:
            - link "Nested Frames" [ref=e62]:
              - /url: /nestedframes
          - listitem [ref=e65] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e66]:
              - /url: /modal-dialogs
      - generic [ref=e69]: Widgets
      - generic [ref=e82]: Interactions
      - generic [ref=e94]: Book Store Application
    - generic [ref=e107]:
      - heading "Browser Windows" [level=1] [ref=e108]
      - button "New Tab" [ref=e110] [cursor=pointer]
      - button "New Window" [ref=e112] [cursor=pointer]
      - button "New Window Message" [ref=e114] [cursor=pointer]
  - contentinfo [ref=e121]:
    - generic [ref=e122]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test('Handling a new tab on DemoQA', async ({ context, page }) => {
  4  |  
  5  |   await page.goto('https://demoqa.com/browser-windows');
  6  | 
  7  |     const [newTab] = await Promise.all([
  8  |     context.waitForEvent('page'), 
> 9  |     page.click('#tabButton') 
     |          ^ Error: page.click: Test timeout of 3000ms exceeded.
  10 |   ]);
  11 | 
  12 |    await newTab.waitForLoadState(); 
  13 | 
  14 |    const headingText = await newTab.locator('#sampleHeading').textContent();
  15 |   expect(headingText).toContain('This is a sample page');
  16 | 
  17 |     await expect(page.locator('#tabButton')).toBeVisible();
  18 | });
  19 | 
  20 | //new window
  21 | test('Handle new window', async ({ page }) => {
  22 |   await page.goto('https://demoqa.com/browser-windows');
  23 | 
  24 |   const [windowPage] = await Promise.all([
  25 |     page.context().waitForEvent('page'),
  26 |     page.click('#windowButton')
  27 |   ]);
  28 | 
  29 |   await windowPage.waitForLoadState();
  30 | 
  31 |   console.log(await windowPage.url());
  32 | });
  33 | 
  34 | 
  35 | 
```