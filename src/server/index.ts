import { todoRouter } from '@/server/routers/todo';
import { router } from '@/server/trpc';

export const appRouter = router({
	todo: todoRouter
});

export type AppRouter = typeof appRouter;