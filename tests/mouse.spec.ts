import { test, expect } from '@playwright/test';

test('Mouse Hover', async ({ page }) => {
    await page.goto('https://demoqa.com/tool-tips');

    await page.locator('#toolTipButton').hover();
    await page.waitForTimeout(1000);
    await expect(page.getByText('You hovered over the Button')).toBeVisible();
});

test('Right Click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator('#rightClickBtn').click({button: 'right'});
    await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
});

test('Double Click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator('#doubleClickBtn').dblclick();
    await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
});
