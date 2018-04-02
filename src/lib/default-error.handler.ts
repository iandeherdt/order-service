import { Request, Response } from 'express';
import * as boom from 'boom';

export function defaultErrorHandler(err: any, _req: Request, res: Response) {

  if (!err.isBoom && err.status === 400) {
    return res.status(400).json(err.errors);
  }
  let error = err;

  // handle unknown errors
  if (!err.isBoom) {
    error = boom.badImplementation();
  }
  
  return res.status(error.output.statusCode).json(error.output.payload);
}
