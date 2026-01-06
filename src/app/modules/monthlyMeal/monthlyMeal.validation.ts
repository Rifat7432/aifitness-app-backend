import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createMonthlyMealZodSchema = z.object({ body: z.object({ userId: z.string({ required_error: 'userId is required' }), month: z.number().optional(), year: z.number().optional() }).passthrough() });

export const updateMonthlyMealZodSchema = z.object({ body: z.object({}).passthrough() });

export const MonthlyMealValidation = { idParam, createMonthlyMealZodSchema, updateMonthlyMealZodSchema };
