import passport from 'passport';
import local from 'passport-local';
import jwt from 'passport-jwt';
import { UserServices } from '../modules/users/services/user.services.js';
import { hashPassword, validatePassword } from '../utils/password.utils.js';
import { cookieExtractor } from '../utils/cookieExtractor.js';
import envsConfig from './envs.config.js';

const userServices = new UserServices();

const LocalStrategy = local.Strategy;
const JwtStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

export const initializePassport = () => {
  passport.use(
    'register',
    new LocalStrategy(
      { passReqToCallback: true, usernameField: 'email' },
      async (req, username, password, done) => {
        try {
          const { first_name, last_name } = req.body;
          const userExist = await userServices.getUser({ email: username });
          if (userExist) {
            return done(null, false, { message: 'user already exist' });
          }
          const newUser = {
            first_name,
            last_name,
            email: username,
            password: hashPassword(password),
          };
          const addedUser = await userServices.create(newUser);
          return done(null, addedUser);
        } catch (error) {
          done(error);
        }
      }
    )
  );
  passport.use(
    'login',
    new LocalStrategy(
      { usernameField: 'email' },
      async (username, password, done) => {
        try {
          const userExist = await userServices.getUser({ email: username });
          console.log('user:', userExist);

          console.log('password:', password);
          console.log('hashed password:', userExist?.password);
          if (!userExist || !validatePassword(password, userExist.password)) {
            return done(null, false);
          }
          return done(null, userExist);
        } catch (error) {
          done(error);
        }
      }
    )
  );
  passport.use(
    'jwt',
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: envsConfig.SECRET_CODE_JWT,
      },
      async (jwt_payload, done) => {
        try {
          const user = await userServices.getUser({ email: jwt_payload.email });
          if (!user) return done(null, false);
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    return done(null, user.email);
  });
  passport.deserializeUser(async (userEmail, done) => {
    try {
      const user = await userServices.getUser({ email: userEmail });
      return done(null, user);
    } catch (error) {}
  });
};
