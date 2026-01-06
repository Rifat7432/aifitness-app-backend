import { Schema, model, Types } from 'mongoose';

const ExerciseSchema = new Schema(
     {
          workoutSessionId: { type: Types.ObjectId, ref: 'DailyWorkoutSession', required: true },
          workoutPlanId: { type: Types.ObjectId, ref: 'UserWeeklyWorkoutPlan', required: true },
          userId: { type: Types.ObjectId, ref: 'User', required: true },
          name: { type: String },
          muscleGroups: { type: [String] },
          durationMin: { type: Number },
          sets: { type: Number },
          reps: { type: Number },
          restSeconds: { type: Number },
          weight: { type: Number },
          isCompleted: { type: Boolean, default: false },
     },
     { timestamps: true },
);

export const Exercise = model('Exercise', ExerciseSchema);
