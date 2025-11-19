import { Route, Routes } from "react-router";
import TodoListPage from "./pages/todo-list-page";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />} />
      <Route
        path="*"
        element={<h1 className="text-4xl font-bold">Page Not Found</h1>}
      />
    </Routes>
  );
}
