import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BiologicalService } from './biological.service';

const createBiological = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await BiologicalService.createBiological(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listBiological = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await BiologicalService.listBiological(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getBiological = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await BiologicalService.getBiologicalById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateBiological = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await BiologicalService.updateBiological(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteBiological = catchAsync(async (req, res) => {
     const id = req.params.id;
     await BiologicalService.deleteBiological(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const BiologicalController = { createBiological, listBiological, getBiological, updateBiological, deleteBiological };
