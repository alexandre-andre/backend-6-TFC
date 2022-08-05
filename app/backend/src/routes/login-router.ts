import { Request, Response, Router } from 'express';
import { ILogin } from '../interface';
import LoginController from '../controller/login-controller';
import middleware from '../middlewares';

const loginRouter: Router = Router();
import 'express-async-errors';

/** para que a classe LoginController funcionar, ela precisa ser instanciada */
const loginController = new LoginController();

loginRouter.post(
  '/',
  middleware.isValidLogin,
  (req: Request<ILogin>, res: Response) => loginController.postLogin(req, res),
);

loginRouter.get(
  '/validate',
  middleware.tokenAuthentication,
  (req: Request, res: Response) => loginController.tokenAuthenticate(req, res),
);

export default loginRouter;
