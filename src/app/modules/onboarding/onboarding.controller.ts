import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OnboardingService } from './onboarding.service';

const createOnboarding = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await OnboardingService.createOnboarding(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listOnboarding = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await OnboardingService.listOnboarding(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getOnboarding = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await OnboardingService.getOnboardingById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateOnboarding = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await OnboardingService.updateOnboarding(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteOnboarding = catchAsync(async (req, res) => {
     const id = req.params.id;
     await OnboardingService.deleteOnboarding(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const OnboardingController = { createOnboarding, listOnboarding, getOnboarding, updateOnboarding, deleteOnboarding };
