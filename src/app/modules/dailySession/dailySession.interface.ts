import { Types } from 'mongoose';

export interface IDailyWorkoutSession {
     workoutPlanId: Types.ObjectId | string;
     userId: Types.ObjectId | string;
     title?: string;
     workoutType?: string;
     intensity?: string;
}
