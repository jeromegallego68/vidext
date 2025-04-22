import { PrismaClient } from '@/generated/prisma';
import { ZTodo } from '@/server/routers/todo/types';
import { publicProcedure, router } from '@/server/trpc';

const prisma = new PrismaClient();

export const todoRouter = router({
	getTodos: publicProcedure.query(async () => {
		return await prisma.todo.findMany();
	}),
	addTodo: publicProcedure
		.input(ZTodo)
		.mutation(async (opts) => {
			const { input } = opts;
			await prisma.todo.create({
				data: {
					text: input.text,
					completed: input.completed,
					createdAt: (new Date).getTime()
				}
			})
		})
});