import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { DailyWorkoutSession } from './dailySession.model';
import { IDailyWorkoutSession } from './dailySession.interface';

const createDailySession = async (payload: IDailyWorkoutSession) => {
     const doc = await DailyWorkoutSession.create(payload);
     if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
     return doc;
};

const getDailySessionById = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await DailyWorkoutSession.findById(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const listDailySession = async (filter: any = {}) => DailyWorkoutSession.find(filter).sort({ createdAt: -1 });

const updateDailySession = async (id: string, payload: Partial<IDailyWorkoutSession>) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await DailyWorkoutSession.findByIdAndUpdate(id, payload, { new: true });
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const deleteDailySession = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await DailyWorkoutSession.findByIdAndDelete(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return true;
};

export const DailySessionService = { createDailySession, getDailySessionById, listDailySession, updateDailySession, deleteDailySession };
