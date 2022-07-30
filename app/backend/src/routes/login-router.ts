import { Router } from 'express';

import LoginController from '../controller/login-controller';
import * as mid from '../middlewares';

const loginRouter = Router();

loginRouter.post('/', mid.isValidLogin, LoginController.prototype.postLogin);

export default loginRouter;
