import { test as base } from '@playwright/test';

type MyFixtures = {
  inventoryPage: void;
};

export const test = base.extend<MyFixtures>({
  inventoryPage: async ({ page }, use) => {
    // Setup:
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Hand over control to the test function
    await use();
    
    //teardown
  
  },
//{auto:true}, //runs automatically in all test, not to give Inventorypage fixture
});
export { expect } from '@playwright/test';