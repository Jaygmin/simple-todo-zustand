import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-items";

const dummyTodos = [
  {
    id: 1,
    content: "First Thing To Do",
  },
  {
    id: 2,
    content: " Second Thing To Do",
  },
  {
    id: 3,
    content: " Third Thing To Do",
  },
];

export default function TodoListPage() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {dummyTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
