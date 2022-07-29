import { Request, Response, NextFunction } from 'express';
import { STATUS_MESSAGE } from '../utils';

const emailString = 'email';
// eslint-disable-next-line max-len
const isEmailRegexValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const passwordString = 'password';
const MIN_LENGTH_PASSWORD = 6;

function isValidEmail(email: string) {
  if (!email || email === undefined) {
    throw new Error(STATUS_MESSAGE(emailString).NOT_FOUND);
  }

  if (isEmailRegexValidation.test(email)) {
    throw new Error(STATUS_MESSAGE(emailString).invalid);
  }

  return true;
}

function isValidPassword(password: string) {
  if (!password || password === undefined) {
    throw new Error(STATUS_MESSAGE(passwordString).notFound);
  }

  if (password.length < MIN_LENGTH_PASSWORD) {
    throw new Error(STATUS_MESSAGE(passwordString, MIN_LENGTH_PASSWORD).lesserThan);
  }

  return true;
}

function isValidLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  isValidEmail(email);
  isValidPassword(password);

  next();
}

export default isValidLogin;
