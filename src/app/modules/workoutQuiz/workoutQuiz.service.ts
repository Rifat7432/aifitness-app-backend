import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { WorkoutOnboardingQuiz } from './workoutQuiz.model';
import { IWorkoutOnboardingQuiz } from './workoutQuiz.interface';

const createWorkoutQuiz = async (payload: IWorkoutOnboardingQuiz) => {
     const doc = await WorkoutOnboardingQuiz.create(payload);
     if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
     return doc;
};

const getWorkoutQuizById = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await WorkoutOnboardingQuiz.findById(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const listWorkoutQuiz = async (filter: any = {}) => WorkoutOnboardingQuiz.find(filter).sort({ createdAt: -1 });

const updateWorkoutQuiz = async (id: string, payload: Partial<IWorkoutOnboardingQuiz>) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await WorkoutOnboardingQuiz.findByIdAndUpdate(id, payload, { new: true });
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const deleteWorkoutQuiz = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await WorkoutOnboardingQuiz.findByIdAndDelete(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return true;
};

export const WorkoutQuizService = { createWorkoutQuiz, getWorkoutQuizById, listWorkoutQuiz, updateWorkoutQuiz, deleteWorkoutQuiz };
