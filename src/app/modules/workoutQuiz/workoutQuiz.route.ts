import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { WorkoutQuizController } from './workoutQuiz.controller';
import { WorkoutQuizValidation } from './workoutQuiz.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(WorkoutQuizValidation.createWorkoutQuizZodSchema), WorkoutQuizController.createWorkoutQuiz)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), WorkoutQuizController.listWorkoutQuiz);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(WorkoutQuizValidation.idParam), WorkoutQuizController.getWorkoutQuiz)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(WorkoutQuizValidation.updateWorkoutQuizZodSchema), WorkoutQuizController.updateWorkoutQuiz)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(WorkoutQuizValidation.idParam), WorkoutQuizController.deleteWorkoutQuiz);

export const WorkoutQuizRouter = router;
