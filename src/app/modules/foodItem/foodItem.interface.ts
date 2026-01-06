import { Types } from 'mongoose';

export interface IFoodItem {
     mealPlanId: Types.ObjectId | string;
     mealDayId: Types.ObjectId | string;
     userId: Types.ObjectId | string;
     name?: string;
     calories?: number;
     protein?: number;
     carbs?: number;
     fat?: number;
}
