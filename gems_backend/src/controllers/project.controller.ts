import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Project from '../database/entities/project.entity';
import { validate } from 'class-validator';

// ======================================
//			Project Controller
// ======================================
export default class ProjectController {
	static getAll = async (req: Request, res: Response) => {
		let projects;
		try {
			// Si existen proyectos devuelvo sus datos
			projects = await getRepository(Project).find({
				select: ['id', 'name'],
			});
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Algo salio mal.',
			});
		}

		if (projects.length) {
			res.json(projects);
		} else {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Error, no existen proyectos.',
			});
		}
	};

	static getById = async (req: Request, res: Response) => {
		const { id } = req.params;
		try {
			// Si existe el proyecto, devuelvo sus datos.
			const project = await getRepository(Project).findOneOrFail(id, {
				select: ['id', 'name'],
			});
			res.json(project);
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Error, el proyecto no existe.',
			});
		}
	};

	static newProject = async (req: Request, res: Response) => {
		const { name } = req.body;

		let project = new Project();

		project.name = name;

		// Validacion
		const errors = await validate(Project);

		// Si existen errores los envio
		if (errors.length) res.status(400).json(errors);

		try {
			// Si no hay errores, guardo el registro de Usuario
			await getRepository(Project).save(project);
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(409).json({
				message: 'Error, el proyecto ya existe.',
			});
		}

		res.status(201).json({
			message: 'Proyecto registrado con exito.',
		});
	};

	static editProject = async (req: Request, res: Response) => {
		const { id } = req.params;
		const { name } = req.body;

		let project: Project;
		try {
			// Si existe el proyecto, actualizo sus datos.
			project = await getRepository(Project).findOneOrFail(id);
			project.name = name;
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Error, el proyecto no existe.',
			});
		}

		// Validacion
		const errors = await validate(Project);

		// Si existen errores los envio
		if (errors.length) res.status(400).json(errors);

		try {
			// Si no hay errores, guardo el registro de Usuario
			await getRepository(Project).save(project);
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(409).json({
				message: 'Error, el proyecto ya esta en uso.',
			});
		}

		return res.status(201).json('Proyecto actualizado con exito.');
	};

	static deleteProject = async (req: Request, res: Response) => {
		const { id } = req.params;

		try {
			// Verifico si el proyecto existe.
			await getRepository(Project).findOneOrFail(id);
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Error, el proyecto no existe.',
			});
		}

		await getRepository(Project).delete(id);

		res.status(201).json({
			message: 'Proyecto eliminado con exito.',
		});
	};
}
