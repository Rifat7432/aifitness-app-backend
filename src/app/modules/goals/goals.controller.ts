import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { GoalsService } from './goals.service';

const createGoals = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await GoalsService.createGoals(payload);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listGoals = catchAsync(async (req, res) => {
    const filter = req.query || {};
    const result = await GoalsService.listGoals(filter);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getGoals = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await GoalsService.getGoalsById(id);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateGoals = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await GoalsService.updateGoals(id, payload);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteGoals = catchAsync(async (req, res) => {
    const id = req.params.id;
    await GoalsService.deleteGoals(id);
    sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const GoalsController = { createGoals, listGoals, getGoals, updateGoals, deleteGoals };
