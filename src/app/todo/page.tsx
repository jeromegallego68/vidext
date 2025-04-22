import List from '@/components/Task/List';
import { serverClient } from '@/utils/serverClient';

const TodoPage = async () => {
  const todos = await serverClient.todo.getTasks();

  return (
    <div className="w-full ">
       <List initialData={todos} />
    </div>
  );
}

export default TodoPage;
