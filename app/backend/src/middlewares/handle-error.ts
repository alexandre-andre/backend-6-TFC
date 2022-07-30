import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../utils';

function handleError(err: Error, _req: Request, res: Response, next: NextFunction) {
  if (!err) next();

  const { status, message } = err as HttpException;

  return res
    .status(status || 500)
    .json({ message: message || 'Server internal error.' });
}

export default handleError;
