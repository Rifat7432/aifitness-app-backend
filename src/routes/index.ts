import express from 'express';
import { UserRouter } from '../app/modules/user/user.route';
import { AuthRouter } from '../app/modules/auth/auth.route';
import { BiologicalRouter } from '../app/modules/biological/biological.route';
import { OnboardingRouter } from '../app/modules/onboarding/onboarding.route';
import { WorkoutQuizRouter } from '../app/modules/workoutQuiz/workoutQuiz.route';
import { GoalsRouter } from '../app/modules/goals/goals.route';
import { CategoryItemRouter } from '../app/modules/categoryItem/categoryItem.route';
import { MonthlyMealRouter } from '../app/modules/monthlyMeal/monthlyMeal.route';
import { DailyMealRouter } from '../app/modules/dailyMeal/dailyMeal.route';
import { FoodItemRouter } from '../app/modules/foodItem/foodItem.route';
import { ExerciseRouter } from '../app/modules/exercise/exercise.route';
import { DailySessionRouter } from '../app/modules/dailySession/dailySession.route';
import { WeeklyPlanRouter } from '../app/modules/weeklyPlan/weeklyPlan.route';
import { ProgressTrackerRouter } from '../app/modules/progressTracker/progressTracker.route';

const router = express.Router();
const routes = [
     {
          path: '/auth',
          route: AuthRouter,
     },
     {
          path: '/users',
          route: UserRouter,
     },
     {
          path: '/biological',
          route: BiologicalRouter,
     },
     {
          path: '/onboarding',
          route: OnboardingRouter,
     },
     {
          path: '/workout-quiz',
          route: WorkoutQuizRouter,
     },
     {
          path: '/goals',
          route: GoalsRouter,
     },
     {
          path: '/categories',
          route: CategoryItemRouter,
     },
     {
          path: '/monthly-meal',
          route: MonthlyMealRouter,
     },
     {
          path: '/daily-meal',
          route: DailyMealRouter,
     },
     {
          path: '/food',
          route: FoodItemRouter,
     },
     {
          path: '/exercise',
          route: ExerciseRouter,
     },
     {
          path: '/session',
          route: DailySessionRouter,
     },
     {
          path: '/weekly-plan',
          route: WeeklyPlanRouter,
     },
     {
          path: '/progress-tracker',
          route: ProgressTrackerRouter,
     },
];

routes.forEach((element) => {
     if (element?.path && element?.route) {
          router.use(element?.path, element?.route);
     }
});

export default router;
