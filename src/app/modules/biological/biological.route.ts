import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { BiologicalController } from './biological.controller';
import { BiologicalValidation } from './biological.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(BiologicalValidation.createBiologicalZodSchema), BiologicalController.createBiological)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), BiologicalController.listBiological);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(BiologicalValidation.idParam), BiologicalController.getBiological)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(BiologicalValidation.updateBiologicalZodSchema), BiologicalController.updateBiological)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(BiologicalValidation.idParam), BiologicalController.deleteBiological);

export const BiologicalRouter = router;
