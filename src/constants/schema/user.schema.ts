import { celebrate, Joi, errors, Segments } from 'celebrate';
export default {
  register: {
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(32).required(),
      name: Joi.string().required(),
    },
  },
  login: {
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  },
  update: {
    body: {},
  },
};
