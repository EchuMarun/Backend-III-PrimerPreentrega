import { UserServices } from '../../users/services/user.services.js';
import { PetsServices } from '../../pets/services/pets.services.js';
import { generateMocks } from '../mocksGenerator.js';

const userServices = new UserServices();
const petsServices = new PetsServices();
export class MocksController {
  createUsers = async (req, res) => {
    try {
      const users = generateMocks('user', 50);
      const savedUsers = await userServices.createMany(users);
      res.status(201).json({ status: 'success', payload: savedUsers });
    } catch (error) {
      console.error(`services error:${error}`);
      res.status(500).json({ status: 'error', message: error.message });
    }
  };
  createPets = async (req, res) => {
    try {
      const pets = generateMocks('pets', 50);
      const savedPets = await petsServices.createMany(pets);
      res.status(201).json({ status: 'success', payload: savedPets });
    } catch (error) {
      console.error(`services error:${error}`);
      res.status(500).json({ status: 'error', message: error.message });
    }
  };
  createByParams = async (req, res) => {
    try {
      const { cu, cp } = req.params;
      const users = generateMocks('user', cu);
      const pets = generateMocks('pets', cp);
      const savedUsers = await userServices.createMany(users);
      const savedPets = await petsServices.createMany(pets);
      res
        .status(201)
        .json({ status: 'success', payload: { savedUsers, savedPets } });
    } catch (error) {
      console.error(`services error:${error}`);
      res.status(500).json({ status: 'error', message: error.message });
    }
  };
}
