import { Router } from 'express';
import passport from 'passport';
import { SessionsController } from '../controllers/sessions.controller.js';
const router = Router();
const sessionsController = new SessionsController();

router.post(
  '/register',
  passport.authenticate('register'),
  sessionsController.register
);
router.post('/login', passport.authenticate('login'), sessionsController.login);

export default router;
