import { Request, Response, Router } from 'express';
import ILogin from '../interface';

import LoginController from '../controller/login-controller';
import middleware from '../middlewares';
// import mid from '../middlewares/valid-login-middleware';

const loginRouter: Router = Router();

/** para que a classe LoginController funcionar, ela precisa ser instanciada */
const loginController = new LoginController();

// loginRouter.post('/', mid.isValidLogin, loginController.postLogin);
loginRouter.post(
  '/',
  middleware.isValidLogin,
  (req: Request<ILogin>, res: Response) => loginController.postLogin(req, res),
);

export default loginRouter;
