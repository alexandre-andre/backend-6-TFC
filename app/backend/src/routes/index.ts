import { Router } from 'express';
import leaderRouter from './leaderboard-router';
import loginRouter from './login-router';
import matchesRouters from './matches-router';
import teamsRouters from './teams-router';

const routes: Router = Router();

routes.use('/login', loginRouter);
routes.use('/teams', teamsRouters);
routes.use('/matches', matchesRouters);
routes.use('/leaderboard', leaderRouter);

export default routes;
