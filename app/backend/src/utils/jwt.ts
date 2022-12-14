import * as jwt from 'jsonwebtoken';
// https://dev.to/francis04j/how-to-add-env-and-use-process-env-to-your-typescript-project-3d6b
import * as dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../database/models/interface';
import { EStatusMessage, HttpException } from '.';

dotenv.config();

const secret: jwt.Secret = process.env.JWT_SECRET || 'typescriptNaoVaiMeVencer';

const configToken: jwt.SignOptions = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

function generateTokenJWT(payload: IUser) {
  return jwt.sign(
    payload,
    secret,
    configToken,
  );
}

function isAuthenticatedToken(token: string) {
  if (!token) {
    throw new HttpException(StatusCodes.NOT_FOUND, EStatusMessage.unauthorized);
  }

  try {
    const tokenAuthenticated = jwt.verify(token, secret);

    return tokenAuthenticated;
  } catch (error: unknown) { // error eh tipo oq ????
    console.error(error);
    throw new HttpException(StatusCodes.UNAUTHORIZED, EStatusMessage.invalidToken);
  }
}

export { generateTokenJWT, isAuthenticatedToken };
