import { Router } from 'express';

// ======================================
//			Controllers
// ======================================
import AuthController from '../controllers/auth.controller';
import UserController from '../controllers/user.controller';

// ======================================
//			Middlewares
// ======================================
import { checkJwt } from '../app/middlewares/auth.middleware';

// ======================================
//			Auth Routes
// ======================================
const routes = Router()

routes.post('/login', AuthController.login);
routes.post('/change-password', [checkJwt], AuthController.changePassword);
routes.post('/signup', UserController.newUser);

export default routes;
