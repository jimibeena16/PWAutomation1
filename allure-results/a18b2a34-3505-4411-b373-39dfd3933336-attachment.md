# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: networkUI.spec.ts >> Block API request
- Location: tests\networkUI.spec.ts:121:6

# Error details

```
Error: page.goto: net::ERR_FAILED at https://reqres.in/api/users/2
Call log:
  - navigating to "https://reqres.in/api/users/2", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "This site can’t be reached" [level=1] [ref=e7]
  - paragraph [ref=e8]:
    - text: The webpage at
    - strong [ref=e9]: https://reqres.in/api/users/2
    - text: might be temporarily down or it may have moved permanently to a new web address.
  - generic [ref=e10]: ERR_FAILED
```

# Test source

```ts
  27  | 
  28  |     const responsePromise = page.waitForResponse(
  29  |      response =>                                 
  30  |             response.url().includes('demoqa.com') &&
  31  |             response.status() === 200
  32  |     );
  33  |     await page.goto('https://demoqa.com');
  34  | 
  35  |     const response = await responsePromise; 
  36  |     const resp = await response.text();
  37  |     console.log(resp);
  38  | 
  39  |     expect(response.ok()).toBeTruthy();
  40  | });
  41  | 
  42  | test('Monitor request', async ({ page }) => {
  43  |     page.on('request', request => {
  44  |         console.log('URL:', request.url());
  45  |         console.log('Method:', request.method());
  46  |     });
  47  | 
  48  |     await page.goto('https://reqres.in/api/users?page=2'); 
  49  | 
  50  | });
  51  | 
  52  | test('Monitor response', async ({ page }) => {
  53  | 
  54  |     page.on('response', response => {
  55  |         console.log('URL:', response.url());
  56  |         console.log('Status:', response.status());
  57  |     });
  58  | 
  59  |     await page.goto('https://reqres.in/api/users?page=2');
  60  | 
  61  | });
  62  | 
  63  | test('Wait for response', async ({ page }) => {
  64  | 
  65  |     const responsePromise = page.waitForResponse(  
  66  |         response =>
  67  |             response.url().includes('/api/users/2') &&
  68  |             response.status() === 200
  69  |     );
  70  | 
  71  |     await page.goto('https://reqres.in/api/users/2');
  72  | 
  73  |     const response = await responsePromise; 
  74  |     const resp = await response.text();
  75  |     console.log(resp);
  76  | 
  77  |     expect(response.ok()).toBeTruthy();
  78  | });
  79  | 
  80  | 
  81  | test('Mock API response', async ({ page }) => {
  82  | 
  83  |     await page.route('https://reqres.in/api/users/2', async route => {
  84  | 
  85  |         await route.fulfill({
  86  |             status: 200,
  87  |             contentType: 'application/json',
  88  |             body: JSON.stringify({
  89  |                 data: {
  90  |                     id: 2,
  91  |                     first_name: 'John',
  92  |                     last_name: 'Tester',
  93  |                     email: 'john@test.com'
  94  |                 }
  95  |             })
  96  |         });
  97  |          });
  98  | await page.goto('https://reqres.in/api/users/2');
  99  |     });
  100 |     
  101 | test('Modify API response', async ({ page }) => {
  102 | 
  103 |     await page.route('**/api/users/2', async route => {
  104 | 
  105 |         const response = await route.fetch();
  106 | 
  107 |         const json = await response.json();
  108 | 
  109 |         json.data.first_name = 'Modified';
  110 | 
  111 |         await route.fulfill({
  112 |             response,
  113 |             json
  114 |         });
  115 |     });
  116 | 
  117 |     await page.goto('https://reqres.in/api/users/2');
  118 | 
  119 | });
  120 | 
  121 | test.only('Block API request', async ({ page }) => {
  122 | 
  123 |     await page.route('**/api/users/**', route => {
  124 |         route.abort();
  125 |     });
  126 | 
> 127 |     await page.goto('https://reqres.in/api/users/2');
      |                ^ Error: page.goto: net::ERR_FAILED at https://reqres.in/api/users/2
  128 | 
  129 | });
  130 | 
```