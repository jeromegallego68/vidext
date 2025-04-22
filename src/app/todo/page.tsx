import List from '@/components/Task/List';

const TodoPage = () => {
  return (
    <main className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
        <List />
      </div>
    </main>
  );
}

export default TodoPage;
