# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filehandling.spec.ts >> Upload file
- Location: tests\filehandling.spec.ts:3:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/upload-download", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  |   test('Upload file', async ({ page }) => {
> 4  |   await page.goto('https://demoqa.com/upload-download');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  25 |   await download.saveAs(`downloads/sample1.jpeg`);
  26 | });
  27 | 
```