import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

const workbook = XLSX.readFile('./utils/multicredentials.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const data = XLSX.utils.sheet_to_json<{
  username: string;
  password: string;
}>(sheet);

for (const user of data) {

  test(`Login with ${user.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.locator('#user-name').fill(user.username);
    await page.locator('#password').fill(user.password);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  });

}
