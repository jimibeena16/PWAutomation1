import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Valid Login', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.open();
  await loginPage.login('standard_user','secret_sauce');

  // Assertion
  await expect(productsPage.pageTitle).toHaveText('Products');
});

test('Invalid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('locked_user','wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
//or
//await expect(loginPage.errorMessage).toContainText('do not match');
});