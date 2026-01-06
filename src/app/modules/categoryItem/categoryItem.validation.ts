import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createCategoryItemZodSchema = z.object({
     body: z
          .object({
               goalsId: z.string({ required_error: 'goalsId is required' }),
               userId: z.string({ required_error: 'userId is required' }),
               category: z.string().optional(),
               name: z.string().optional(),
          })
          .passthrough(),
});

export const updateCategoryItemZodSchema = z.object({ body: z.object({}).passthrough() });

export const CategoryItemValidation = { idParam, createCategoryItemZodSchema, updateCategoryItemZodSchema };
