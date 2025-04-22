import { z } from 'zod';

export const taskSchema = z.object({
	id: z.number(),
	text: z.string(),
	completed: z.boolean(),
	createdAt: z.string()
})
export type Task = z.infer<typeof taskSchema>;

export const taskCreationSchema = z.object({
	id: z.optional(z.number()),
	text: z.string(),
	completed: z.boolean(),
	createdAt: z.string()
})
export type TaskCreation = z.infer<typeof taskCreationSchema>;