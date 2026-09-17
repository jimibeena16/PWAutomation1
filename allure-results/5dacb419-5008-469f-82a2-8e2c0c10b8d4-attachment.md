# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: networkAPI.spec.ts >> Modify API response
- Location: tests\networkAPI.spec.ts:65:5

# Error details

```
TypeError: Cannot set properties of undefined (setting 'first_name')
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://reqres.in/api/users/2", waiting until "load"

```

# Test source

```ts
  1   | import {test, expect} from '@playwright/test'
  2   | 
  3   | //Monitor a request 
  4   | test('Monitor API request', async ({ page }) => {
  5   |     page.on('request', request => {
  6   |         console.log('URL:', request.url());
  7   |         console.log('Method:', request.method());
  8   |     });
  9   | 
  10  |     await page.goto('https://reqres.in/api/users?page=2'); 
  11  | });
  12  | 
  13  | //Monitor the response 
  14  | test('Monitor API response', async ({ page }) => {
  15  | 
  16  |     page.on('response', response => {
  17  |         console.log('URL:', response.url());
  18  |         console.log('Status:', response.status());
  19  |     });
  20  |     await page.goto('https://reqres.in/api/users?page=2');
  21  | });
  22  | 
  23  | // Wait for a specific API response
  24  | test('Wait for API response', async ({ page }) => {
  25  | 
  26  |     const responsePromise = page.waitForResponse(  
  27  |         response =>
  28  |             response.url().includes('/api/users/2') &&
  29  |             response.status() === 200
  30  |     );
  31  | 
  32  |     await page.goto('https://reqres.in/api/users/2');
  33  | 
  34  |     const response = await responsePromise; 
  35  |     console.log(await response.json());
  36  | 
  37  |     expect(response.ok()).toBeTruthy();
  38  | });
  39  | 
  40  | //Mock API response
  41  | 
  42  | //GET /api/users/2
  43  | 
  44  | test('Mock API response', async ({ page }) => {
  45  | 
  46  |     await page.route('**/api/users/2', async route => {
  47  | 
  48  |         await route.fulfill({
  49  |             status: 200,
  50  |             contentType: 'application/json',
  51  |             body: JSON.stringify({
  52  |                 data: {
  53  |                     id: 2,
  54  |                     first_name: 'John',
  55  |                     last_name: 'Tester',
  56  |                     email: 'john@test.com'
  57  |                 }
  58  |             })
  59  |         });
  60  |     });
  61  |     await page.goto('https://reqres.in/api/users/2');
  62  | });
  63  | 
  64  | //Modify an API response
  65  | test('Modify API response', async ({ page }) => {
  66  | 
  67  |     await page.route('**/api/users/2', async route => {
  68  |         const response = await route.fetch();
  69  |         const json = await response.json();
  70  |         json.data.first_name = 'Modified';
  71  | 
  72  |         await route.fulfill({
  73  |             response,
  74  |             json
  75  |         });
  76  |     });
> 77  |     await page.goto('https://reqres.in/api/users/2');
      |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  78  | });
  79  | 
  80  | //Block an API request
  81  | test.fail('Block API request', async ({ page }) => {
  82  | 
  83  |     await page.route('**/api/users/**', route => {
  84  |         route.abort();
  85  |     });
  86  |     await page.goto('https://reqres.in/api/users/2');
  87  | });
  88  | 
  89  | // Simulate API failure
  90  | test('Simulate API failure', async ({ page }) => {
  91  | 
  92  |     await page.route('**/api/users/2', route => {
  93  |         route.fulfill({
  94  |             status: 500,
  95  |             contentType: 'application/json',
  96  |             body: JSON.stringify({
  97  |                 error: 'Internal Server Error'
  98  |             })
  99  |         });
  100 |     });
  101 |     await page.goto('https://reqres.in/api/users/2');
  102 | });
  103 | 
  104 | 
  105 | 
  106 | 
```