"use client";

import { Todo } from "../types/todo";
import { toggleTodo } from "../actions/toggle";
import { deleteTodo } from "../actions/delete";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelection = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const handleBulkDelete = async () => {
    if (!confirm("Are you sure you want to delete selected todos?")) return;

    // In a real app, we'd have a bulk delete action.
    // For now, we'll just delete one by one (not ideal but works for demo)
    // Or better, let's assume we will add a bulk delete action later.
    // For this exercise, I will just iterate.
    for (const id of selectedIds) {
      await deleteTodo(id);
    }
    setSelectedIds(new Set());
  };

  return (
    <div>
      {selectedIds.size > 0 && (
        <div className="mb-4 p-4 bg-blue-50 rounded-md flex justify-between items-center">
          <span className="text-blue-800">{selectedIds.size} selected</span>
          <button
            onClick={handleBulkDelete}
            className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
          >
            Delete Selected
          </button>
        </div>
      )}

      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className={`flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 ${
              selectedIds.has(todo._id) ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedIds.has(todo._id)}
                onChange={() => toggleSelection(todo._id)}
                className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />

              <form action={toggleTodo.bind(null, todo._id)}>
                <button
                  type="submit"
                  className="text-2xl hover:scale-110 transition-transform"
                  title={
                    todo.completed ? "Mark as incomplete" : "Mark as complete"
                  }
                >
                  {todo.completed ? "✅" : "⬜"}
                </button>
              </form>

              <div className="flex flex-col">
                <span
                  className={`text-lg ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {todo.title}
                </span>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      todo.priority === "high"
                        ? "bg-red-100 text-red-800"
                        : todo.priority === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {todo.priority || "medium"}
                  </span>
                  <span>
                    Created {formatDistanceToNow(new Date(todo.createdAt))} ago
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Link
                href={`/edit/${todo._id}`}
                className="p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-colors"
                title="Edit todo"
              >
                ✏️
              </Link>

              <form action={deleteTodo.bind(null, todo._id)}>
                <button
                  type="submit"
                  className="p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors"
                  title="Delete todo"
                >
                  🗑️
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
