import Faker from 'faker';
import { define } from 'typeorm-seeding';
import Project from '../entities/project.entity';

// ======================================
//				Project Factory
// ======================================
define(Project, (faker: typeof Faker) => {
	const name = faker.name.jobTitle();

	const project = new Project();
	project.name = name;

	return project;
});
