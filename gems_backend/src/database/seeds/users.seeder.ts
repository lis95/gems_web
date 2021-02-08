import { Factory, Seeder } from 'typeorm-seeding';
import User from '../entities/user.entity';

// ======================================
//				User Seeder
// ======================================
export default class CreateTask implements Seeder {
	// ======================================
	//				Run Seeder
	// ======================================
	public async run(factory: Factory): Promise<any> {
		await factory(User)().createMany(10);
	}
}
