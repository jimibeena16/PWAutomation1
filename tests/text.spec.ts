import{test,expect} from '@playwright/test'

test('Read text', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.fill('#userName', 'Jimi');
  await page.click('#submit');

  const text = await page.locator('#name').textContent(); //innerText

  console.log(text);
});