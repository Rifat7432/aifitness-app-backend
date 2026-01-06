import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { OnboardingController } from './onboarding.controller';
import { OnboardingValidation } from './onboarding.validation';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router
     .route('/')
     .post(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(OnboardingValidation.createOnboardingZodSchema), OnboardingController.createOnboarding)
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), OnboardingController.listOnboarding);
router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(OnboardingValidation.idParam), OnboardingController.getOnboarding)
     .patch(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(OnboardingValidation.updateOnboardingZodSchema), OnboardingController.updateOnboarding)
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), validateRequest(OnboardingValidation.idParam), OnboardingController.deleteOnboarding);

export const OnboardingRouter = router;
