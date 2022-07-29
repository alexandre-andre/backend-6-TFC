import * as jwt from 'jsonwebtoken';
// https://dev.to/francis04j/how-to-add-env-and-use-process-env-to-your-typescript-project-3d6b
import * as dotenv from 'dotenv';

dotenv.config();

const secret: jwt.Secret = process.env.JWT_SECRET || 'typescriptNaoVaiMeVencer';

console.log({ secret });

const configToken: jwt.SignOptions = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

function generateTokenJWT(payload: jwt.Jwt) { // SignOptions o
  return jwt.sign(
    payload,
    secret,
    configToken,
  );
}

function isAuthenticatedToken(token: string) {
  if (!token) {
    throw new Error('Token not found.');
  }

  try {
    const tokenAuthenticated = jwt.verify(token, secret);

    return tokenAuthenticated;
  } catch (error: unknown) { // error eh tipo oq ????
    console.error(error);
    throw new Error('Unauthorized token');
  }
}

export { generateTokenJWT, isAuthenticatedToken };
