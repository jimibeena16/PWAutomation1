import { test, expect } from './fixtures';

test('should display products on inventory page', async ({ page, inventoryPage }) => {
  // The user is already logged in because 'inventoryPage' fixture was requested
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
  const inventoryItems = page.locator('.inventory_item');
  await expect(inventoryItems).toHaveCount(6);
});

test('should allow adding an item to the cart', async ({ page, inventoryPage }) => {
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
