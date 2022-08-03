import * as bycriptjs from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import User from '../database/models/user';
import { IUser } from '../database/models/interface';
import ILogin from '../interface';
import {
  STATUS_MESSAGE,
  HttpException,
  generateTokenJWT,
  stringUser,
  isAuthenticatedToken,
} from '../utils';

export default class LoginServices {
  readonly getUserByEmail = async (email: string) => {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new HttpException(StatusCodes.NOT_FOUND, STATUS_MESSAGE(stringUser).notFound);
    }

    return user;
  };

  readonly comparePassword = async (password: string, userPassword: string) => {
    const compare = await bycriptjs.compare(password, userPassword);
    if (!compare) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, 'Incorrect email or password');
    }

    return true;
  };

  readonly fortmatedUserToPayload = async (user: Omit<IUser, 'id' & 'password'>) => (
    {
      username: user.username,
      role: user.role,
      email: user.email,
    }
  );

  public async postLogin(body: ILogin) {
    const { email, password } = body;

    const user = await this.getUserByEmail(email);

    await this.comparePassword(password, user.password);

    const userToPayload = await this.fortmatedUserToPayload(user);

    const token = generateTokenJWT(userToPayload);

    return token;
  }

  public tokenAuthenticate = (token: string, res: any) => {
    const user: any = isAuthenticatedToken(token);

    if (!user) {
      throw new HttpException(StatusCodes.UNAUTHORIZED, 'Unauthorized token');
    }

    res.locals.user = user;

    return { role: user.role };
  };
}
