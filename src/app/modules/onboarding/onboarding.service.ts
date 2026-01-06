import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { OnboardingAssessment } from './onboarding.model';
import { IOnboardingAssessment } from './onboarding.interface';

const createOnboarding = async (payload: IOnboardingAssessment) => {
     const doc = await OnboardingAssessment.create(payload);
     if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
     return doc;
};

const getOnboardingById = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await OnboardingAssessment.findById(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const listOnboarding = async (filter: any = {}) => OnboardingAssessment.find(filter).sort({ createdAt: -1 });

const updateOnboarding = async (id: string, payload: Partial<IOnboardingAssessment>) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await OnboardingAssessment.findByIdAndUpdate(id, payload, { new: true });
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const deleteOnboarding = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await OnboardingAssessment.findByIdAndDelete(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return true;
};

export const OnboardingService = { createOnboarding, getOnboardingById, listOnboarding, updateOnboarding, deleteOnboarding };
