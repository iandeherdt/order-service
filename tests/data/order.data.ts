import { Order } from '../../src/models/order.model';
import { Address } from '../../src/models/address.model';

const validAddress: Address = {
  street: 'Broadway',
  house: '1A',
  bus: '',
  zipCode: '2660',
  city: 'Hoboken',
  country: 'BE',
};

export const validOrder: Order = {
  customer: 'CUST123',
  reference: 'REF567',
  billingAddress: validAddress,
  shippingAddress: validAddress,
  orderLines: [{
    recipes: [{
      flavours:[
        {
          flavour: { id: 1, name: 'cinnamon' },
          intensity: 5,
        },
      ],
    }],
  }],
  status: 'processing',
};
