import { UserServices } from '../services/user.services.js';
const userServices = new UserServices();

export class UserController {
  createUser = async (req, res) => {
    try {
      const newUser = await userServices.create(req.body);
      res.status(201).json({ status: 'success', payload: newUser });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };
  getAllUsers = async (req, res) => {
    try {
      const users = await userServices.getAllUsers();
      res.status(200).json({ status: 'success', payload: users });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };

  getUser = async (req, res) => {
    try {
      const { uid } = req.params;
      const user = await userServices.getUser(uid);
      if (!user)
        res
          .status(404)
          .json({ status: 'not found', message: "user doesn't exist" });
      res.status(200).json({ status: 'success', payload: user });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };
  updateUser = async (req, res) => {
    try {
      const { uid } = req.params;

      const updatedUser = await userServices.updateUser(uid, req.body);
      res.status(200).json({ status: 'success', payload: updatedUser });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };
  deleteUser = async (req, res) => {
    try {
      const { uid } = req.params;
      const deletedUser = await userServices.deleteUser(uid);
      res.status(200).json({ status: 'success', payload: deletedUser });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };
}
