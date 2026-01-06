import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { MonthlyMealController } from './monthlyMeal.controller';
import { MonthlyMealValidation } from './monthlyMeal.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router.route('/').post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(MonthlyMealValidation.createMonthlyMealZodSchema), MonthlyMealController.createMonthlyMeal).get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), MonthlyMealController.listMonthlyMeal);
router.route('/:id').get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(MonthlyMealValidation.idParam), MonthlyMealController.getMonthlyMeal).patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(MonthlyMealValidation.updateMonthlyMealZodSchema), MonthlyMealController.updateMonthlyMeal).delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(MonthlyMealValidation.idParam), MonthlyMealController.deleteMonthlyMeal);

export const MonthlyMealRouter = router;
