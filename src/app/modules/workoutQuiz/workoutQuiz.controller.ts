import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { WorkoutQuizService } from './workoutQuiz.service';

const createWorkoutQuiz = catchAsync(async (req, res) => {
     const payload = req.body;
     const result = await WorkoutQuizService.createWorkoutQuiz(payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Created', data: result });
});

const listWorkoutQuiz = catchAsync(async (req, res) => {
     const filter = req.query || {};
     const result = await WorkoutQuizService.listWorkoutQuiz(filter);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'List', data: result });
});

const getWorkoutQuiz = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await WorkoutQuizService.getWorkoutQuizById(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Retrieved', data: result });
});

const updateWorkoutQuiz = catchAsync(async (req, res) => {
     const id = req.params.id;
     const payload = req.body;
     const result = await WorkoutQuizService.updateWorkoutQuiz(id, payload);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Updated', data: result });
});

const deleteWorkoutQuiz = catchAsync(async (req, res) => {
     const id = req.params.id;
     await WorkoutQuizService.deleteWorkoutQuiz(id);
     sendResponse(res, { success: true, statusCode: StatusCodes.OK, message: 'Deleted', data: null });
});

export const WorkoutQuizController = { createWorkoutQuiz, listWorkoutQuiz, getWorkoutQuiz, updateWorkoutQuiz, deleteWorkoutQuiz };
