import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpException } from '../utils';

function tokenAuthentication(req: Request, _res: Response, next: NextFunction) {
  const token: string = req.headers.authorization || '';

  if (!token) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, 'Unauthorized token');
  }

  next();
}

export default tokenAuthentication;
