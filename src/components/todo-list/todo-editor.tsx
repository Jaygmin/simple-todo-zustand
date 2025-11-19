import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function TodoEditor() {
  return (
    <div className="flex gap-4">
      <Input placeholder="Add New Todo List..." />
      <Button>Add</Button>
    </div>
  );
}
