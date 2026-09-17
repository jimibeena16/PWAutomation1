import{test,expect} from '@playwright/test'

test('Handling a new tab on DemoQA', async ({ context, page }) => {
 
  await page.goto('https://demoqa.com/browser-windows');

    const [newTab] = await Promise.all([
    context.waitForEvent('page'), 
    page.click('#tabButton') 
  ]);

   await newTab.waitForLoadState(); 

   const headingText = await newTab.locator('#sampleHeading').textContent();
  expect(headingText).toContain('This is a sample page');

    await expect(page.locator('#tabButton')).toBeVisible();
});

//new window
test('Handle new window', async ({ page }) => {
  await page.goto('https://demoqa.com/browser-windows');

  const [windowPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click('#windowButton')
  ]);

  await windowPage.waitForLoadState();

  console.log(await windowPage.url());
});


