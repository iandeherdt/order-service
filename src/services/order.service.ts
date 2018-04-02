import { Order } from '../models/order.model';
import { orderModel } from '../schemas/order.schema';

export function createOrder(order: Order) {
  return orderModel.create(order);
}
