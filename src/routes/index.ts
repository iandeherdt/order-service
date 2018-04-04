import { Application } from 'express';
import statusRoutes from '../controllers/status.controller';
import orderRoutes from '../controllers/order.controller';
import flavourRoutes from '../controllers/flavour.controller';

export default function (app: Application) {
  app.use('/status', statusRoutes);
  app.use('/order', orderRoutes);
  app.use('/flavour', flavourRoutes);
}
