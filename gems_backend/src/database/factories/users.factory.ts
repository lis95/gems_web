import Faker from 'faker';
import { define } from 'typeorm-seeding';
import User from '../entities/user.entity';

// ======================================
//				User Factory
// ======================================
define(User, (faker: typeof Faker) => {
	const email = faker.internet.email();
	const first_name = faker.name.firstName();
	const last_name = faker.name.findName();

	const user = new User();
	user.email = email;
	user.password = '123456';
	user.first_name = first_name;
	user.last_name = last_name;

	return user;
});
