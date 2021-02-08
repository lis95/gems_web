import {
	Index,
	Entity,
	Column,
	DeleteDateColumn,
	UpdateDateColumn,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	OneToMany,
} from 'typeorm';
import bcrypt from 'bcryptjs';
import Project from './project.entity';

// ======================================
//		User Entity - SQL
// ======================================
@Entity('user')
export default class User {
	@PrimaryGeneratedColumn()
	public id!: number;

	@Index('user_email_unique', { unique: true })
	@Column({ type: 'varchar', length: 191 })
	public email!: string;

	@Column({ type: 'varchar', length: 191 })
	public password!: string;

	@Column({ type: 'varchar', length: 191, comment: 'Nombres.' })
	public first_name!: string;

	@Column({ type: 'varchar', length: 191, comment: 'Apellidos.' })
	public last_name!: string;

	@CreateDateColumn({ type: 'timestamp', nullable: true })
	public created_at?: string;

	@UpdateDateColumn({ type: 'timestamp', nullable: true })
	public updated_at?: string;

	@DeleteDateColumn({ type: 'timestamp', nullable: true })
	public deleted_at?: string;

	// ======================================
	//			RelationShips
	// ======================================
	@OneToMany(() => Project, (project: Project) => project.user)
	public projects?: Project[];

	// ======================================
	//			Encrypt Password
	// ======================================
	public encryptPassword() {
		const salt = bcrypt.genSaltSync(10);
		this.password = bcrypt.hashSync(this.password, salt);
	}

	// ======================================
	//			Match Password
	// ======================================
	public matchPassword(receivedPassword: string) {
		return bcrypt.compareSync(receivedPassword, this.password);
	}
}
