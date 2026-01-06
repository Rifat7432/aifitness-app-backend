import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { UserWeeklyWorkoutPlan } from './weeklyPlan.model';
import { IWeeklyWorkoutPlan } from './weeklyPlan.interface';

const createWeeklyPlan = async (payload: IWeeklyWorkoutPlan) => {
     const doc = await UserWeeklyWorkoutPlan.create(payload);
     if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
     return doc;
};

const getWeeklyPlanById = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await UserWeeklyWorkoutPlan.findById(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const listWeeklyPlan = async (filter: any = {}) => UserWeeklyWorkoutPlan.find(filter).sort({ createdAt: -1 });

const updateWeeklyPlan = async (id: string, payload: Partial<IWeeklyWorkoutPlan>) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await UserWeeklyWorkoutPlan.findByIdAndUpdate(id, payload, { new: true });
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const deleteWeeklyPlan = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await UserWeeklyWorkoutPlan.findByIdAndDelete(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return true;
};

export const WeeklyPlanService = { createWeeklyPlan, getWeeklyPlanById, listWeeklyPlan, updateWeeklyPlan, deleteWeeklyPlan };
