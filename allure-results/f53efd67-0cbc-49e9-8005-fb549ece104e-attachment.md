# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filehandling.spec.ts >> Download file
- Location: tests\filehandling.spec.ts:16:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: download.saveAs: canceled
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
    - generic [ref=e125]:
      - heading "Upload and Download" [level=1] [ref=e126]
      - button "Download" [active] [ref=e128] [cursor=pointer]
      - button "Choose File" [ref=e131] [cursor=pointer]
  - contentinfo [ref=e138]:
    - generic [ref=e139]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  |   test('Upload file', async ({ page }) => {
  4  |   await page.goto('https://demoqa.com/upload-download');
  5  | 
  6  |   await page.setInputFiles('#uploadFile','tests/files/uploadsample.pdf');
  7  |   await expect(page.locator('#uploadedFilePath')).toContainText('sample.pdf');
  8  | });
  9  | 
  10 | //multiple files
  11 | /*await page.locator('#fileUpload').setInputFiles([
  12 |   'tests/files/file1.pdf',
  13 |   'tests/files/file2.pdf'
  14 | ]); */
  15 | 
  16 | test('Download file', async ({ page }) => {
  17 |   await page.goto('https://demoqa.com/upload-download');
  18 | 
  19 |   const downloadPromise = page.waitForEvent('download');
  20 |   await page.locator('#downloadButton').click();
  21 | 
  22 |   const download = await downloadPromise;
  23 |  expect(download.suggestedFilename()).toBe('sampleFile.jpeg')
  24 | 
> 25 |   await download.saveAs(`downloads/sample1.jpeg`);
     |                  ^ Error: download.saveAs: canceled
  26 | });
  27 | 
```