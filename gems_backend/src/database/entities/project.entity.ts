import {
	Index,
	Entity,
	Column,
	ManyToOne,
	JoinColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	CreateDateColumn,
	PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity';

// ======================================
//		User Entity - SQL
// ======================================
@Entity('project')
export default class Project {
	@PrimaryGeneratedColumn()
	public id!: number;

	@Column({ type: 'varchar', length: 191, comment: 'Nombre del Proyecto' })
	public name!: string;

	@CreateDateColumn({ type: 'timestamp', nullable: true })
	public created_at?: string;

	@UpdateDateColumn({ type: 'timestamp', nullable: true })
	public updated_at?: string;

	@DeleteDateColumn({ type: 'timestamp', nullable: true })
	public deleted_at?: string;

	// ======================================
	//			RelationShips
	// ======================================
	@ManyToOne(() => User, (user: User) => user.projects)
	@JoinColumn({ name: 'user_id' })
	public user?: User;
}
