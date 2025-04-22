import { PrismaClient } from '@/generated/prisma';
import { taskMutationSchema } from '@/server/routers/todo/types';
import { publicProcedure, router } from '@/server/trpc';
import { z } from 'zod';

const prisma = new PrismaClient();

export const todoRouter = router({
	getTasks: publicProcedure.query(async () => (
		await prisma.todo.findMany()
	)),
	createTask: publicProcedure
		.input(taskMutationSchema)
		.mutation(async (opts) => {
			const { input } = opts;
			await prisma.todo.create({
				data: {
					text: input.text,
					completed: input.completed,
					createdAt: input.createdAt
				}
			})
		}),
	updateTask: publicProcedure
		.input(taskMutationSchema)
		.mutation(async (opts) => {
			const { input } = opts;
			await prisma.todo.update({
				where: { 
					id: input.id
				},
				data: {
					...input
				}
			})
		}),
	deleteTask: publicProcedure
		.input(z.number())
		.mutation(async (opts) => {
			const id = opts.input;
			await prisma.todo.delete({
				where: { id }
			})
		})
});