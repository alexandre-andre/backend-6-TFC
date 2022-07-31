import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  STATUS_MESSAGE,
  HttpException,
  stringEmail,
  stringPassword,
  MIN_LENGTH_PASSWORD,
  isEmailRegexValidation,
} from '../utils';
import ILogin from '../interface';

function isValidEmail(email: string) {
  if (!email || email === undefined) {
    throw new HttpException(StatusCodes.BAD_REQUEST, 'All fields must be filled');
  }

  if (!isEmailRegexValidation.test(email)) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, STATUS_MESSAGE(stringEmail).invalid);
  }

  return true;
}

function isValidPassword(password: string) {
  if (!password || password === undefined) {
    throw new HttpException(StatusCodes.BAD_REQUEST, 'All fields must be filled');
  }

  if (password.length < MIN_LENGTH_PASSWORD) {
    throw new HttpException(
      StatusCodes.UNAUTHORIZED,
      STATUS_MESSAGE(stringPassword, MIN_LENGTH_PASSWORD).lesserThan,
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
