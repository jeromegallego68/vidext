import { PrismaClient } from '@/generated/prisma';
import { taskCreationSchema, taskSchema } from '@/server/routers/todo/types';
import { publicProcedure, router } from '@/server/trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const prisma = new PrismaClient();

export const todoRouter = router({
	getTasks: publicProcedure.query(async () => (
		await prisma.todo.findMany()
	)),
	byId: publicProcedure
    	.input(z.number())
		.query(async opts => {
			const id = opts.input;
			const task = await prisma.todo.findUnique({
				where: { id },
			});
			if (!task) {
				throw new TRPCError({
				code: 'NOT_FOUND',
				message: `No task with id '${id}'`,
				});
			}
			return task;
		}),
	createTask: publicProcedure
		.input(taskCreationSchema)
		.mutation(async (opts) => {
			const { input } = opts;
			const task = await prisma.todo.create({
				data: {
					text: input.text,
					completed: input.completed,
					createdAt: input.createdAt
				}
			})
			return task;
		}),
	updateTask: publicProcedure
		.input(taskSchema)
		.mutation(async (opts) => {
			const { input } = opts;
			const task = await prisma.todo.update({
				where: { 
					id: input.id
				},
				data: {
					...input
				}
			});
			return task;
		}),
	deleteTask: publicProcedure
		.input(z.number())
		.mutation(async (opts) => {
			const id = opts.input;
			const task = await prisma.todo.delete({
				where: { id }
			})
			return task;
		})
});