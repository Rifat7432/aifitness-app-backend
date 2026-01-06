import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createBiologicalZodSchema = z.object({
     body: z.object({
          userId: z.string({ required_error: 'userId is required' }),
          gender: z.string().optional(),
          state: z.string().optional(),
          age: z.string().optional(),
          height: z.string().optional(),
          weight: z.string().optional(),
     }),
});

export const updateBiologicalZodSchema = z.object({
     body: z.object({ gender: z.string().optional(), state: z.string().optional(), age: z.string().optional(), height: z.string().optional(), weight: z.string().optional() }),
});

export const BiologicalValidation = { idParam, createBiologicalZodSchema, updateBiologicalZodSchema };
