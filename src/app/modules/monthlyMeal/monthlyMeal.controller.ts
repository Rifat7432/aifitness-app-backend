import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { MonthlyMealService } from './monthlyMeal.service';

const createMonthlyMeal = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await MonthlyMealService.createMonthlyMeal(payload);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listMonthlyMeal = catchAsync(async (req, res) => {
    const filter = req.query || {};
    const result = await MonthlyMealService.listMonthlyMeal(filter);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getMonthlyMeal = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await MonthlyMealService.getMonthlyMealById(id);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateMonthlyMeal = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await MonthlyMealService.updateMonthlyMeal(id, payload);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteMonthlyMeal = catchAsync(async (req, res) => {
    const id = req.params.id;
    await MonthlyMealService.deleteMonthlyMeal(id);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const MonthlyMealController = { createMonthlyMeal, listMonthlyMeal, getMonthlyMeal, updateMonthlyMeal, deleteMonthlyMeal };
