import HttpException from './http-exception';
import { generateTokenJWT, isAuthenticatedToken } from './jwt';
import EStatusMessage from './status-message';
import { queryAtHome } from './leaderboard-queries';

const stringUser = 'user';
const stringPassword = 'password';
const stringEmail = 'email';
const stringToken = 'token';

const MIN_LENGTH_PASSWORD = 6;

// eslint-disable-next-line max-len
const isEmailRegexValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export {
  EStatusMessage,
  generateTokenJWT,
  MIN_LENGTH_PASSWORD,
  isAuthenticatedToken,
  isEmailRegexValidation,
  HttpException,
  queryAtHome,
  stringUser,
  stringPassword,
  stringEmail,
  stringToken,
};
