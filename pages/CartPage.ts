import { Locator, Page } from '@playwright/test';

export class CartPage {

  readonly page: Page;

  readonly productName: Locator;
  readonly checkoutButton: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = page.locator('.inventory_item_name');
    this.checkoutButton = page.locator('#checkout');
    this.pageTitle = page.locator('.title');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}