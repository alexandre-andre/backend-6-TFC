import * as bycriptjs from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

console.log('SERVICE >>>>>>>>>>>');
import { IUser } from '../database/models/interface';
// import * as db from '../database/models/user';
console.log('user');
import { User } from '../database/models';
console.log('ILogin');
import ILogin from '../interface';
console.log('utils');
import {
  STATUS_MESSAGE,
  HttpException,
  generateTokenJWT,
  stringUser,
  stringPassword,
} from '../utils';

export default class LoginServices {
  public async getUserByEmail(email: string) {
    const user = await User.findOne({ where: { email } });
    console.log('SERVICE user: ', user);
  
    if (!user) {
      console.log('!user >>>>');
      throw new HttpException(StatusCodes.NOT_FOUND, STATUS_MESSAGE(stringUser).notFound);
    }
    console.log('<<<<< !user ');
    
    return user;
  }
  
  private async comparePassword(password: string, userPassword: string) {
    const compare = await bycriptjs.compare(password, userPassword);
  
    if (!compare) {
      console.log('!compare >>>>');
      throw new HttpException(StatusCodes.UNAUTHORIZED, STATUS_MESSAGE(stringPassword).invalid);
    }

    console.log('<<<<< !compare')
    return true;
  }

  public async postLogin({ email, password }: ILogin) {
    const user: IUser = await this.getUserByEmail(email);

    await this.comparePassword(password, user.password);

    const token = generateTokenJWT(user);
    console.log('SERVICE TOKEN: ', token);
    return token;  
  }
}

console.log('<<<<<<<<<<<<< SERVICE');