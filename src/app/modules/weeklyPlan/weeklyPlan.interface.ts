import { Types } from 'mongoose';

export interface IWeeklyWorkoutPlan {
     userId: Types.ObjectId | string;
     onboardingAssessmentId?: Types.ObjectId | string;
     title?: string;
     weekStartDate?: Date;
     weekEndDate?: Date;
}
