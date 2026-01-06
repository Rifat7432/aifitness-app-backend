import { Schema, model, Types } from 'mongoose';

const WeeklyWorkoutPlanSchema = new Schema(
     {
          userId: { type: Types.ObjectId, ref: 'User', required: true },
          onboardingAssessmentId: { type: Types.ObjectId, ref: 'OnboardingAssessment' },
          title: { type: String },
          weekStartDate: Date,
          weekEndDate: Date,
     },
     { timestamps: true },
);

export const UserWeeklyWorkoutPlan = model('UserWeeklyWorkoutPlan', WeeklyWorkoutPlanSchema);
