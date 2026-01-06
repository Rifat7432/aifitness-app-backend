import { Types } from 'mongoose';

export interface IMonthlyMealPlan {
    userId: Types.ObjectId | string;
    biologicalInformationId?: Types.ObjectId | string;
    onboardingAssessmentId?: Types.ObjectId | string;
    month?: number;
    year?: number;
}
