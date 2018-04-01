import * as joi from 'joi';

const addressDefinition = joi.object({
  street: joi.string().required(),
  house: joi.string().min(1).max(5).required(),
  zipCode: joi.string().min(1).max(10).required(),
  city: joi.string().min(1).max(100).required(),
  country: joi.string().min(1).max(100).required(),
});

const orderDefinition = joi.object({
  customer: joi.string().required(),
  reference: joi.string(),
  billingAddress: addressDefinition.required(),
  shippingAddress: addressDefinition,
  status: joi.string(),
});

export default {
  post:{
    body: orderDefinition,
  },
};
