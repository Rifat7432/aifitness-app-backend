import { Schema, model, Types } from 'mongoose';

const DailyMealPlanSchema = new Schema(
     {
          mealPlanId: { type: Types.ObjectId, ref: 'UserMonthlyMealPlan', required: true },
          userId: { type: Types.ObjectId, ref: 'User', required: true },
          date: Date,
          mealType: { type: String },
          notes: { type: String },
     },
     { timestamps: true },
);

export const UserDailyMealPlan = model('UserDailyMealPlan', DailyMealPlanSchema);
