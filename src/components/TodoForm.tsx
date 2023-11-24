import React, { useState } from "react";
import { PriorityType, TodoFormProps } from "../lib/types";
import { priorities } from "../lib/helper";
import Priority from "./Priority";
import IconButton from "./IconButton";

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<PriorityType>("low");
  const [error, setError] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setDescription(e.target.value);
  };

  const handlePriorityChange = (selectedPriority: PriorityType) => {
    setError(false);
    setPriority(selectedPriority);
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDescription(false);
    if (title.trim() === "") {
      setError(true);
      return;
    }

    addTodo({
      id: Date.now().toString(),
      title,
      description,
      priority,
      completed: false,
    });
    setTitle("");
    setDescription("");
    setError(false);
  };

  const renderDescriptionInput = () => {
    if (showDescription) {
      return (
        <input
          type="text"
          placeholder="Add description"
          value={description}
          onChange={handleDescriptionChange}
          className="w-full p-1 text-sm text-gray-500 grow"
        />
      );
    }
    return null;
  };

  const renderToggleButton = () => (
    <IconButton
      onIconClick={handleToggleDescription}
      tooltipId="toggle-desc"
      icon={!showDescription ? "expand" : "shrink"}
      tooltipContent={!showDescription ? "Add Description" : "Close"}
    />
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full gap-5 rounded-lg p-1 px-2 flex bg-white  ${
        error ? "border-red-600 border-2" : ""
      } items-center`}
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
      <div className="w-full ">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="What is your next task?"
            value={title}
            onChange={handleTitleChange}
            className="p-1 w-[70%] grow outline-none"
          />
          {renderToggleButton()}
        </div>
        {renderDescriptionInput()}
      </div>

      <IconButton
        onIconClick={handleSubmit}
        icon="add"
        type="submit"
        tooltipId="add-todo"
        tooltipContent="Add Todo"
        size={20}
      />
    </form>
  );
};

export default TodoForm;
