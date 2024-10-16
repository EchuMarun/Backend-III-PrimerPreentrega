import { Router } from 'express';
import { MocksController } from '../controllers/mocks.controller.js';
const mocksController = new MocksController();
const router = Router();
router.get('/mockingusers', mocksController.createUsers);
router.get('/mockingpets', mocksController.createPets);
router.post('/generateData/:cu/:cp', mocksController.createByParams);

export default router;
