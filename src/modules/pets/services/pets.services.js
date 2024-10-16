import { transformArrayPets, transformSinglePet } from '../dto/pets.dto.js';
import { PetsRepository } from '../persistence/pets.repository.js';
const petsRepository = new PetsRepository();
export class PetsServices {
  create = async data => {
    try {
      const newPet = {
        name: data.name,
        specie: data.specie,
        birthDate: data.date ? new Date(data.date) : null,
      };
      const petAdded = await petsRepository.create(newPet);
      return transformSinglePet(petAdded);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  createMany = async data => {
    try {
      const savedPets = await petsRepository.createMany(data);
      return savedPets;
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  getAllPets = async () => {
    try {
      const pets = await petsRepository.getAll();
      return transformArrayPets(pets);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  getPet = async params => {
    try {
      const pet = await petsRepository.getByParam({ _id: params });
      return transformSinglePet(pet);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  updatePet = async (uid, updates) => {
    try {
      const udpatedPet = await petsRepository.update(uid, updates);
      return transformSinglePet(udpatedPet);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
  deletePet = async uid => {
    try {
      return await petsRepository.delete(uid);
    } catch (error) {
      console.error(`services error:${error}`);
      throw new Error('internal server Error');
    }
  };
}
