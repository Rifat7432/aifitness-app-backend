import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { FoodItemController } from './foodItem.controller';
import { FoodItemValidation } from './foodItem.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(FoodItemValidation.createFoodItemZodSchema), FoodItemController.createFoodItem)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), FoodItemController.listFoodItem);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(FoodItemValidation.idParam), FoodItemController.getFoodItem)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(FoodItemValidation.updateFoodItemZodSchema), FoodItemController.updateFoodItem)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(FoodItemValidation.idParam), FoodItemController.deleteFoodItem);

export const FoodItemRouter = router;
