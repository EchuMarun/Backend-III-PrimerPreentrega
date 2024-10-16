import petsModel from './models/pets.model.js';
import { GenericRepository } from '../../../genericRepository/genericRepository.js';
export class PetsRepository extends GenericRepository {
  constructor() {
    super(petsModel);
  }
  createMany = async data => {
    try {
      const pets = await petsModel.insertMany(data);
      return pets;
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
}
