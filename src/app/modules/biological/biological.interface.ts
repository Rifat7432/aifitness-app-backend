import { Types } from 'mongoose';

export interface IBiologicalInformation {
     userId: Types.ObjectId | string;
     gender?: string;
     state?: string;
     age?: string;
     height?: string;
     weight?: string;
     bodyFat?: string;
     muscleMass?: string;
}
