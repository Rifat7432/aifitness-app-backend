import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { WeeklyPlanService } from './weeklyPlan.service';

const createWeeklyPlan = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await WeeklyPlanService.createWeeklyPlan(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listWeeklyPlan = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await WeeklyPlanService.listWeeklyPlan(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getWeeklyPlan = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await WeeklyPlanService.getWeeklyPlanById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateWeeklyPlan = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await WeeklyPlanService.updateWeeklyPlan(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteWeeklyPlan = catchAsync(async (req, res) => {
     const id = req.params.id;
     await WeeklyPlanService.deleteWeeklyPlan(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const WeeklyPlanController = { createWeeklyPlan, listWeeklyPlan, getWeeklyPlan, updateWeeklyPlan, deleteWeeklyPlan };
