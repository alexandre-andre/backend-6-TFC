import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/http-exception';

export default function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
  if (!err) next();

  const { status, message } = err as HttpException;

  return res
    .status(status || 500)
    .json({ message: message || 'Server internal error.' });
}
