import { Types } from 'mongoose';

export interface IOnboardingAssessment {
     userId: Types.ObjectId | string;
     fitnessGoal?: string[];
     activityLevel?: string;
     exerciseLevel?: string;
     workoutsType?: string[];
     eatingHabits?: string[];
     dailyMeals?: number;
     foodTypes?: string[];
     unusualSynonyms?: string[];
     medicalConditions?: string[];
}
