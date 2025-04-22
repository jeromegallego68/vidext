
import { AppRouter } from '@/server';
import { serverClient } from '@/utils/serverClient';
import type { inferProcedureInput } from '@trpc/server';

describe("Todo router", () => {
	it('Create, update, remove and get task', async () => {
		const inputCreate: inferProcedureInput<AppRouter['todo']['createTask']> = {
		  text: 'hello test',
		  completed: false,
		  createdAt: String((new Date()).getTime())
		};
	  
		const createResponse = await serverClient.todo.createTask(inputCreate);
		const taskCreated = await serverClient.todo.byId(createResponse.id);
		expect(taskCreated).toMatchObject(inputCreate);

		const inputUpdate: inferProcedureInput<AppRouter['todo']['updateTask']> = {
			...taskCreated,
			completed: true
		}
		
		const updateResponse = await serverClient.todo.updateTask(inputUpdate);
		const taskUpdated = await serverClient.todo.byId(updateResponse.id);
		expect(taskUpdated).toMatchObject(inputUpdate);

		await serverClient.todo.deleteTask(inputUpdate.id);
		const allTasks = await serverClient.todo.getTasks();
		expect(allTasks).not.toContain(inputUpdate)
	})
})