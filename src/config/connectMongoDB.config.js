import mongoose from 'mongoose';
import envsConfig from './envs.config.js';

export const connectMongoDB = () => {
  mongoose.connect(envsConfig.URL_MONGODB);
  console.log('Connected with MongoDB');
};
