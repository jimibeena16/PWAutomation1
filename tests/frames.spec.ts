import {test,expect} from '@playwright/test'

//reading text from Frame1
test('Frame Handling', async ({ page }) => {
    await page.goto('https://demoqa.com/frames');

    const frame = page.frameLocator('#frame1');
    await expect(frame.locator('#sampleHeading')).toHaveText('This is a sample page');
});

//reading text from Frame2
test('Read text from Frame 2', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  const frame2 = page.frameLocator('#frame2');
  const text = await frame2.locator('#sampleHeading').textContent();
  console.log(text);

});

test('Interact with both frames on DemoQA', async ({ page }) => {
  
  await page.goto('https://demoqa.com/frames');

   const frameLocator = page.frameLocator('#frame1');
   const frameHeading = frameLocator.locator('#sampleHeading');
   await expect(frameHeading).toHaveText('This is a sample page');

  const text1 = await frameHeading.textContent();
  console.log(`Text inside frame 1: ${text1}`);


  // 5. Interact with a second frame further down the page
  const smallFrameLocator = page.frameLocator('#frame2');
  const smallHeading = smallFrameLocator.locator('#sampleHeading');
  await expect(smallHeading).toHaveText('This is a sample page');

   const text2 = await smallHeading.textContent();
   console.log(`Text inside frame 2: ${text2}`);
});

test('Get all frames', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  await page.waitForSelector('#frame1');

  const frames = page.frames();
  console.log(`Total Frames: ${frames.length}`);

  frames.forEach((frame, index) => {
    const frameName = frame.name()
    console.log(`Frame ${index}: Name -> "${frameName}", URL -> ${frame.url()}`);
  });
});