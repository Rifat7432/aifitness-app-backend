import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createWeeklyPlanZodSchema = z.object({
     body: z
          .object({ userId: z.string({ required_error: 'userId is required' }), title: z.string().optional(), weekStartDate: z.string().optional(), weekEndDate: z.string().optional() })
          .passthrough(),
});

export const updateWeeklyPlanZodSchema = z.object({ body: z.object({}).passthrough() });

export const WeeklyPlanValidation = { idParam, createWeeklyPlanZodSchema, updateWeeklyPlanZodSchema };
