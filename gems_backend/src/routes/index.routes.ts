import { Router } from 'express';

// ======================================
//			Routes
// ======================================
import auth from './auth.routes';
import user from './user.routes';
import project from './project.routes';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/project', project);

export default routes;
