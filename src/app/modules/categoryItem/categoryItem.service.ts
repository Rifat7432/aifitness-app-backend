import { Types } from 'mongoose';
import AppError from '../../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { CategoryItem } from './categoryItem.model';
import { ICategoryItem } from './categoryItem.interface';

const createCategoryItem = async (payload: ICategoryItem) => {
     const doc = await CategoryItem.create(payload);
     if (!doc) throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create');
     return doc;
};

const getCategoryItemById = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await CategoryItem.findById(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const listCategoryItem = async (filter: any = {}) => CategoryItem.find(filter).sort({ createdAt: -1 });

const updateCategoryItem = async (id: string, payload: Partial<ICategoryItem>) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await CategoryItem.findByIdAndUpdate(id, payload, { new: true });
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return doc;
};

const deleteCategoryItem = async (id: string) => {
     if (!Types.ObjectId.isValid(id)) throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid id');
     const doc = await CategoryItem.findByIdAndDelete(id);
     if (!doc) throw new AppError(StatusCodes.NOT_FOUND, 'Not found');
     return true;
};

export const CategoryItemService = { createCategoryItem, getCategoryItemById, listCategoryItem, updateCategoryItem, deleteCategoryItem };
