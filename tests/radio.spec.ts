import{test,expect} from "@playwright/test"


test('Radio Button Example', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    await page.locator('label[for="yesRadio"]').click();
    await expect(page.locator('.text-success')).toHaveText('Yes');
});

test('Verify Downloads checkbox is checked', async ({ page }) => {

    await page.goto('https://demoqa.com/checkbox');

    await page.locator('.rc-tree-switcher_close').click();
     // Locate Downloads checkbox using role 
    const downloadsCheckbox = page.getByRole('checkbox', {name: 'Select Downloads'});
    // Select Downloads
    await downloadsCheckbox.click();
    // Verify Downloads is checked
    await expect(downloadsCheckbox).toBeChecked();
});

test('Dropdown By Visible Text', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');
    //await page.locator('#oldSelectMenu').selectOption({label: 'Purple'}); //using label
   // await page.locator('#oldSelectMenu').selectOption('5');
    await page.locator('#oldSelectMenu').selectOption({index:2}); 
    //  await expect(page.locator('#oldSelectMenu')).toHaveValue('4');
});