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

const orderLineDefinition = {
  _id:false,
  amount: Number,
  recipes: [{
    _id:false,
    flavours: [{
      _id:false,
      flavour: { id: Number, name: String },
      intensity: Number,
    }],
  }],
};

const orderSchema: Schema = new Schema({
  customer: String,
  reference: String,
  billingAddress: addressDefinition,
  shippingAddress: addressDefinition,
  orderLines: [orderLineDefinition],
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
