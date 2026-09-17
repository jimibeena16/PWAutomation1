import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Verify Product in Cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Login
  await loginPage.open();

  await loginPage.login('standard_user','secret_sauce');

  // Add product
  await productsPage.addBackpackToCart();

  // Open cart
  await productsPage.openCart();

  // Verify cart page
  await expect(cartPage.pageTitle).toHaveText('Your Cart');

  // Verify product
  await expect(cartPage.productName).toHaveText('Sauce Labs Backpack');
});