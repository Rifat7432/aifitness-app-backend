import { Types } from 'mongoose';

export interface IProgressTracker {
     userId: Types.ObjectId | string;
     date: Date;
     Image?: string;
     notes?: string;
}
