import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DailySessionService } from './dailySession.service';

const createDailySession = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await DailySessionService.createDailySession(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listDailySession = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await DailySessionService.listDailySession(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getDailySession = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await DailySessionService.getDailySessionById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateDailySession = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await DailySessionService.updateDailySession(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteDailySession = catchAsync(async (req, res) => {
     const id = req.params.id;
     await DailySessionService.deleteDailySession(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const DailySessionController = { createDailySession, listDailySession, getDailySession, updateDailySession, deleteDailySession };
