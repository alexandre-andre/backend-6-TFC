import { Router } from 'express';

import loginRouter from './login-router';

const routes: Router = Router();

routes.use('/login', loginRouter);

export default routes;
