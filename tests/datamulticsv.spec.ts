import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Read CSV file
const csvData = fs.readFileSync('utils/multicredentials.csv','utf-8');

// Parse CSV
const data = parse(csvData, {
  columns: true,
  skip_empty_lines: true
}) as Array<{username: string; password: string}>;

// Create test for each CSV row
for (const user of data) {

  test(`Login with ${user.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill(user.username);
    await page.locator('#password').fill(user.password);
    await page.locator('#login-button').click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  });

}
