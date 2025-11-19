import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
  const createTodo = useCreateTodo();
  const [content, setContent] = useState("");

  const handleAddClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim() === "") return;
    createTodo(content);
    setContent("");
  };
  return (
    <div>
      <form className="flex gap-4">
        <Input
          value={content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
          placeholder="Add New Todo List..."
        />
        <Button type="submit" onClick={handleAddClick}>
          Add
        </Button>
      </form>
    </div>
  );
}
