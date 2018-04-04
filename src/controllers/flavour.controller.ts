import { Router, Request, Response } from 'express';
const flavours = require('../data/flavours.json');

export default Router({ mergeParams: true })
  .get('/', (_req:Request, res: Response, next: any) => {
    try {
      res.json(flavours);
    } catch (err) {
      next(err);
    }
  },
);
