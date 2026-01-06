import { z } from 'zod';

export const idParam = z.object({ params: z.object({ id: z.string() }) });

export const createOnboardingZodSchema = z.object({
     body: z.object({
          userId: z.string({ required_error: 'userId is required' }),
          fitnessGoal: z.array(z.string()).optional(),
          activityLevel: z.string().optional(),
          dailyMeals: z.number().optional(),
     }),
});

export const updateOnboardingZodSchema = z.object({ body: z.object({ fitnessGoal: z.array(z.string()).optional(), activityLevel: z.string().optional(), dailyMeals: z.number().optional() }) });

export const OnboardingValidation = { idParam, createOnboardingZodSchema, updateOnboardingZodSchema };
