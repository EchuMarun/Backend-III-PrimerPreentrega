import { transformArrayUser, transformSingleUser } from '../dto/users.dto.js';
import { UserRepository } from '../persistence/users.repository.js';
const userRepository = new UserRepository();
export class UserServices {
  create = async data => {
    try {
      const newUser = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
      };
      const userAdded = await userRepository.create(newUser);
      return transformSingleUser(userAdded);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };

  createMany = async data => {
    try {
      const savedUser = await userRepository.createMany(data);
      return savedUser;
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  getAllUsers = async () => {
    try {
      const users = await userRepository.getAll();
      return transformArrayUser(users);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  getUser = async params => {
    try {
      const user = await userRepository.getByParam(params);

      return user;
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  updateUser = async (uid, updates) => {
    try {
      const udpatedUser = await userRepository.update(uid, updates);
      return transformSingleUser(udpatedUser);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  deleteUser = async uid => {
    try {
      return await userRepository.delete(uid);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
}
