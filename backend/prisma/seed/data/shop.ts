import type { Shop } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeShops = () => {
	const shops: Omit<Shop, 'id'>[] = [];

	for (let i = 0; i < 10; i++) {
		const newShop: Omit<Shop, 'id'> = {
			name: faker.company.name(),
			imageUrl: faker.image.url(),
			address: `${faker.location.county()}, ${faker.location.city()}, ${faker.location.streetAddress()}`,
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
			createdAt: faker.date.past(),
			updatedAt: faker.date.recent(),
		};

		shops.push(newShop);
	}

	return shops;
};
