import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx'; 

const workbook = XLSX.readFile('./utils/credentials.xlsx'); 
const sheet = workbook.Sheets[workbook.SheetNames[0]]; 

const data = XLSX.utils.sheet_to_json(sheet) as Array <{
  username: string;
  password: string;
}>; 

test('Login to SauceDemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill(data[0].username);
  await page.locator('#password').fill(data[0].password);
  await page.locator('#login-button').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

});

