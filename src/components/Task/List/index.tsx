'use client';

import Item from '@/components/Task/Item';
import { Task } from '@/server/routers/todo/types';
import { trpc } from '@/utils/client';
import { Loader2 } from "lucide-react";
import Link from 'next/link';

interface TaskListProps {
	initialData: Task[]
}

const TaskList = ({
	initialData
}: TaskListProps) => {
	const getTasks = trpc.todo.getTasks.useQuery(undefined, {
		initialData: initialData,
		refetchOnMount: false,
		refetchOnReconnect: false
	});
  	const tasks = getTasks.data ?? [];
	const isFetchingTasks = getTasks.isFetching;
	const isTasksEmpty = !isFetchingTasks && tasks.length === 0;

	return (
		<div className="space-y-2">
			{isFetchingTasks ? (
				<div className="justify-items-center">
					<Loader2 className="animate-spin" />
				</div>
			) : (
				<>
					{tasks.map((task) => (
							<Item 
								key={task.id}
								data={task}
							/>
					))}
					{isTasksEmpty && (
						<p className="text-center text-muted-foreground">
							No tasks yet. <Link href="/todo/create"> Add one! </Link>
						</p>
					)}
				</>
			)}
		</div>
	);
};

export default TaskList;