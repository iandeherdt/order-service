import { Address } from './address.model';

export interface Order {
  id?: string;
  customer: string;
  reference: string;
  billingAddress: Address;
  shippingAddress: Address;
  status: string;
}
