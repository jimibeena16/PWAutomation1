# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radio.spec.ts >> Dropdown By Visible Text
- Location: tests\radio.spec.ts:23:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 3000ms exceeded.
Call log:
  - waiting for locator('#oldSelectMenu')

```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | 
  4  | test('Radio Button Example', async ({ page }) => {
  5  |     await page.goto('https://demoqa.com/radio-button');
  6  |     await page.locator('label[for="yesRadio"]').click();
  7  |     await expect(page.locator('.text-success')).toHaveText('Yes');
  8  | });
  9  | 
  10 | test('Verify Downloads checkbox is checked', async ({ page }) => {
  11 | 
  12 |     await page.goto('https://demoqa.com/checkbox');
  13 | 
  14 |     await page.locator('.rc-tree-switcher_close').click();
  15 |      // Locate Downloads checkbox using role 
  16 |     const downloadsCheckbox = page.getByRole('checkbox', {name: 'Select Downloads'});
  17 |     // Select Downloads
  18 |     await downloadsCheckbox.click();
  19 |     // Verify Downloads is checked
  20 |     await expect(downloadsCheckbox).toBeChecked();
  21 | });
  22 | 
  23 | test('Dropdown By Visible Text', async ({ page }) => {
  24 |     await page.goto('https://demoqa.com/select-menu');
  25 |     //await page.locator('#oldSelectMenu').selectOption({label: 'Purple'}); //using label
  26 |    // await page.locator('#oldSelectMenu').selectOption('5');
> 27 |     await page.locator('#oldSelectMenu').selectOption({index:2}); 
     |                                          ^ Error: locator.selectOption: Test timeout of 3000ms exceeded.
  28 |     //  await expect(page.locator('#oldSelectMenu')).toHaveValue('4');
  29 | });
```