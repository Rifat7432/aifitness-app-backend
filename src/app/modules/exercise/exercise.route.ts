import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { ExerciseController } from './exercise.controller';
import { ExerciseValidation } from './exercise.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(ExerciseValidation.createExerciseZodSchema), ExerciseController.createExercise)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), ExerciseController.listExercise);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(ExerciseValidation.idParam), ExerciseController.getExercise)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(ExerciseValidation.updateExerciseZodSchema), ExerciseController.updateExercise)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(ExerciseValidation.idParam), ExerciseController.deleteExercise);

export const ExerciseRouter = router;
