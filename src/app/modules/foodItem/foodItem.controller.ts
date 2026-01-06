import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FoodItemService } from './foodItem.service';

const createFoodItem = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await FoodItemService.createFoodItem(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listFoodItem = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await FoodItemService.listFoodItem(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getFoodItem = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await FoodItemService.getFoodItemById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateFoodItem = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await FoodItemService.updateFoodItem(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteFoodItem = catchAsync(async (req, res) => {
     const id = req.params.id;
     await FoodItemService.deleteFoodItem(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const FoodItemController = { createFoodItem, listFoodItem, getFoodItem, updateFoodItem, deleteFoodItem };
