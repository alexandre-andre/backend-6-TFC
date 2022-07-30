import * as jwt from 'jsonwebtoken';
// https://dev.to/francis04j/how-to-add-env-and-use-process-env-to-your-typescript-project-3d6b
import * as dotenv from 'dotenv';
import { IUser } from '../database/models/interface';
import { stringToken, STATUS_MESSAGE, HttpException } from '.';

dotenv.config();

const secret: jwt.Secret = process.env.JWT_SECRET || 'typescriptNaoVaiMeVencer';

const configToken: jwt.SignOptions = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

function generateTokenJWT(payload: Omit<IUser, 'id' & 'password'>) {
  return jwt.sign(
    payload,
    secret,
    configToken,
  );
}

function isAuthenticatedToken(token: string) {
  if (!token) {
    throw new HttpException(404, STATUS_MESSAGE(stringToken).notFound);
  }

  try {
    const tokenAuthenticated = jwt.verify(token, secret);

    return tokenAuthenticated;
  } catch (error: unknown) { // error eh tipo oq ????
    console.error(error);
    throw new HttpException(401, STATUS_MESSAGE(stringToken).invalid);
  }
}

export { generateTokenJWT, isAuthenticatedToken };
