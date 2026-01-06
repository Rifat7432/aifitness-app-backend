import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createGoalsZodSchema = z.object({ body: z.object({ userId: z.string({ required_error: 'userId is required' }), date: z.string().optional() }).passthrough() });

export const updateGoalsZodSchema = z.object({ body: z.object({}).passthrough() });

export const GoalsValidation = { idParam, createGoalsZodSchema, updateGoalsZodSchema };
