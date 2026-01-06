import { Types } from 'mongoose';

export interface ICategoryItem {
     goalsId: Types.ObjectId | string;
     userId: Types.ObjectId | string;
     category?: string;
     name?: string;
     target?: number;
     consumed?: number;
     isGoodIfHigh?: boolean;
}
