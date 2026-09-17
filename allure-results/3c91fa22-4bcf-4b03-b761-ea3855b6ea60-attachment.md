# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mous.spec.ts >> Mouse Hover
- Location: tests\mous.spec.ts:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[role="tooltip"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('[role="tooltip"]') with timeout 5000ms
  - waiting for locator('[role="tooltip"]')

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- list:
  - listitem:
    - link "Accordian":
      - /url: /accordian
      - img
      - text: Accordian
  - listitem:
    - link "Auto Complete":
      - /url: /auto-complete
      - img
      - text: Auto Complete
  - listitem:
    - link "Date Picker":
      - /url: /date-picker
      - img
      - text: Date Picker
  - listitem:
    - link "Slider":
      - /url: /slider
      - img
      - text: Slider
  - listitem:
    - link "Progress Bar":
      - /url: /progress-bar
      - img
      - text: Progress Bar
  - listitem:
    - link "Tabs":
      - /url: /tabs
      - img
      - text: Tabs
  - listitem:
    - link "Tool Tips":
      - /url: /tool-tips
      - img
      - text: Tool Tips
  - listitem:
    - link "Menu":
      - /url: /menu
      - img
      - text: Menu
  - listitem:
    - link "Select Menu":
      - /url: /select-menu
      - img
      - text: Select Menu
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Tool Tips" [level=1]
- paragraph: Practice Tool Tips
- button "Hover me to see"
- textbox "Hover me to see"
- link "Contrary":
  - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
- text: to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
- link "1.10.32":
  - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
- text: and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test.beforeEach(async ({ page }) => {
  4  |   console.log('Opening browser and navigating');
  5  |   await page.goto('https://demoqa.com/tool-tips');
  6  | }); 
  7  | 
  8  | test('Mouse Hover', async ({ page }) => {
  9  |    // await page.goto('https://demoqa.com/tool-tips');
  10 |     await page.locator('#toolTipButton').hover();
  11 |     const tooltip = page.locator('[role="tooltip"]');
  12 | 
> 13 |     await expect(tooltip).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible() failed
  14 |     await expect(tooltip).toContainText('You hovered over the Button');
  15 | });
```