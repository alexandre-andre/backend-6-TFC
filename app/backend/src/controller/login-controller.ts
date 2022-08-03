import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ILogin } from '../interface';
import LoginServices from '../service/login-service';

export default class LoginController {
  private _loginServices: LoginServices; // é privado da classe LoginController

  constructor() {
    this._loginServices = new LoginServices(); // é uma instância dessa classe LoginService na LoginController
  }

  public async postLogin(req: Request<ILogin>, res: Response) {
    const token = await this._loginServices.postLogin(req.body);

    return res.status(StatusCodes.OK).json({ token });
  }

  public tokenAuthenticate(req: Request, res: Response) {
    const user = this._loginServices.tokenAuthenticate(req.headers.authorization || '', res);

    return res.status(StatusCodes.OK).json(user);
  }
}
