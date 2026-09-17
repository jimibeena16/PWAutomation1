# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: text.spec.ts >> Read text
- Location: tests\text.spec.ts:3:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: page.fill: Test timeout of 3000ms exceeded.
Call log:
  - waiting for locator('#userName')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11] [cursor=pointer]: Elements
        - list [ref=e23]:
          - listitem [ref=e24] [cursor=pointer]:
            - link "Text Box" [ref=e25]:
              - /url: /text-box
          - listitem [ref=e28] [cursor=pointer]:
            - link "Check Box" [ref=e29]:
              - /url: /checkbox
          - listitem [ref=e32] [cursor=pointer]:
            - link "Radio Button" [ref=e33]:
              - /url: /radio-button
          - listitem [ref=e36] [cursor=pointer]:
            - link "Web Tables" [ref=e37]:
              - /url: /webtables
          - listitem [ref=e40] [cursor=pointer]:
            - link "Buttons" [ref=e41]:
              - /url: /buttons
          - listitem [ref=e44] [cursor=pointer]:
            - link "Links" [ref=e45]:
              - /url: /links
          - listitem [ref=e48] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e49]:
              - /url: /broken
          - listitem [ref=e52] [cursor=pointer]:
            - link "Upload and Download" [ref=e53]:
              - /url: /upload-download
          - listitem [ref=e56] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e57]:
              - /url: /dynamic-properties
      - generic [ref=e60]: Forms
      - generic [ref=e73]: Alerts, Frame & Windows
      - generic [ref=e85]: Widgets
      - generic [ref=e98]: Interactions
      - generic [ref=e110]: Book Store Application
    - generic [ref=e122]:
      - heading "Text Box" [level=1] [ref=e123]
      - generic [ref=e125]:
        - generic [ref=e126]:
          - generic [ref=e127]: Full Name
          - textbox "Full Name" [ref=e130]
        - generic [ref=e131]:
          - generic [ref=e132]: Email
          - textbox "name@example.com" [ref=e135]
        - generic [ref=e136]:
          - generic [ref=e137]: Current Address
          - textbox "Current Address" [ref=e140]
        - generic [ref=e141]:
          - generic [ref=e142]: Permanent Address
          - textbox [ref=e145]
        - button "Submit" [ref=e148] [cursor=pointer]
  - contentinfo [ref=e155]:
    - generic [ref=e156]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test('Read text', async ({ page }) => {
  4  |   await page.goto('https://demoqa.com/text-box');
  5  | 
> 6  |   await page.fill('#userName', 'Jimi');
     |              ^ Error: page.fill: Test timeout of 3000ms exceeded.
  7  |   await page.click('#submit');
  8  | 
  9  |   const text = await page.locator('#name').textContent(); //innerText
  10 | 
  11 |   console.log(text);
  12 | });
```