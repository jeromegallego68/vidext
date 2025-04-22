import List from '@/components/Task/List';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TodoPage = () => {
  return (
    <main className="min-h-screen w-full py-8">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-blue-600">Todo List</h1>
          <Link href="/todo/create">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
              Create Task
            </Button>
          </Link>
        </div>
        <List />
      </div>
    </main>
  );
}

export default TodoPage;
