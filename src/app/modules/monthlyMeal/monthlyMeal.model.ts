import { Schema, model, Types } from 'mongoose';

const MonthlyMealPlanSchema = new Schema(
    {
        userId: { type: Types.ObjectId, ref: 'User', required: true },
        biologicalInformationId: { type: Types.ObjectId, ref: 'BiologicalInformation' },
        onboardingAssessmentId: { type: Types.ObjectId, ref: 'OnboardingAssessment' },
        month: { type: String },
        year: { type: Number },
    },
    { timestamps: true },
);

export const UserMonthlyMealPlan = model('UserMonthlyMealPlan', MonthlyMealPlanSchema);
