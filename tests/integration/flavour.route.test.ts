import * as request from 'supertest';
import app from '../../src/app';

describe('/flavour', () => {
  describe('GET /', () => {

    it('should create a valid order', async () => {

      const { body, status } = await request(app)
        .get('/flavour').send();

      expect(status).toBe(200);
      expect(body.length).toEqual(8);

    });
  });
});
