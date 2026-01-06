import { Types } from 'mongoose';

export interface IDailyMealPlan {
     mealPlanId: Types.ObjectId | string;
     userId: Types.ObjectId | string;
     date?: Date;
     mealType?: string;
     notes?: string;
}
