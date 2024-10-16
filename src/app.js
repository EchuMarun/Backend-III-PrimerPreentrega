import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import envsConfig from './config/envs.config.js';
import index from './routes/index.routes.js';
import { connectMongoDB } from './config/connectMongoDB.config.js';
import { initializePassport } from './config/passport.config.js';
import passport from 'passport';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: envsConfig.SECRET_CODE_SESSION,
    resave: true,
    saveUninitialized: true,
  })
);
connectMongoDB();
initializePassport();
passport.use(passport.initialize());
passport.use(passport.session());
app.use(cookieParser());

app.use('/api', index);

app.listen(envsConfig.PORT, () => {
  console.log(`Listening on ${envsConfig.PORT}`);
});
