import { Address } from './address.model';

export interface Order {
  customer: string;
  reference: string;
  billingAddress: Address;
  shippingAddress: Address;
  status: string;
}
