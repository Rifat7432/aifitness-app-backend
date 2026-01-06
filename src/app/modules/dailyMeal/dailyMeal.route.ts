import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { DailyMealController } from './dailyMeal.controller';
import { DailyMealValidation } from './dailyMeal.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(DailyMealValidation.createDailyMealZodSchema), DailyMealController.createDailyMeal)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), DailyMealController.listDailyMeal);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(DailyMealValidation.idParam), DailyMealController.getDailyMeal)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(DailyMealValidation.updateDailyMealZodSchema), DailyMealController.updateDailyMeal)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(DailyMealValidation.idParam), DailyMealController.deleteDailyMeal);

export const DailyMealRouter = router;
