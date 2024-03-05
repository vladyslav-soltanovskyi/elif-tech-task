import type { Product, Shop } from '@prisma/client';
import { faker } from '@faker-js/faker';

const random = (min: number, max: number) => {
	const rand = min + Math.random() * (max - min);
	return Math.round(rand);
};

export const fakeProducts = (shops: Shop[]) => {
	const products: Omit<Product, 'id'>[] = [];

	for (let i = 0; i < 100; i++) {
		const shopId = shops[random(0, shops.length - 1)].id;

		const newProduct: Omit<Product, 'id'> = {
			title: faker.word.noun(),
			poster: faker.image.url(),
			price: +faker.commerce.price(10, 100),
			description: faker.lorem.lines(),
			shopId,
			createdAt: faker.date.past(),
			updatedAt: faker.date.recent(),
		};

		products.push(newProduct);
	}

	return products;
};
