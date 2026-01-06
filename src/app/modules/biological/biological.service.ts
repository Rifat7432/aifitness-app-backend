import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { BiologicalInformation } from './biological.model';
import { IBiologicalInformation } from './biological.interface';

const createBiological = async (payload: IBiologicalInformation) => {
     const doc = await BiologicalInformation.create(payload);
     if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
     return doc;
};

const getBiologicalById = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await BiologicalInformation.findById(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const listBiological = async (filter: any = {}) => BiologicalInformation.find(filter).sort({ createdAt: -1 });

const updateBiological = async (id: string, payload: Partial<IBiologicalInformation>) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await BiologicalInformation.findByIdAndUpdate(id, payload, { new: true });
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const deleteBiological = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await BiologicalInformation.findByIdAndDelete(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return true;
};

export const BiologicalService = { createBiological, getBiologicalById, listBiological, updateBiological, deleteBiological };
