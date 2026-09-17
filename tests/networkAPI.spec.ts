import {test, expect} from '@playwright/test'

//Monitor a request 
test('Monitor API request', async ({ page }) => {
    page.on('request', request => {
        console.log('URL:', request.url());
        console.log('Method:', request.method());
    });

    await page.goto('https://reqres.in/api/users?page=2'); 
});

//Monitor the response 
test('Monitor API response', async ({ page }) => {

    page.on('response', response => {
        console.log('URL:', response.url());
        console.log('Status:', response.status());
    });
    await page.goto('https://reqres.in/api/users?page=2');
});

// Wait for a specific API response
test('Wait for API response', async ({ page }) => {

    const responsePromise = page.waitForResponse(  
        response =>
            response.url().includes('/api/users/2') &&
            response.status() === 200
    );

    await page.goto('https://reqres.in/api/users/2');

    const response = await responsePromise; 
    console.log(await response.json());

    expect(response.ok()).toBeTruthy();
});

//Mock API response

//GET /api/users/2

test('Mock API response', async ({ page }) => {

    await page.route('**/api/users/2', async route => {

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                data: {
                    id: 2,
                    first_name: 'John',
                    last_name: 'Tester',
                    email: 'john@test.com'
                }
            })
        });
    });
    await page.goto('https://reqres.in/api/users/2');
});

//Modify an API response
test('Modify API response', async ({ page }) => {

    await page.route('**/api/users/2', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.data.first_name = 'Modified';

        await route.fulfill({
            response,
            json
        });
    });
    await page.goto('https://reqres.in/api/users/2');
});

//Block an API request
test.fail('Block API request', async ({ page }) => {

    await page.route('**/api/users/**', route => {
        route.abort();
    });
    await page.goto('https://reqres.in/api/users/2');
});

// Simulate API failure
test('Simulate API failure', async ({ page }) => {

    await page.route('**/api/users/2', route => {
        route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({
                error: 'Internal Server Error'
            })
        });
    });
    await page.goto('https://reqres.in/api/users/2');
});



