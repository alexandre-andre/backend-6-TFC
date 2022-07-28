import { NextFunction, Request, Response } from "express";

export default function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
  if (!err) next();

  return res
    .status(err.status || 500)
    .json({ message: err.message || 'Server internal error.' });
}