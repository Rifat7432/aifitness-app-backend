import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { ProgressTracker } from './progressTracker.model';
import { IProgressTracker } from './progressTracker.interface';

const createProgressTracker = async (payload: IProgressTracker) => {
     const doc = await ProgressTracker.create(payload);
     if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
     return doc;
};

const getProgressTrackerById = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await ProgressTracker.findById(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const listProgressTracker = async (filter: any = {}) => ProgressTracker.find(filter).sort({ createdAt: -1 });

const updateProgressTracker = async (id: string, payload: Partial<IProgressTracker>) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await ProgressTracker.findByIdAndUpdate(id, payload, { new: true });
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const deleteProgressTracker = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await ProgressTracker.findByIdAndDelete(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return true;
};

const getProgressTrackerBetweenDates = async (userId: string, startDate: string, endDate: string) => {
     if (!Types.ObjectId.isValid(userId)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid userId');

     const docs = await ProgressTracker.find({
          userId: new Types.ObjectId(userId),
          date: { $in: [startDate, endDate] },
     }).sort({ date: -1 });

     return docs;
};

export const ProgressTrackerService = { createProgressTracker, getProgressTrackerById, listProgressTracker, updateProgressTracker, deleteProgressTracker, getProgressTrackerBetweenDates };
