import * as jwt from 'jsonwebtoken';
// https://dev.to/francis04j/how-to-add-env-and-use-process-env-to-your-typescript-project-3d6b
import * as dotenv from 'dotenv';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'typescriptNaoVaiMeVencer';

console.log({ secret });


const configToken: object = {
  expireIn: '2h',
  algorithm: 'HS256'
};

export function generateTokenJWT(payload: object) {
  return jwt.sign(
    payload,
    secret,
    configToken
  );
}

export function isAuthenticatedToken(token: string) {
  if (!token) {
    throw new Error('Token not found.');
  }

  try {
    const tokenAuthenticated = jwt.verify(token, secret);
    
    return tokenAuthenticated;
    
  } catch (error: any) { // error eh tipo oq ????
    
    console.error(error.message);
    throw new Error('Unauthorized token');
  }
}

