import { Schema, model, Types } from 'mongoose';

const CategoryItemSchema = new Schema(
     {
          goalsId: { type: Types.ObjectId, ref: 'UserGoals', required: true },
          userId: { type: Types.ObjectId, ref: 'User', required: true },
          category: { type: String },
          name: { type: String },
          target: { type: Number, default: 0 },
          consumed: { type: Number, default: 0 },
          isGoodIfHigh: { type: Boolean, default: true },
     },
     { timestamps: true },
);

export const CategoryItem = model('CategoryItem', CategoryItemSchema);
