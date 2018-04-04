import { Router, Request, Response } from 'express';
import validator from '../validators/order.validator';
import { createOrder, updateOrder } from '../services/order.service';

const validation = require('express-validation');

export default Router({ mergeParams: true })
  .post('/', validation(validator.post), async (req:Request, res: Response, next: any) => {
    try {
      const order = await createOrder(req.body);
      const orderObject = order.toObject();
      res.json(orderObject);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', validation(validator.post), async (req:Request, res: Response, next: any) => {
    try {
      const result = await updateOrder(req.params.id, req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
);
