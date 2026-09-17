import {test,expect} from '@playwright/test'

test('GET users API', async ({ request }) => {

    const response = await request.get(
        'https://reqres.in/api/users?page=2'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.data.length).toBeGreaterThan(0);

});

test('Create user', async ({ request }) => {

    const response = await request.post(
        'https://reqres.in/api/users',
        {
            data: {
                name: 'John',
                job: 'QA Engineer'
            }
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    console.log(body);

    expect(body.name).toBe('John');
    expect(body.job).toBe('QA Engineer');

});

//using headers --
test('Create user using headers', async ({ request }) => {
    const response = await request.post(
        'https://reqres.in/api/users',
        {
            headers: {
                'Content-Type': 'application/json',        
            },
            data: {
                name: 'John',
                job: 'QA Engineer'
            }
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    console.log(body);

    expect(body.name).toBe('John');
    expect(body.job).toBe('QA Engineer');
});


test('Update user', async ({ request }) => {

    const response = await request.put(
        'https://reqres.in/api/users/2',
        {
            data: {
                name: 'John Thomas',
                job: 'Senior QA Engineer'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

});

test('Partial Update user', async ({ request }) => {

    const response = await request.patch(
        'https://reqres.in/api/users/2',

        {
            data: {
                name: 'John Mathew',
              }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

});

test('Delete user', async ({ request }) => {

    const response = await request.delete(
        'https://reqres.in/api/users/2'
    );

    expect(response.status()).toBe(204);

});
