import { Document, Schema, Model, model } from 'mongoose';
import { Order } from '../models/order.model';

export interface OrderDocument extends Order, Document {}

const addressDefinition = {
  street: String,
  house: String,
  bus: String,
  zipCode: String,
  city: String,
  country: String,
};

const orderSchema: Schema = new Schema({
  customer: String,
  reference: String,
  billingAddress: addressDefinition,
  shippingAddress: addressDefinition,
  status: String,
});

orderSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    delete ret._id;
  },
});

export const orderModel: Model<OrderDocument> = model<OrderDocument>('Order', orderSchema);
