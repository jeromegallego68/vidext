import List from '@/components/Task/List';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TodoPage = () => {
  return (
    <main className="min-h-screen w-full py-8">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <Link href="/todo/create">
            <Button>Create Task</Button>
          </Link>
        </div>
        <List />
      </div>
    </main>
  );
}

export default TodoPage;
