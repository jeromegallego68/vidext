import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Task } from '@/server/routers/todo/types';
import { trpc } from '@/utils/client';

interface TaskItemProps {
  data: Task;
}

const TaskItem = ({
  data
}: TaskItemProps) => {
    const utils = trpc.useUtils()

    const updateTaskMutation = trpc.todo.updateTask.useMutation({
        onSuccess(newData) {  
            utils.todo.getTasks.setData(undefined, cachedData => {
                return cachedData?.map(e => {
                    if (e.id === newData.id) {
                        return newData;
                    }
                    return e;
                });
            })
        },
    });
    const deleteTaskMutation = trpc.todo.deleteTask.useMutation({
        onSuccess(_, id) {
            utils.todo.getTasks.setData(undefined, cachedData => {
                return cachedData?.filter(e => e.id !== id)
            })
        },
    });

    const toggleTaskCompleted = (checked: boolean) => {
        updateTaskMutation.mutate({
            ...data,
            completed: checked
        });
    }

    const deleteTask = () => {
        if (data.id) {
            deleteTaskMutation.mutate(data.id);
        }
    }

	return (
		<Card className="p-4">
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                    <Switch
                        checked={data.completed}
                        onCheckedChange={toggleTaskCompleted}
                    />
                    <span
                        className={`${
                            data.completed ? 'line-through text-muted-foreground' : ''
                        }`}
                    >
                        {data.text}
                    </span>
                    </div>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={deleteTask}
                    >
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
	);
};

export default TaskItem;