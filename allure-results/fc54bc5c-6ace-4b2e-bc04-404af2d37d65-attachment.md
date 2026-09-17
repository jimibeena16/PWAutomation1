# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: networkAPI.spec.ts >> Wait for API response
- Location: tests\networkAPI.spec.ts:28:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]: "{\"error\":\"rate_limit_exceeded\",\"message\":\"You've hit the anonymous demo limit of 40 requests/day from this IP.\",\"signup\":{\"message\":\"Create a free account for a higher daily limit, your own API key, persistent collections, and auth.\",\"url\":\"https://app.reqres.in/sign-up?source=demo_rate_limit\"},\"limit\":40,\"remaining\":0,\"reset_at\":1789689600,\"resets_in\":\"11h 30m\",\"reset_explanation\":\"Limits reset daily at midnight UTC\",\"_meta\":{\"powered_by\":\"ReqRes\",\"docs_url\":\"https://app.reqres.in/documentation\",\"upgrade_url\":\"https://app.reqres.in/upgrade\",\"example_url\":\"https://app.reqres.in/examples/notes-app\",\"variant\":\"v1_b\",\"message\":\"Too many requests. Back off, or use Projects for higher limits.\",\"cta\":{\"label\":\"Get started\",\"url\":\"https://app.reqres.in/upgrade\"},\"context\":\"rate_limited\"}}"
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
  15  | 
  16  | test('Monitor API response', async ({ page }) => {
  17  | 
  18  |     page.on('response', response => {
  19  |         console.log('URL:', response.url());
  20  |         console.log('Status:', response.status());
  21  |     });
  22  | 
  23  |     await page.goto('https://reqres.in/api/users?page=2');
  24  | 
  25  | });
  26  | 
  27  | // Wait for a specific API response
  28  | test('Wait for API response', async ({ page }) => {
  29  | 
> 30  |     const responsePromise = page.waitForResponse(  
      |                                  ^ Error: page.waitForResponse: Test timeout of 30000ms exceeded.
  31  |         response =>
  32  |             response.url().includes('/api/users/2') &&
  33  |             response.status() === 200
  34  |     );
  35  | 
  36  |     await page.goto('https://reqres.in/api/users/2');
  37  | 
  38  |     const response = await responsePromise; 
  39  |     console.log(await response.json());
  40  | 
  41  |     expect(response.ok()).toBeTruthy();
  42  | });
  43  | 
  44  | //Mock API response
  45  | 
  46  | //GET /api/users/2
  47  | 
  48  | test('Mock API response', async ({ page }) => {
  49  | 
  50  |     await page.route('**/api/users/2', async route => {
  51  | 
  52  |         await route.fulfill({
  53  |             status: 200,
  54  |             contentType: 'application/json',
  55  |             body: JSON.stringify({
  56  |                 data: {
  57  |                     id: 2,
  58  |                     first_name: 'John',
  59  |                     last_name: 'Tester',
  60  |                     email: 'john@test.com'
  61  |                 }
  62  |             })
  63  |         });
  64  | 
  65  |     });
  66  | 
  67  |     await page.goto('https://reqres.in/api/users/2');
  68  | 
  69  | });
  70  | 
  71  | //Modify an API response
  72  | test('Modify API response', async ({ page }) => {
  73  | 
  74  |     await page.route('**/api/users/2', async route => {
  75  | 
  76  |         const response = await route.fetch();
  77  | 
  78  |         const json = await response.json();
  79  | 
  80  |         json.data.first_name = 'Modified';
  81  | 
  82  |         await route.fulfill({
  83  |             response,
  84  |             json
  85  |         });
  86  |     });
  87  | 
  88  |     await page.goto('https://reqres.in/api/users/2');
  89  | 
  90  | });
  91  | 
  92  | //Block an API request
  93  | test.fail('Block API request', async ({ page }) => {
  94  | 
  95  |     await page.route('**/api/users/**', route => {
  96  |         route.abort();
  97  |     });
  98  | 
  99  |     await page.goto('https://reqres.in/api/users/2');
  100 | 
  101 | });
  102 | 
  103 | // Simulate API failure
  104 | test('Simulate API failure', async ({ page }) => {
  105 | 
  106 |     await page.route('**/api/users/2', route => {
  107 |         route.fulfill({
  108 |             status: 500,
  109 |             contentType: 'application/json',
  110 |             body: JSON.stringify({
  111 |                 error: 'Internal Server Error'
  112 |             })
  113 |         });
  114 |     });
  115 | 
  116 |     await page.goto('https://reqres.in/api/users/2');
  117 | 
  118 | });
  119 | 
  120 | 
  121 | 
  122 | 
```