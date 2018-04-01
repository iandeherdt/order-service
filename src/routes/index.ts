import { Application } from 'express';
import statusRoutes from '../controllers/status.controller';
import orderRoutes from '../controllers/order.controller';

export default function (app: Application) {
  app.use('/status', statusRoutes);
  app.use('/order', orderRoutes);
}
