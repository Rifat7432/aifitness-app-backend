import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createFoodItemZodSchema = z.object({
     body: z
          .object({
               mealPlanId: z.string({ required_error: 'mealPlanId is required' }),
               mealDayId: z.string({ required_error: 'mealDayId is required' }),
               userId: z.string({ required_error: 'userId is required' }),
               name: z.string().optional(),
               calories: z.number().optional(),
          })
          .passthrough(),
});

export const updateFoodItemZodSchema = z.object({ body: z.object({}).passthrough() });

export const FoodItemValidation = { idParam, createFoodItemZodSchema, updateFoodItemZodSchema };
