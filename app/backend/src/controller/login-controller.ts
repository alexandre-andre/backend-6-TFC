import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
console.log('CONTROLLER >>>>>>>>>>>');

import LoginServices from '../service/login-servive';


export default class LoginController {
  private _loginServices: LoginServices; // é privado da classe LoginController
  
  constructor() {
    this._loginServices = new LoginServices(); // é uma instância dessa classe
  }
  
  public async postLogin(req: Request, res: Response): Promise<void> {
    const token = await this._loginServices.postLogin(req.body);
    
    res.status(StatusCodes.OK).json({ token });
  }
};

console.log('<<<<<<<<<<<< CONTROLLER ');