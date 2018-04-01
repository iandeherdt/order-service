import * as request from 'supertest';
import app from '../../src/app';
import { validOrder } from '../data/order.data';

describe('/status', () => {
  describe('GET /', () => {
    it('should allow a valid order', async () => {
      const { body, status } = await request(app)
        .post('/order')
        .send(validOrder);
      expect(body).toEqual({});
      expect(status).toBe(200);
    });
    it('should validate the order', async () => {
      await request(app)
        .post('/order')
        .send({})
        .expect(400);
    });
  });
});
