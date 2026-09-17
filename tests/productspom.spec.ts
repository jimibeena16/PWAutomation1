import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Add Backpack to Cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Login
  await loginPage.open();

  await loginPage.login('standard_user','secret_sauce');

  // Verify Products page
  await expect(productsPage.pageTitle).toHaveText('Products');

  // Add single product
  await productsPage.addBackpackToCart();

  // Open cart
  await productsPage.openCart();

  // Verify cart
  await expect(cartPage.productName.first()).toHaveText('Sauce Labs Backpack');
});


