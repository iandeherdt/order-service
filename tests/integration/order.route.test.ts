import * as request from 'supertest';
import { ObjectID, ObjectId } from 'mongodb';
import app from '../../src/app';
import { validOrder } from '../data/order.data';
import { orderModel } from '../../src/schemas/order.schema';
import { Order } from '../../src/models/order.model';

describe('/order', () => {
  describe('POST /', () => {

    it('should create a valid order', async () => {

      const { body, status } = await request(app)
        .post('/order')
        .send(validOrder);

      const expected = Object.assign(validOrder, { id: expect.any(String) });
      expect(status).toBe(200);
      expect(body).toEqual(expected);

      const newOrder = await orderModel.findOne({ _id: ObjectID.createFromHexString(body.id) });
      expect(newOrder.toObject()).toEqual(expected);
      
    });

    it('should validate the order', () => request(app)
        .post('/order')
        .send({})
        .expect(400));
    
  });
});
