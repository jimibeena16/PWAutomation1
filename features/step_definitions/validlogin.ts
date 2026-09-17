import {chromium} from 'playwright'
import {Given, When, Then} from "@cucumber/cucumber"
import {expect} from "@playwright/test"
import {Before, After} from "@cucumber/cucumber"

Before(async function () {
    this.browser = await chromium.launch({
                    channel: 'chrome',
                    headless: false
                  });
       this.context = await this.browser.newContext();
       this.page = await this.context.newPage();
       console.log("=== Browser is launched ===");
});

After(async function() {
   await this.browser.close();
   console.log("=== Browser is closed ===");
})

Given('User is on the Login page',{timeout:50000}, async function () { //cant use page fixture, it uses cucumber hooks only
   
   await this.page.goto("https://www.saucedemo.com")
   
 
});

When('User logs in with valid credentials {string} and {string}', async function (username:string, password:string) {
   await this.page.locator('#user-name').fill(username)
   await this.page.locator('#password').fill(password)
   await this.page.locator('//input[@id="login-button"]').click()
 
});

Then('Verify Dashboard page is loaded', async function () {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
});

When('User logs in with valid credentials username {string} and password {string}', async function (username:string, password:string) {
   await this.page.locator('#user-name').fill(username)
   await this.page.locator('#password').fill(password)
   await this.page.locator('//input[@id="login-button"]').click()
 
});
