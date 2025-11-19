import type { TodoState } from "@/types";
import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialState: Pick<TodoState, "todos"> = {
  todos: [],
};

const useTodosStore = create<TodoState>()(
  devtools(
    persist(
      immer(
        combine(initialState, (set) => ({
          createTodo: (content: string) =>
            set((state) => {
              state.todos.push({
                id: new Date().getTime(),
                content,
              });
            }),
          deleteTodo: (id: number) =>
            set((state) => {
              state.todos = state.todos.filter((t) => t.id !== id);
            }),
        })),
      ),
      {
        name: "todos-storage",
        partialize: (state) => ({ todos: state.todos }),
      },
    ),
    { name: "Todos Store" },
  ),
);

export const useTodos = () => {
  const todos = useTodosStore((store) => store.todos);
  return todos;
};

export const useCreateTodo = () => {
  const createTodo = useTodosStore((store) => store.createTodo);
  return createTodo;
};

export const useDeleteTodo = () => {
  const deleteTodo = useTodosStore((store) => store.deleteTodo);
  return deleteTodo;
};
