import {test,expect} from '@playwright/test'

//1.element with changing ID's
test('title1', async ({ page }) => {
await page.goto('https://demoqa.com/dynamic-properties');
test.setTimeout(40000)
const dynamicText = page.getByText('This text has random Id');
await expect(dynamicText).toBeVisible();
});

//2. elements enable after a delay 
test('title2', async ({ page }) => {
    await page.goto('https://demoqa.com/dynamic-properties');
const enableAfterButton = page.locator('#enableAfter');
await expect(enableAfterButton).toBeEnabled({ timeout: 10000 });
await enableAfterButton.click();
});

//3. Elements That Appear After a Delay (Hidden to Visible)

test('title3', async ({ page }) => {
    await page.goto('https://demoqa.com/dynamic-properties');
const visibleAfterButton = page.locator("#visibleAfter");
await expect(visibleAfterButton).toBeVisible({ timeout: 10000 });
await visibleAfterButton.click();
});


