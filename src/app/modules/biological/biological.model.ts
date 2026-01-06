import { Schema, model, Types } from 'mongoose';

const BiologicalInfoSchema = new Schema(
     {
          userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
          gender: { type: String },
          state: { type: String },
          age: { type: String },
          height: { type: String },
          weight: { type: String },
          bodyFat: { type: String },
          muscleMass: { type: String },
     },
     { timestamps: true },
);

export const BiologicalInformation = model('BiologicalInformation', BiologicalInfoSchema);
