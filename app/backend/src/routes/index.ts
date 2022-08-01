import { Router } from 'express';

import loginRouter from './login-router';
import teamsRouters from './teams-router';

const routes: Router = Router();

routes.use('/login', loginRouter);
routes.use('/teams', teamsRouters);

export default routes;
