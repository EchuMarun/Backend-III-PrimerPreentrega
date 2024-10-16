import jwt from 'jsonwebtoken';
import envsConfig from '../config/envs.config.js';

export const createToken = user => {
  const { email, _id } = user;
  return jwt.sign({ email, _id }, envsConfig.SECRET_CODE_JWT, {
    expiresIn: '1h',
  });
};
