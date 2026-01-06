import { Schema, model, Types } from 'mongoose';

const TargetConsumedSchema = new Schema(
     {
          target: { type: Number, default: 0 },
          consumed: { type: Number, default: 0 },
     },
     { _id: false },
);

const MacrosSchema = new Schema(
     {
          protein: TargetConsumedSchema,
          carbs: TargetConsumedSchema,
          fat: TargetConsumedSchema,
     },
     { _id: false },
);

const WaterSchema = new Schema(
     {
          targetOz: { type: Number, default: 0 },
          consumedOz: { type: Number, default: 0 },
     },
     { _id: false },
);

const UserGoalsSchema = new Schema(
     {
          userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
          biologicalInformationId: { type: Types.ObjectId, ref: 'BiologicalInformation' },
          onboardingAssessmentId: { type: Types.ObjectId, ref: 'OnboardingAssessment' },
          date: Date,
          calories: TargetConsumedSchema,
          macros: MacrosSchema,
          waterIntake: WaterSchema,
     },
     { timestamps: true },
);

export const UserGoals = model('UserGoals', UserGoalsSchema);
