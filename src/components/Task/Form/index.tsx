'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { TaskCreation, taskSchema } from '@/server/routers/todo/types';
import { trpc } from '@/utils/client';
import { Form, Formik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { useRouter } from 'next/navigation';

const TaskForm = () =>  {
	const router = useRouter()

	const createTaskMutation = trpc.todo.createTask.useMutation({
		onSuccess: () => {
			router.push('/todo');
		},
		onError(error) {
			console.log('error creating a new task:' + JSON.stringify(error));
			// TODO: implement a toast modal to inform the user
		},
	});

	const initialValues = {
		text: '',
		completed: false,
		createdAt: String((new Date).getTime())
	}

	const onSubmit = (values: TaskCreation) => {
		createTaskMutation.mutate(values);
	}

	return (
		<Card className="p-6 mb-4 w-full max-w-md shadow-lg">
			<CardTitle className="text-xl font-semibold mb-4">
				Create a new task
			</CardTitle>
			<CardContent>
				<Formik
					initialValues={initialValues}
					validation={withZodSchema(taskSchema)}
					onSubmit={onSubmit}
				>
					{({ values, handleChange, setFieldValue, isSubmitting }) => (
						<Form className="space-y-4">
							<div className="space-y-2">
								<Input
									id="todo-text"
									name="text"
									type="text"
									onChange={handleChange}
									value={values.text}
									required
									className="w-full"
									placeholder="Enter your task here..."
								/>
							</div>

							<div className="flex items-center space-x-2">
								<Switch
									id="todo-completed"
									checked={values.completed}
									onCheckedChange={(checked: boolean) => {
										setFieldValue('completed', checked);
									}}
								/>
								<Label htmlFor="todo-completed" className="text-sm font-medium">Mark as completed</Label>
							</div>

							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
							>
								Add Task
							</Button>
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
	)
}

export default TaskForm;