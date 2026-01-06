import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ExerciseService } from './exercise.service';

const createExercise = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await ExerciseService.createExercise(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listExercise = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await ExerciseService.listExercise(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getExercise = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await ExerciseService.getExerciseById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateExercise = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await ExerciseService.updateExercise(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteExercise = catchAsync(async (req, res) => {
     const id = req.params.id;
     await ExerciseService.deleteExercise(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const ExerciseController = { createExercise, listExercise, getExercise, updateExercise, deleteExercise };
