import { test, expect } from '@playwright/test';

import users from '../utils/multicredentials.json';

for (const user of users) {   

  test(`Login test - ${user.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(user.username);
    await page.locator('#password').fill(user.password);
    await page.locator('#login-button').click();

    if (user.expected === 'success') {  // to demonstrate different expected results

      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    } else {

      await expect(page.locator('[data-test="error"]')).toBeVisible();

    }

  });

}