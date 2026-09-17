import { test, expect } from '@playwright/test';
import fs from 'fs';       
import { parse } from 'csv-parse/sync';

const csvData = fs.readFileSync('utils/credentials.csv','utf-8'); 

const data = parse(csvData, {
  columns: true,      
  skip_empty_lines: true 
}) as Array<{username: string; password: string}>;

test('Login to SauceDemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill(data[0].username);
  await page.locator('#password').fill(data[0].password);
  await page.locator('#login-button').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.locator('.title')).toHaveText('Products');
});

