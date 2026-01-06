import { Types } from 'mongoose';

export interface IWorkoutOnboardingQuiz {
     userId: Types.ObjectId | string;
     currentActiveness?: string;
     exerciseWantAdd?: string;
     consistentlyWorkoutPeriod?: string;
     workoutPlanGoal?: string;
     bodyPartOfImprovement?: string;
     currentWorkoutPlace?: string;
     isAbleToGoGym?: string;
     barriersToGymAccess?: string[];
     availableEquipment?: string[];
     weeklyTrainingDays?: string;
     workoutSession?: string;
}
