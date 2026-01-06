import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { WeeklyPlanController } from './weeklyPlan.controller';
import { WeeklyPlanValidation } from './weeklyPlan.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(WeeklyPlanValidation.createWeeklyPlanZodSchema), WeeklyPlanController.createWeeklyPlan)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), WeeklyPlanController.listWeeklyPlan);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(WeeklyPlanValidation.idParam), WeeklyPlanController.getWeeklyPlan)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(WeeklyPlanValidation.updateWeeklyPlanZodSchema), WeeklyPlanController.updateWeeklyPlan)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(WeeklyPlanValidation.idParam), WeeklyPlanController.deleteWeeklyPlan);

export const WeeklyPlanRouter = router;
