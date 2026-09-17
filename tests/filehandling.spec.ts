import { test, expect } from '@playwright/test';

  test('Upload file', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');

  await page.setInputFiles('#uploadFile','tests/files/uploadsample.pdf');
  await expect(page.locator('#uploadedFilePath')).toContainText('sample.pdf');
});

//multiple files
/*await page.locator('#fileUpload').setInputFiles([
  'tests/files/file1.pdf',
  'tests/files/file2.pdf'
]); */

test('Download file', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#downloadButton').click();

  const download = await downloadPromise;
 expect(download.suggestedFilename()).toBe('sampleFile.jpeg')

  await download.saveAs(`downloads/sample1.jpeg`);
});
