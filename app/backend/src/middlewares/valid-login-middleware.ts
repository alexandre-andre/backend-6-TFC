import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  EStatusMessage,
  HttpException,
  MIN_LENGTH_PASSWORD,
  isEmailRegexValidation,
} from '../utils';
import { ILogin } from '../interface';

function isValidEmail(email: string) {
  if (!email || email === undefined) {
    throw new HttpException(StatusCodes.BAD_REQUEST, EStatusMessage.notFields);
  }

  if (!isEmailRegexValidation.test(email)) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, EStatusMessage.incorrect);
  }

  return true;
}

function isValidPassword(password: string) {
  if (!password || password === undefined) {
    throw new HttpException(StatusCodes.BAD_REQUEST, EStatusMessage.notFields);
  }

  if (password.length < MIN_LENGTH_PASSWORD) {
    throw new HttpException(
      StatusCodes.UNAUTHORIZED,
      EStatusMessage.notLength,
    );
  }

  return true;
}

function isValidLogin(req: Request<ILogin>, _res: Response, next: NextFunction) {
  const { email, password } = req.body;

  isValidEmail(email);
  isValidPassword(password);

  next();
}

export default isValidLogin;
