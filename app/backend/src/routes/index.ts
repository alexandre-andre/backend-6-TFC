import { Router } from 'express';

import loginRouter from './login-router';
import matchesRouters from './matches-router';
import teamsRouters from './teams-router';

const routes: Router = Router();

routes.use('/login', loginRouter);
routes.use('/teams', teamsRouters);
routes.use('/matches', matchesRouters);

export default routes;
