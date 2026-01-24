import { Schema, model, Types } from 'mongoose';

const ProgressTrackerSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    Image: { type: String },
    notes: { type: String },
  },
  { timestamps: true },
);

export const ProgressTracker = model('ProgressTracker', ProgressTrackerSchema);
