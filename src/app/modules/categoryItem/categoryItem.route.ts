import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { CategoryItemController } from './categoryItem.controller';
import { CategoryItemValidation } from './categoryItem.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(CategoryItemValidation.createCategoryItemZodSchema), CategoryItemController.createCategoryItem)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), CategoryItemController.listCategoryItem);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(CategoryItemValidation.idParam), CategoryItemController.getCategoryItem)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(CategoryItemValidation.updateCategoryItemZodSchema), CategoryItemController.updateCategoryItem)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(CategoryItemValidation.idParam), CategoryItemController.deleteCategoryItem);

export const CategoryItemRouter = router;
