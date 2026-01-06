import { Schema, model, Types } from 'mongoose';

const DailyWorkoutSessionSchema = new Schema(
     {
          workoutPlanId: { type: Types.ObjectId, ref: 'UserWeeklyWorkoutPlan', required: true },
          userId: { type: Types.ObjectId, ref: 'User', required: true },
          title: { type: String },
          workoutType: { type: String },
          intensity: { type: String },
          estimatedCaloriesBurn: { type: Number },
          isCompleted: { type: Boolean, default: false },
     },
     { timestamps: true },
);

export const DailyWorkoutSession = model('DailyWorkoutSession', DailyWorkoutSessionSchema);
