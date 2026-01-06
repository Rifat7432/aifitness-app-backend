import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DailyMealService } from './dailyMeal.service';

const createDailyMeal = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await DailyMealService.createDailyMeal(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listDailyMeal = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await DailyMealService.listDailyMeal(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getDailyMeal = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await DailyMealService.getDailyMealById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateDailyMeal = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await DailyMealService.updateDailyMeal(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteDailyMeal = catchAsync(async (req, res) => {
     const id = req.params.id;
     await DailyMealService.deleteDailyMeal(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const DailyMealController = { createDailyMeal, listDailyMeal, getDailyMeal, updateDailyMeal, deleteDailyMeal };
