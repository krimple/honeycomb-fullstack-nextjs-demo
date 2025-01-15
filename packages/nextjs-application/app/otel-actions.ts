'use server';

import { faker } from '@faker-js/faker';

function createRandomCustomer() {
    return {
        first: faker.person.firstName(),
        last: faker.person.lastName(),
    }
}

export async function getRandomData() {
    return new Promise((resolve) => {

        const fakeCustomers = faker.helpers.multiple(createRandomCustomer, {
            count: 10
        });

        setTimeout(() => {
            resolve(fakeCustomers);
        }, 1000 *Math.random());
    });
}