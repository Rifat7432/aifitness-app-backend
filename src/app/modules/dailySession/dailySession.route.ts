import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { DailySessionController } from './dailySession.controller';
import { DailySessionValidation } from './dailySession.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(DailySessionValidation.createDailySessionZodSchema), DailySessionController.createDailySession)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), DailySessionController.listDailySession);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(DailySessionValidation.idParam), DailySessionController.getDailySession)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(DailySessionValidation.updateDailySessionZodSchema), DailySessionController.updateDailySession)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(DailySessionValidation.idParam), DailySessionController.deleteDailySession);

export const DailySessionRouter = router;
