import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  URL_MONGODB: process.env.URL_MONGODB,
  SECRET_CODE_JWT: process.env.SECRET_CODE_JWT,
  SECRET_CODE_SESSION: process.env.SECRET_CODE_SESSION,
};
