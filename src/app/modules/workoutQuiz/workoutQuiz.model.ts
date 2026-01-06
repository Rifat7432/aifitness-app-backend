import { Schema, model, Types } from 'mongoose';

const WorkoutOnboardingQuizSchema = new Schema(
     {
          userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
          currentActiveness: { type: String },
          exerciseWantAdd: { type: String },
          consistentlyWorkoutPeriod: { type: String },
          workoutPlanGoal: { type: String },
          bodyPartOfImprovement: { type: String },
          currentWorkoutPlace: { type: String },
          isAbleToGoGym: { type: String },
          barriersToGymAccess: { type: [String] },
          availableEquipment: { type: [String] },
          weeklyTrainingDays: { type: String },
          workoutSession: { type: String },
     },
     { timestamps: true },
);

export const WorkoutOnboardingQuiz = model('WorkoutOnboardingQuiz', WorkoutOnboardingQuizSchema);
