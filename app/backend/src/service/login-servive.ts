import * as bycriptjs from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

console.log('SERVICE >>>>>>>>>>>');
import { IUser } from '../database/models/interface';
console.log('user');
import User from '../database/models/user';
// import * as User from '../database/models/user';
// import { User } from '../database/models';
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
    console.log('SERVICE getUserByEmail: ', email);
    const user = await User.findOne({ where: { email } });
    console.log('SERVICE getUserByEmail user: ', user);
    
    if (!user) {
      console.log('!user >>>>');
      throw new HttpException(StatusCodes.NOT_FOUND, STATUS_MESSAGE(stringUser).notFound);
    }
    console.log('<<<<< !user ');
    
    return user;
  }
  
  private async comparePassword(password: string, userPassword: string) {
    console.log('SERVICE comparePassword: ', { password, userPassword });
    const compare = await bycriptjs.compare(password, userPassword);
    console.log('SERVICE comparePassword compare: ', compare);
    if (!compare) {
      console.log('!compare >>>>');
      throw new HttpException(StatusCodes.UNAUTHORIZED, STATUS_MESSAGE(stringPassword).invalid);
    }

    console.log('<<<<< compare')
    return true;
  }

  public async postLogin({ email, password }: ILogin) {
    console.log('SERVICE postLogin: ', { email, password });
    
    const user: IUser = await this.getUserByEmail(email);
    console.log('SERVICE postLogin user: ', user);
    
    await this.comparePassword(password, user.password);

    const token = generateTokenJWT(user);
    console.log('SERVICE TOKEN: ', token);
    return token;  
  }
}

console.log('<<<<<<<<<<<<< SERVICE');