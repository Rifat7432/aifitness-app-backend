import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProgressTrackerService } from './progressTracker.service';

const createProgressTracker = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await ProgressTrackerService.createProgressTracker(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listProgressTracker = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await ProgressTrackerService.listProgressTracker(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getProgressTracker = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await ProgressTrackerService.getProgressTrackerById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateProgressTracker = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await ProgressTrackerService.updateProgressTracker(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteProgressTracker = catchAsync(async (req, res) => {
     const id = req.params.id;
     await ProgressTrackerService.deleteProgressTracker(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

const getProgressTrackerBetweenDates = catchAsync(async (req, res) => {
     const { userId, startDate, endDate } = req.query;
     const result = await ProgressTrackerService.getProgressTrackerBetweenDates(userId as string, startDate as string, endDate as string);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

export const ProgressTrackerController = { createProgressTracker, listProgressTracker, getProgressTracker, updateProgressTracker, deleteProgressTracker, getProgressTrackerBetweenDates };
