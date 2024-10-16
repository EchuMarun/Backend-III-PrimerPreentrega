import { PetsServices } from '../services/pets.services.js';
const petsServices = new PetsServices();

export class PetsController {
  createPet = async (req, res) => {
    try {
      const newPet = await petsServices.create(req.body);
      res.status(201).json({ status: 'success', payload: newPet });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };
  getAllPets = async (req, res) => {
    try {
      const pets = await petsServices.getAllPets();
      res.status(200).json({ status: 'success', payload: pets });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };

  getPet = async (req, res) => {
    try {
      const { pid } = req.params;
      const pet = await petsServices.getPet(pid);
      if (!pet)
        res
          .status(404)
          .json({ status: 'not found', message: "pet doesn't exist" });
      res.status(200).json({ status: 'success', payload: pet });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };
  updatePet = async (req, res) => {
    try {
      const { pid } = req.params;

      const updatedPet = await petsServices.updatePet(pid, req.body);
      res.status(200).json({ status: 'success', payload: updatedPet });
    } catch (error) {
      if (error) {
        console.error(`error controllers:${error}`),
          res
            .status(400)
            .json({ status: 'Error', message: 'internal server Error' });
      }
    }
  };
  deletePet = async (req, res) => {
    try {
      const { pid } = req.params;
      const deletedPet = await petsServices.deletePet(pid);
      res.status(200).json({ status: 'success', payload: deletedPet });
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
