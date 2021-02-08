import { Factory, Seeder } from 'typeorm-seeding';
import Project from '../entities/project.entity';

// ======================================
//				Project Seeder
// ======================================
export default class CreateTask implements Seeder {
	// ======================================
	//				Run Seeder
	// ======================================
	public async run(factory: Factory): Promise<any> {
		await factory(Project)().createMany(10);
	}
}
