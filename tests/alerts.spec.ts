import{test, expect} from '@playwright/test'

//handling simple alert
test('DemoQA Simple Alert Example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('You clicked a button');
    await dialog.accept(); // Clicks OK
  });

   await page.locator('#alertButton').click();
});

//handling timer alert
test('DemoQA Timer Alert Example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async dialog => {
    console.log(`Timer Alert Message: ${dialog.message()}`);
    await dialog.accept();
  });

  // Trigger the alert that takes 5 seconds to show up
  await page.locator('#timerAlertButton').click();

 
});

//handling confirmation box 
test('DemoQA Confirmation Box - Dismiss Example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Do you confirm action?');
    await dialog.dismiss(); 
  });

  await page.locator('#confirmButton').click();

    await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
});

//handling prompt -- 
test('DemoQA Prompt Box Example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('Please enter your name');
    
    // Type text into the prompt box and click OK
    await dialog.accept('Playwright Automation');
  });

  await page.locator('#promtButton').click();

   await expect(page.locator('#promptResult')).toHaveText('You entered Playwright Automation');
});


test('page.once example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  page.once('dialog', async dialog => {
    console.log('Type:', dialog.type());
    console.log('Message:', dialog.message());
    await dialog.accept();
  });
  // First alert
  await page.click('#alertButton');
  // Second alert after 5 seconds
  await page.click('#timerAlertButton'); //never runs, auto dismiss if in page.once
  await page.waitForTimeout(6000)
  //await page.getByRole('button', {name: 'Click me' }).nth(1).click();
});
