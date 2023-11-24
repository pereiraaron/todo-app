import React, { useState } from "react";
import { PriorityType, TodoFormProps } from "./lib/types";
import { Calendar } from "lucide-react";
import { priorities } from "./lib/helper";
import Priority from "./Priority";
import Tooltip from "./Tooltip";

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<PriorityType>("low");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriorityChange = (selectedPriority: PriorityType) => {
    setPriority(selectedPriority);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodo({
        id: Date.now().toString(),
        title,
        description,
        priority,
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] gap-5 rounded-lg p-1 px-2 flex mt-8 bg-white border items-center"
    >
      <ul className="flex items-center justify-center gap-1.5">
        {priorities.map((priorityItem: PriorityType) => (
          <Priority
            key={priorityItem}
            priority={priorityItem}
            isSelected={priorityItem === priority}
            onClick={() => handlePriorityChange(priorityItem)}
          />
        ))}
      </ul>

      <input
        type="text"
        placeholder="What is your next task?"
        value={title}
        onChange={handleTitleChange}
        className="p-1 w-[70%] grow outline-none"
      />

      <button type="submit" className="ml-auto" data-tooltip-id={"add-todo"}>
        <Calendar color="#a18aff" size={24} />
      </button>
      <Tooltip id="add-todo" content={"Add Todo"} />
    </form>
  );
};

export default TodoForm;
