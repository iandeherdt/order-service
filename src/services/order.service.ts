import { Order } from '../models/order.model';
import { orderModel } from '../schemas/order.schema';

export function createOrder(order: Order) {
  return orderModel.create(order);
}

export function updateOrder(id: string, order: Order) {
  return orderModel.update({ _id: id }, order);
}
