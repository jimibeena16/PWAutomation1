# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fram.spec.ts >> Select Check Box menu
- Location: tests\fram.spec.ts:89:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /check-box/
Received string:  "https://demoqa.com/checkbox"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://demoqa.com/checkbox"

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - link "Text Box":
      - /url: /text-box
      - img
      - text: Text Box
  - listitem:
    - link "Check Box":
      - /url: /checkbox
      - img
      - text: Check Box
  - listitem:
    - link "Radio Button":
      - /url: /radio-button
      - img
      - text: Radio Button
  - listitem:
    - link "Web Tables":
      - /url: /webtables
      - img
      - text: Web Tables
  - listitem:
    - link "Buttons":
      - /url: /buttons
      - img
      - text: Buttons
  - listitem:
    - link "Links":
      - /url: /links
      - img
      - text: Links
  - listitem:
    - link "Broken Links - Images":
      - /url: /broken
      - img
      - text: Broken Links - Images
  - listitem:
    - link "Upload and Download":
      - /url: /upload-download
      - img
      - text: Upload and Download
  - listitem:
    - link "Dynamic Properties":
      - /url: /dynamic-properties
      - img
      - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Check Box" [level=1]
- textbox "for screen reader"
- tree:
  - treeitem "Select Home Home":
    - checkbox "Select Home"
    - text: Home
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  4   | //reading text from Frame1
  5   | test('Frame Handling', async ({ page }) => {
  6   |     await page.goto('https://demoqa.com/frames');
  7   | 
  8   |     const frame = page.frameLocator('#frame1');
  9   |     await expect(frame.locator('#sampleHeading')).toHaveText('This is a sample page');
  10  | });
  11  | 
  12  | //reading text from Frame2
  13  | test('Read text from Frame 2', async ({ page }) => {
  14  |   await page.goto('https://demoqa.com/frames');
  15  | 
  16  |   const frame2 = page.frameLocator('#frame2');
  17  |   const text = await frame2.locator('#sampleHeading').textContent();
  18  |   console.log(text);
  19  | 
  20  | });
  21  | 
  22  | test('Read text from both frames', async ({ page }) => {
  23  |   await page.goto('https://demoqa.com/frames');
  24  | 
  25  |   const frame1 = page.frameLocator('#frame1');
  26  |   const frame2 = page.frameLocator('#frame2');
  27  |  
  28  |    await expect(frame1.locator('h1')).toBeVisible();
  29  |    await expect(frame2.locator('h1')).toBeVisible();
  30  | });
  31  | 
  32  | 
  33  | //page.frames
  34  | test('Get all frames', async ({ page }) => {
  35  |   await page.goto('https://demoqa.com/frames');
  36  | 
  37  |   await page.waitForSelector('#frame1');
  38  | 
  39  |   const frames = page.frames();
  40  |   console.log(`Total Frames: ${frames.length}`);
  41  | 
  42  |   frames.forEach((frame, index) => {
  43  |     const frameName = frame.name()
  44  |     console.log(`Frame ${index}: Name -> "${frameName}", URL -> ${frame.url()}`);
  45  |   });
  46  | });
  47  | 
  48  | test('Handle new tab', async ({ page }) => {
  49  |   await page.goto('https://demoqa.com/browser-windows');
  50  | 
  51  |   const [newPage] = await Promise.all([
  52  |     page.context().waitForEvent('page'),
  53  |     page.click('#tabButton')
  54  |   ]);
  55  | 
  56  |   await newPage.waitForLoadState();
  57  | 
  58  |   await expect(newPage.locator('#sampleHeading')).toHaveText('This is a sample page');
  59  | });
  60  | 
  61  | //new window
  62  | test('Handle new window', async ({ page }) => {
  63  |   await page.goto('https://demoqa.com/browser-windows');
  64  | 
  65  |   const [windowPage] = await Promise.all([
  66  |     page.context().waitForEvent('page'),
  67  |     page.click('#windowButton')
  68  |   ]);
  69  | 
  70  |   await windowPage.waitForLoadState();
  71  | 
  72  |   console.log(await windowPage.url());
  73  | });
  74  | 
  75  | //get all menu from left navigation
  76  | test.only('Read all left menu items', async ({ page }) => {
  77  |   await page.goto('https://demoqa.com/elements');
  78  |   const items = page.locator('.element-list .menu-list li');
  79  | 
  80  |   const count = await items.count();
  81  |   console.log(`Total items: ${count}`);
  82  | 
  83  |   for (let i = 0; i < count; i++) {
  84  |     console.log(await items.nth(i).textContent());
  85  |   }
  86  | });
  87  | 
  88  | //click specific item from list
  89  | test.only('Select Check Box menu', async ({ page }) => {
  90  |   await page.goto('https://demoqa.com/elements');
  91  |   const menuItems = page.locator('.menu-list li');
  92  | 
  93  |   const count = await menuItems.count();
  94  | 
  95  |   for (let i = 0; i < count; i++) {
  96  |     const text = await menuItems.nth(i).textContent();
  97  | 
  98  |     if (text?.trim() === 'Check Box') {
  99  |       await menuItems.nth(i).click();
  100 |       break;
  101 |     }
  102 |   }
  103 | 
> 104 |   await expect(page).toHaveURL(/check-box/);
      |                      ^ Error: expect(page).toHaveURL(expected) failed
  105 | });
  106 | 
```