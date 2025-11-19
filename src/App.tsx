import { Route, Routes } from "react-router";
import TodoListPage from "./pages/todo-list-page";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />} />
    </Routes>
  );
}
