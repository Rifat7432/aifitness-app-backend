import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createDailySessionZodSchema = z.object({
     body: z
          .object({ workoutPlanId: z.string({ required_error: 'workoutPlanId is required' }), userId: z.string({ required_error: 'userId is required' }), title: z.string().optional() })
          .passthrough(),
});

export const updateDailySessionZodSchema = z.object({ body: z.object({}).passthrough() });

export const DailySessionValidation = { idParam, createDailySessionZodSchema, updateDailySessionZodSchema };
