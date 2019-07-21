import joi from 'joi';

export default {
  register: {
    body: {
      email: joi.string().email().required(),
      password: joi.string().min(6).max(32).required(),
      name: joi.string().required(),
    },
  },
  login: {
    body: {
      email: joi.string().email().required(),
      password: joi.string().required(),
    },
  },
  update: {
    body: {

    },
  },
};
