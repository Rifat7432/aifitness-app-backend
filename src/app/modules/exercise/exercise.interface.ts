import { Types } from 'mongoose';

export interface IExercise {
     workoutSessionId: Types.ObjectId | string;
     workoutPlanId: Types.ObjectId | string;
     userId: Types.ObjectId | string;
     name?: string;
     muscleGroups?: string[];
     durationMin?: number;
     sets?: number;
     reps?: number;
}
