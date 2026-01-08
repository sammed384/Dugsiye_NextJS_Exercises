import { fetchTodos } from "./lib/todo";
import Link from "next/link";
import SearchFilter from "./components/SearchFilter";
import TodoList from "./components/TodoList";

interface HomeProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { search, status } = await searchParams;
  const todos = await fetchTodos(search, status);
  const time = new Date().toLocaleTimeString();

  return (
    <main className="max-w-4xl mx-auto mt-10 p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📝 Todo App</h1>
        <p className="text-sm text-gray-500 mb-4">Last updated: {time}</p>

        <div className="mb-6 flex justify-between items-center">
          <SearchFilter />

          <Link
            href="/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors h-10"
          >
            ➕ Add New Todo
          </Link>
        </div>

        {todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No todos found!</p>
            {search || status ? (
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your filters.
              </p>
            ) : (
              <p className="text-gray-400 text-sm mt-2">
                Create your first todo to get started.
              </p>
            )}
          </div>
        ) : (
          <TodoList todos={todos} />
        )}
      </div>
    </main>
  );
}
