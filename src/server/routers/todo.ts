import { PrismaClient } from '@/generated/prisma';
import { publicProcedure, router } from '@/server/trpc';
import { z } from 'zod';

const prisma = new PrismaClient();

export const todoRouter = router({
	getTodos: publicProcedure.query(async () => {
		return await prisma.todo.findMany();
	}),
	addTodo: publicProcedure
		.input(z.object({
			id: z.number(),
			text: z.string(),
			completed: z.boolean(),
			createdAt: z.number()
		}))
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