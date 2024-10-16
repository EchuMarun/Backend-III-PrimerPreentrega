import { createToken } from '../../../utils/createTokenJWT.js';
import { UserServices } from '../../users/services/user.services.js';

const userServices = new UserServices();

export class SessionsController {
  register = async (req, res) => {
    try {
      return res.status(201).json({ status: 'success', payload: req.user });
    } catch (error) {}
  };
  login = async (req, res) => {
    try {
      const user = await userServices.getUser({ email: req.user.email });
      const token = createToken(user);
      res.cookie('token', token);
      return res
        .status(200)
        .json({ status: 'success', payload: 'connected', token });
    } catch (error) {}
  };
}
