import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import User from '../database/entities/user.entity';
import { validate } from 'class-validator';

// ======================================
//			User Controller
// ======================================
export default class UserController {
	static getAll = async (req: Request, res: Response) => {
		let users;

		try {
			// Verifico si existen usuarios
			users = await getRepository(User).find({
				select: ['id', 'email'],
			});
		} catch (e) {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Algo salio mal.',
			});
		}

		if (users.length) {
			res.json(users);
		} else {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Error, no existen usuarios.',
			});
		}
	};

	static getById = async (req: Request, res: Response) => {
		const { id } = req.params;
		try {
			// Si existe el usuario, devuelvo sus datos.
			const user = await getRepository(User).findOneOrFail(id, {
				select: ['id', 'email'],
			});
			res.json(user);
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Error, el usuario no existe.',
			});
		}
	};

	static newUser = async (
		req: Request,
		res: Response
	) => {
		const { email, password, first_name, last_name } = req.body;

		let user = new User();

		user.email = email;
		user.password = password;
		user.first_name = first_name;
		user.last_name = last_name;

		// Validacion
		const errors = await validate(User);

		// Si existen errores los envio
		if (errors.length) res.status(400).json(errors);

		try {
			// Si no hay errores, guardo el registro de Usuario
			user.encryptPassword();
			await getRepository(User).save(user);
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(409).json({
				message: 'Error, el usuario ya existe.',
			});
		}

		res.status(201).json({
			message: 'Usuario registrado con exito.',
		});
	};

	static editUser = async (req: Request, res: Response) => {
		const { id } = req.params;
		const { email, first_name, last_name } = req.body;

		let user: User;
		try {
			// Si existe el usuario, actualizo sus datos.
			user = await getRepository(User).findOneOrFail(id);
			user.email = email;
			user.first_name = first_name;
			user.last_name = last_name;
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Error, el usuario no existe.',
			});
		}

		// Validacion
		const errors = await validate(User);

		// Si existen errores los envio
		if (errors.length) res.status(400).json(errors);

		try {
			// Si no hay errores, guardo el registro de Usuario
			await getRepository(User).save(user);
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(409).json({
				message: 'Error, el usuario ya esta en uso.',
			});
		}

		return res.status(201).json('Usuario actualizado con exito.');
	};

	static deleteUser = async (req: Request, res: Response) => {
		const { id } = req.params;

		try {
			// Verifico si el usuario existe.
			await getRepository(User).findOneOrFail(id);
		} catch (error) {
			// En caso contrario, envio un error.
			return res.status(404).json({
				message: 'Error, el usuario no existe.',
			});
		}

		await getRepository(User).delete(id);

		res.status(201).json({
			message: 'Usuario eliminado con exito.',
		});
	};
}
