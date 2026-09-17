# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames.spec.ts >> Interact with both frames on DemoQA
- Location: tests\frames.spec.ts:21:5

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/frames", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | //reading text from Frame1
  4  | test('Frame Handling', async ({ page }) => {
  5  |     await page.goto('https://demoqa.com/frames');
  6  | 
  7  |     const frame = page.frameLocator('#frame1');
  8  |     await expect(frame.locator('#sampleHeading')).toHaveText('This is a sample page');
  9  | });
  10 | 
  11 | //reading text from Frame2
  12 | test('Read text from Frame 2', async ({ page }) => {
  13 |   await page.goto('https://demoqa.com/frames');
  14 | 
  15 |   const frame2 = page.frameLocator('#frame2');
  16 |   const text = await frame2.locator('#sampleHeading').textContent();
  17 |   console.log(text);
  18 | 
  19 | });
  20 | 
  21 | test('Interact with both frames on DemoQA', async ({ page }) => {
  22 |   
> 23 |   await page.goto('https://demoqa.com/frames');
     |              ^ TimeoutError: page.goto: Timeout 10000ms exceeded.
  24 | 
  25 |    const frameLocator = page.frameLocator('#frame1');
  26 |    const frameHeading = frameLocator.locator('#sampleHeading');
  27 |    await expect(frameHeading).toHaveText('This is a sample page');
  28 | 
  29 |   const text1 = await frameHeading.textContent();
  30 |   console.log(`Text inside frame 1: ${text1}`);
  31 | 
  32 | 
  33 |   // 5. Interact with a second frame further down the page
  34 |   const smallFrameLocator = page.frameLocator('#frame2');
  35 |   const smallHeading = smallFrameLocator.locator('#sampleHeading');
  36 |   await expect(smallHeading).toHaveText('This is a sample page');
  37 | 
  38 |    const text2 = await smallHeading.textContent();
  39 |    console.log(`Text inside frame 2: ${text2}`);
  40 | });
  41 | 
  42 | test('Get all frames', async ({ page }) => {
  43 |   await page.goto('https://demoqa.com/frames');
  44 | 
  45 |   await page.waitForSelector('#frame1');
  46 | 
  47 |   const frames = page.frames();
  48 |   console.log(`Total Frames: ${frames.length}`);
  49 | 
  50 |   frames.forEach((frame, index) => {
  51 |     const frameName = frame.name()
  52 |     console.log(`Frame ${index}: Name -> "${frameName}", URL -> ${frame.url()}`);
  53 |   });
  54 | });
```