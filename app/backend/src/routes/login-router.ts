import { Router } from 'express';

import LoginController from '../controller/login-controller';
import * as mid from '../middlewares';

const loginRouter = Router();

const login = new LoginController();

loginRouter.post('/', mid.isValidLogin, login.postLogin);

export default loginRouter;
