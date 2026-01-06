import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createExerciseZodSchema = z.object({
     body: z
          .object({
               workoutSessionId: z.string({ required_error: 'workoutSessionId is required' }),
               workoutPlanId: z.string({ required_error: 'workoutPlanId is required' }),
               userId: z.string({ required_error: 'userId is required' }),
               name: z.string().optional(),
          })
          .passthrough(),
});

export const updateExerciseZodSchema = z.object({ body: z.object({}).passthrough() });

export const ExerciseValidation = { idParam, createExerciseZodSchema, updateExerciseZodSchema };
