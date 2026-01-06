import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { UserDailyMealPlan } from './dailyMeal.model';
import { IDailyMealPlan } from './dailyMeal.interface';

const createDailyMeal = async (payload: IDailyMealPlan) => {
     const doc = await UserDailyMealPlan.create(payload);
     if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
     return doc;
};

const getDailyMealById = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await UserDailyMealPlan.findById(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const listDailyMeal = async (filter: any = {}) => UserDailyMealPlan.find(filter).sort({ createdAt: -1 });

const updateDailyMeal = async (id: string, payload: Partial<IDailyMealPlan>) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await UserDailyMealPlan.findByIdAndUpdate(id, payload, { new: true });
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const deleteDailyMeal = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await UserDailyMealPlan.findByIdAndDelete(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return true;
};

export const DailyMealService = { createDailyMeal, getDailyMealById, listDailyMeal, updateDailyMeal, deleteDailyMeal };
