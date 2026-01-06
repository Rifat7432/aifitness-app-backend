import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createWorkoutQuizZodSchema = z.object({ body: z.object({ userId: z.string({ required_error: 'userId is required' }), currentActiveness: z.string().optional() }).passthrough() });

export const updateWorkoutQuizZodSchema = z.object({ body: z.object({}).passthrough() });

export const WorkoutQuizValidation = { idParam, createWorkoutQuizZodSchema, updateWorkoutQuizZodSchema };
