import { userModel } from './models/users.models.js';
import { GenericRepository } from '../../../genericRepository/genericRepository.js';
export class UserRepository extends GenericRepository {
  constructor() {
    super(userModel);
  }
  getUserByEmail = async email => {
    try {
      return await this.getByParam({ email });
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
  getUserById = async uid => {
    try {
      return await this.getByParam({ _id: uid });
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
  createMany = async data => {
    try {
      const users = await userModel.insertMany(data);
      return users;
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
}
