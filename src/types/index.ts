export interface Todo {
  id: number;
  content: string;
}

export interface TodoState {
  todos: Todo[];
  createTodo: (content: string) => void;
  deleteTodo: (id: number) => void;
}
