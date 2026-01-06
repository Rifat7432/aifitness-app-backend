import { Schema, model, Types } from 'mongoose';

const OnboardingAssessmentSchema = new Schema(
     {
          userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
          fitnessGoal: { type: [String] },
          activityLevel: { type: String },
          exerciseLevel: { type: String },
          workoutsType: { type: [String] },
          eatingHabits: { type: [String] },
          dailyMeals: { type: Number },
          foodTypes: { type: [String] },
          unusualSynonyms: { type: [String] },
          medicalConditions: { type: [String] },
     },
     { timestamps: true },
);

export const OnboardingAssessment = model('OnboardingAssessment', OnboardingAssessmentSchema);
