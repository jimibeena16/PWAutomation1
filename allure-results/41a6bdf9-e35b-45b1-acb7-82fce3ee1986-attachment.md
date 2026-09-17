# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo2.spec.ts >> Create user
- Location: tests\demo2.spec.ts:17:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "John"
Received: "John1"
```

# Test source

```ts
  1   | import {test,expect} from '@playwright/test'
  2   | 
  3   | 
  4   | test('GET users API', async ({ request }) => {
  5   | 
  6   |     const response = await request.get('https://reqres.in/api/users?page=2');
  7   | 
  8   |     expect(response.status()).toBe(200);
  9   | 
  10  |     const body = await response.json();
  11  |     console.log(body);
  12  | 
  13  |     expect(body.data.length).toBeGreaterThan(0);
  14  | });
  15  | 
  16  | // POST -- creates user
  17  | test.only('Create user', async ({ request }) => {
  18  | 
  19  |     const response = await request.post(
  20  |         'https://reqres.in/api/users',
  21  |         {
  22  |             data: {
  23  |                 name: 'John1',
  24  |                 job: 'QA Engineer'
  25  |             }
  26  |         }
  27  |     );
  28  | 
  29  |     expect(response.status()).toBe(201);
  30  | 
  31  |     const body = await response.json();
  32  | 
  33  |     console.log(body);
  34  | 
> 35  |     expect(body.name).toBe('John');
      |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  36  |     expect(body.job).toBe('QA Engineer');
  37  | 
  38  | });
  39  | 
  40  | //PUT -- updates user
  41  | test('Update user', async ({ request }) => {
  42  | 
  43  |     const response = await request.put(
  44  |         'https://reqres.in/api/users/2',
  45  |         {
  46  |             data: {
  47  |                 name: 'John',
  48  |                 job: 'Senior QA Engineer'
  49  |             }
  50  |         }
  51  |     );
  52  | 
  53  |     expect(response.status()).toBe(200);
  54  | 
  55  |     const body = await response.json();
  56  | 
  57  |     console.log(body);
  58  | 
  59  | });
  60  | 
  61  | //PATCH -- partial update of user
  62  | test('Partial Update user', async ({ request }) => {
  63  | 
  64  |     const response = await request.put(
  65  |         'https://reqres.in/api/users/2',
  66  |         {
  67  |             data: {
  68  |                 name: 'John Thomas',
  69  |               }
  70  |         }
  71  |     );
  72  | 
  73  |     expect(response.status()).toBe(200);
  74  | 
  75  |     const body = await response.json();
  76  | 
  77  |     console.log(body);
  78  | 
  79  | });
  80  | 
  81  | //DELETE -- deletes user
  82  | test('Delete user', async ({ request }) => {
  83  | 
  84  |     const response = await request.delete(
  85  |         'https://reqres.in/api/users/2'
  86  |     );
  87  | 
  88  |     expect(response.status()).toBe(204);
  89  | 
  90  | });
  91  | 
  92  | 
  93  | //Test login
  94  | test('Login', async ({ request }) => {
  95  | 
  96  |     const response = await request.post(
  97  |         'https://reqres.in/api/login',
  98  |         {
  99  |             data: {
  100 |                 email: 'eve.holt@reqres.in',
  101 |                 password: 'cityslicka'
  102 |             }
  103 |         }
  104 |     );
  105 | 
  106 |     expect(response.status()).toBe(200);
  107 | 
  108 |     const body = await response.json();
  109 |     console.log(body);
  110 | 
  111 |     expect(body.token).toBeTruthy();
  112 | 
  113 |     console.log('Token:', body.token);
  114 | 
  115 | });
  116 | 
  117 | //Test 404 response 
  118 | test('User not found', async ({ request }) => {
  119 | 
  120 |     const response = await request.get(
  121 |         'https://reqres.in/api/users/23'
  122 |     );
  123 | 
  124 |     expect(response.status()).toBe(404);
  125 | 
  126 | });
  127 | 
  128 | 
  129 | //Test registration API
  130 | test('Register user', async ({ request }) => {
  131 | 
  132 |     const response = await request.post(
  133 |         'https://reqres.in/api/register',
  134 |         {
  135 |             data: {
```