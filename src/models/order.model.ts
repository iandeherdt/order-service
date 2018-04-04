import { Address } from './address.model';

interface Flavour {
  flavour: {
    id: number,
    name: string,
  };
  intensity: number;
}

interface Recipe {
  flavours: [Flavour];
}

interface OrderLine {
  recipes: [Recipe];
}

export interface Order {
  customer: string;
  reference: string;
  billingAddress: Address;
  shippingAddress: Address;
  orderLines: [OrderLine];
  status: string;
}

