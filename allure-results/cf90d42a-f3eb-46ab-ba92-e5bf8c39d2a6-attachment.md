# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.ts >> Create user using headers
- Location: tests\apitesting.spec.ts:43:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 429
```

# Test source

```ts
  1   | import {test,expect} from '@playwright/test'
  2   | 
  3   | test('GET users API', async ({ request }) => {
  4   | 
  5   |     const response = await request.get(
  6   |         'https://reqres.in/api/users?page=2'
  7   |     );
  8   | 
  9   |     expect(response.status()).toBe(200);
  10  | 
  11  |     const body = await response.json();
  12  | 
  13  |     console.log(body);
  14  | 
  15  |     expect(body.data.length).toBeGreaterThan(0);
  16  | 
  17  | });
  18  | 
  19  | test('Create user', async ({ request }) => {
  20  | 
  21  |     const response = await request.post(
  22  |         'https://reqres.in/api/users',
  23  |         {
  24  |             data: {
  25  |                 name: 'John',
  26  |                 job: 'QA Engineer'
  27  |             }
  28  |         }
  29  |     );
  30  | 
  31  |     expect(response.status()).toBe(201);
  32  | 
  33  |     const body = await response.json();
  34  | 
  35  |     console.log(body);
  36  | 
  37  |     expect(body.name).toBe('John');
  38  |     expect(body.job).toBe('QA Engineer');
  39  | 
  40  | });
  41  | 
  42  | //using headers --
  43  | test('Create user using headers', async ({ request }) => {
  44  |     const response = await request.post(
  45  |         'https://reqres.in/api/users',
  46  |         {
  47  |             headers: {
  48  |                 'Content-Type': 'application/json',        
  49  |             },
  50  |             data: {
  51  |                 name: 'John',
  52  |                 job: 'QA Engineer'
  53  |             }
  54  |         }
  55  |     );
  56  | 
> 57  |     expect(response.status()).toBe(201);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  58  | 
  59  |     const body = await response.json();
  60  | 
  61  |     console.log(body);
  62  | 
  63  |     expect(body.name).toBe('John');
  64  |     expect(body.job).toBe('QA Engineer');
  65  | });
  66  | 
  67  | 
  68  | test('Update user', async ({ request }) => {
  69  | 
  70  |     const response = await request.put(
  71  |         'https://reqres.in/api/users/2',
  72  |         {
  73  |             data: {
  74  |                 name: 'John Thomas',
  75  |                 job: 'Senior QA Engineer'
  76  |             }
  77  |         }
  78  |     );
  79  | 
  80  |     expect(response.status()).toBe(200);
  81  | 
  82  |     const body = await response.json();
  83  | 
  84  |     console.log(body);
  85  | 
  86  | });
  87  | 
  88  | test('Partial Update user', async ({ request }) => {
  89  | 
  90  |     const response = await request.patch(
  91  |         'https://reqres.in/api/users/2',
  92  | 
  93  |         {
  94  |             data: {
  95  |                 name: 'John Mathew',
  96  |               }
  97  |         }
  98  |     );
  99  | 
  100 |     expect(response.status()).toBe(200);
  101 | 
  102 |     const body = await response.json();
  103 | 
  104 |     console.log(body);
  105 | 
  106 | });
  107 | 
  108 | test('Delete user', async ({ request }) => {
  109 | 
  110 |     const response = await request.delete(
  111 |         'https://reqres.in/api/users/2'
  112 |     );
  113 | 
  114 |     expect(response.status()).toBe(204);
  115 | 
  116 | });
  117 | 
```