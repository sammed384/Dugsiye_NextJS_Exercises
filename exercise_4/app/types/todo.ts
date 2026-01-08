export type Todo = {
  _id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt?: string;
};

export type CreateTodoInput = {
  title: string;
  completed?: boolean;
  priority?: "low" | "medium" | "high";
};

export type UpdateTodoInput = {
  title?: string;
  completed?: boolean;
  priority?: "low" | "medium" | "high";
};
