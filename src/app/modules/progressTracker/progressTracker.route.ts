import express, { NextFunction, Request, Response } from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { ProgressTrackerController } from './progressTracker.controller';
import { ProgressTrackerValidation } from './progressTracker.validation';
import { USER_ROLES } from '../../../enums/user';
import moveImagesVideosToS3 from '../../middleware/moveImagesVideosToS3';
import fileUploadHandler from '../../middleware/fileUploadHandler';

const router = express.Router();

router
     .route('/')
     .post(
          auth(USER_ROLES.ADMIN, USER_ROLES.USER),
          fileUploadHandler(),
          async (req: Request, res: Response, next: NextFunction) => {
               try {
                    // 🔹 Upload image/video files from local → S3
                    const s3Uploads = await moveImagesVideosToS3(req.files);

                    // pick S3 URL (single or first item if multiple)
                    const image = Array.isArray(s3Uploads.image) ? s3Uploads.image[0].url : s3Uploads.image?.url;

                    // merge request body
                    const data = JSON.parse(req.body?.data || '{}');
                    // normalize legacy fields on multipart payload
                    req.body = image ? { image, ...data } : { ...data };

                    next();
               } catch (error) {
                    next(error);
               }
          },
          validateRequest(ProgressTrackerValidation.createProgressTrackerZodSchema),
          ProgressTrackerController.createProgressTracker,
     )
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), ProgressTrackerController.listProgressTracker);

router.route('/between-dates').get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), ProgressTrackerController.getProgressTrackerBetweenDates);

router
     .route('/:id')
     .get(auth(USER_ROLES.ADMIN, USER_ROLES.USER), ProgressTrackerController.getProgressTracker)
     .patch(
          auth(USER_ROLES.ADMIN, USER_ROLES.USER),
          fileUploadHandler(),
          async (req: Request, res: Response, next: NextFunction) => {
               try {
                    // 🔹 Upload image/video files from local → S3
                    const s3Uploads = await moveImagesVideosToS3(req.files);

                    // pick S3 URL (single or first item if multiple)
                    const image = Array.isArray(s3Uploads.image) ? s3Uploads.image[0].url : s3Uploads.image?.url;

                    // merge request body
                    const data = JSON.parse(req.body?.data || '{}');
                    // normalize legacy fields on multipart payload
                    req.body = image ? { image, ...data } : { ...data };

                    next();
               } catch (error) {
                    next(error);
               }
          },
          validateRequest(ProgressTrackerValidation.updateProgressTrackerZodSchema),
          ProgressTrackerController.updateProgressTracker,
     )
     .delete(auth(USER_ROLES.ADMIN, USER_ROLES.USER), ProgressTrackerController.deleteProgressTracker);

export const ProgressTrackerRouter = router;
