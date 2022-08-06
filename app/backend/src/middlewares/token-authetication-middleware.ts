import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EStatusMessage, HttpException, isAuthenticatedToken } from '../utils';

function tokenAuthentication(req: Request, res: Response, next: NextFunction) {
  const token: string = req.headers.authorization || '';

  if (!token) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, EStatusMessage.invalidToken);
  }

  const user = isAuthenticatedToken(token);

  res.locals.user = user;

  next();
}

export default tokenAuthentication;
