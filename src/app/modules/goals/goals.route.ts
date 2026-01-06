import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { GoalsController } from './goals.controller';
import { GoalsValidation } from './goals.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(GoalsValidation.createGoalsZodSchema), GoalsController.createGoals)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), GoalsController.listGoals);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(GoalsValidation.idParam), GoalsController.getGoals)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(GoalsValidation.updateGoalsZodSchema), GoalsController.updateGoals)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(GoalsValidation.idParam), GoalsController.deleteGoals);

export const GoalsRouter = router;
