import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createDailyMealZodSchema = z.object({
     body: z
          .object({
               mealPlanId: z.string({ required_error: 'mealPlanId is required' }),
               userId: z.string({ required_error: 'userId is required' }),
               mealType: z.string().optional(),
               notes: z.string().optional(),
          })
          .passthrough(),
});

export const updateDailyMealZodSchema = z.object({ body: z.object({}).passthrough() });

export const DailyMealValidation = { idParam, createDailyMealZodSchema, updateDailyMealZodSchema };
