import { Request, Response, NextFunction } from 'express';
console.log('MIDDLEWARE >>>>>>>>>>>>>>>>>>');

import {
  STATUS_MESSAGE,
  HttpException,
  stringEmail,
  stringPassword,
  MIN_LENGTH_PASSWORD,
  isEmailRegexValidation,
} from '../utils';
import ILogin from '../interface';
import { StatusCodes } from 'http-status-codes';

function isValidEmail(email: string) {
  if (!email || email === undefined) {
    throw new HttpException(StatusCodes.NOT_FOUND, STATUS_MESSAGE(stringEmail).notFound);
  }

  if (!isEmailRegexValidation.test(email)) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, STATUS_MESSAGE(stringEmail).invalid);
  }

  return true;
}

function isValidPassword(password: string) {
  if (!password || password === undefined) {
    throw new HttpException(StatusCodes.NOT_FOUND, STATUS_MESSAGE(stringPassword).notFound);
  }

  if (password.length < MIN_LENGTH_PASSWORD) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, STATUS_MESSAGE(stringPassword, MIN_LENGTH_PASSWORD).lesserThan);
  }

  return true;
}

function isValidLogin(req: Request, _res: Response, next: NextFunction) {
  const { email, password }: ILogin = req.body;

  isValidEmail(email);
  isValidPassword(password);

  next();
}

export default isValidLogin;

console.log('<<<<<<<<<<<<< MIDDLEWARE');