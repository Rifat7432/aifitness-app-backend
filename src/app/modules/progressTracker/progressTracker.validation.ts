import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createProgressTrackerZodSchema = z.object({
     body: z
          .object({
               date: z.string({ required_error: 'date is required' }),
               Image: z.string().optional(),
               notes: z.string().optional(),
          })
          .passthrough(),
});

export const updateProgressTrackerZodSchema = z.object({
     body: z
          .object({
               date: z.string().optional(),
               Image: z.string().optional(),
               notes: z.string().optional(),
          })
          .passthrough(),
});

export const ProgressTrackerValidation = { idParam, createProgressTrackerZodSchema, updateProgressTrackerZodSchema };
