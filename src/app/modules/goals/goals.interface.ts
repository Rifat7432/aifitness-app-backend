import { Types } from 'mongoose';

export interface IUserGoals {
    userId: Types.ObjectId | string;
    biologicalInformationId?: Types.ObjectId | string;
    onboardingAssessmentId?: Types.ObjectId | string;
    date?: Date;
    calories?: any;
    macros?: any;
    waterIntake?: any;
}
