import { Schema, model, Types } from 'mongoose';

const FoodItemSchema = new Schema(
     {
          mealPlanId: { type: Types.ObjectId, ref: 'UserMonthlyMealPlan', required: true },
          mealDayId: { type: Types.ObjectId, ref: 'UserDailyMealPlan', required: true },
          userId: { type: Types.ObjectId, ref: 'User', required: true },
          name: { type: String },
          calories: { type: Number },
          protein: { type: Number },
          carbs: { type: Number },
          fat: { type: Number },
     },
     { timestamps: true },
);

export const FoodItem = model('FoodItem', FoodItemSchema);
