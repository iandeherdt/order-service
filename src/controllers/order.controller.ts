import { Router, Request, Response } from 'express';
import validator from '../validators/order.validator';
import { createOrder } from '../services/order.service';

const validation = require('express-validation');

export default Router({ mergeParams: true })
  .post('/', validation(validator.post), async (req:Request, res: Response, next: any) => {
    try {
      const order = await createOrder(req.body);
      const orderObject = order.toObject();
      // delete orderObject._id;
      // console.log(orderObject);
      res.json(orderObject);
    } catch (err) {
      next(err);
    }
  });
