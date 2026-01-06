import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryItemService } from './categoryItem.service';

const createCategoryItem = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await CategoryItemService.createCategoryItem(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listCategoryItem = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await CategoryItemService.listCategoryItem(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getCategoryItem = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await CategoryItemService.getCategoryItemById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateCategoryItem = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await CategoryItemService.updateCategoryItem(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteCategoryItem = catchAsync(async (req, res) => {
     const id = req.params.id;
     await CategoryItemService.deleteCategoryItem(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const CategoryItemController = { createCategoryItem, listCategoryItem, getCategoryItem, updateCategoryItem, deleteCategoryItem };
