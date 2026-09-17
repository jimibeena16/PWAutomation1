# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: networkAPI.spec.ts >> Modify API response
- Location: tests\networkAPI.spec.ts:71:5

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
  11  | 
  12  | });
  13  | 
  14  | //Monitor the response 
  15  | test('Monitor API response', async ({ page }) => {
  16  | 
  17  |     page.on('response', response => {
  18  |         console.log('URL:', response.url());
  19  |         console.log('Status:', response.status());
  20  |     });
  21  | 
  22  |     await page.goto('https://reqres.in/api/users?page=2');
  23  | 
  24  | });
  25  | 
  26  | // Wait for a specific API response
  27  | test('Wait for API response', async ({ page }) => {
  28  | 
  29  |     const responsePromise = page.waitForResponse(  
  30  |         response =>
  31  |             response.url().includes('/api/users/2') &&
  32  |             response.status() === 200
  33  |     );
  34  | 
  35  |     await page.goto('https://reqres.in/api/users/2');
  36  | 
  37  |     const response = await responsePromise; 
  38  |     console.log(await response.json());
  39  | 
  40  |     expect(response.ok()).toBeTruthy();
  41  | });
  42  | 
  43  | //Mock API response
  44  | 
  45  | //GET /api/users/2
  46  | 
  47  | test('Mock API response', async ({ page }) => {
  48  | 
  49  |     await page.route('**/api/users/2', async route => {
  50  | 
  51  |         await route.fulfill({
  52  |             status: 200,
  53  |             contentType: 'application/json',
  54  |             body: JSON.stringify({
  55  |                 data: {
  56  |                     id: 2,
  57  |                     first_name: 'John',
  58  |                     last_name: 'Tester',
  59  |                     email: 'john@test.com'
  60  |                 }
  61  |             })
  62  |         });
  63  | 
  64  |     });
  65  | 
  66  |     await page.goto('https://reqres.in/api/users/2');
  67  | 
  68  | });
  69  | 
  70  | //Modify an API response
  71  | test('Modify API response', async ({ page }) => {
  72  | 
  73  |     await page.route('**/api/users/2', async route => {
  74  | 
  75  |         const response = await route.fetch();
  76  | 
  77  |         const json = await response.json();
  78  | 
  79  |         json.data.first_name = 'Modified';
  80  | 
  81  |         await route.fulfill({
  82  |             response,
  83  |             json
  84  |         });
  85  |     });
  86  | 
> 87  |     await page.goto('https://reqres.in/api/users/2');
      |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  88  | 
  89  | });
  90  | 
  91  | //Block an API request
  92  | test.fail('Block API request', async ({ page }) => {
  93  | 
  94  |     await page.route('**/api/users/**', route => {
  95  |         route.abort();
  96  |     });
  97  | 
  98  |     await page.goto('https://reqres.in/api/users/2');
  99  | 
  100 | });
  101 | 
  102 | // Simulate API failure
  103 | test('Simulate API failure', async ({ page }) => {
  104 | 
  105 |     await page.route('**/api/users/2', route => {
  106 |         route.fulfill({
  107 |             status: 500,
  108 |             contentType: 'application/json',
  109 |             body: JSON.stringify({
  110 |                 error: 'Internal Server Error'
  111 |             })
  112 |         });
  113 |     });
  114 | 
  115 |     await page.goto('https://reqres.in/api/users/2');
  116 | 
  117 | });
  118 | 
  119 | 
  120 | 
  121 | 
```