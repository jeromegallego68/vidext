import { z } from 'zod';

export const ZTodo = z.object({
	id: z.number(),
	text: z.string(),
	completed: z.boolean(),
	createdAt: z.number()
})

export type Todo = z.infer<typeof ZTodo>;