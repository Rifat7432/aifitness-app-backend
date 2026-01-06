import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { UserMonthlyMealPlan } from './monthlyMeal.model';
import { IMonthlyMealPlan } from './monthlyMeal.interface';

const createMonthlyMeal = async (payload: IMonthlyMealPlan) => {
    const doc = await UserMonthlyMealPlan.create(payload);
    if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
    return doc;
};

const getMonthlyMealById = async (id: string) => {
    if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
    const doc = await UserMonthlyMealPlan.findById(id);
    if (!doc) throw new AppError(StatusCodes.NOT_FOUND, "Not found");
    return doc;
};

const listMonthlyMeal = async (filter: any = {}) => UserMonthlyMealPlan.find(filter).sort({ createdAt: -1 });

const updateMonthlyMeal = async (id: string, payload: Partial<IMonthlyMealPlan>) => {
    if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
    const doc = await UserMonthlyMealPlan.findByIdAndUpdate(id, payload, { new: true });
    if (!doc) throw new AppError(StatusCodes.NOT_FOUND, "Not found");
    return doc;
};

const deleteMonthlyMeal = async (id: string) => {
    if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
    const doc = await UserMonthlyMealPlan.findByIdAndDelete(id);
    if (!doc) throw new AppError(StatusCodes.NOT_FOUND, "Not found");
    return true;
};

export const MonthlyMealService = { createMonthlyMeal, getMonthlyMealById, listMonthlyMeal, updateMonthlyMeal, deleteMonthlyMeal };
