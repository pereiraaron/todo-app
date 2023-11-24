import React, { useState } from "react";
import { PriorityType, TodoProps } from "./lib/types";
import Priority from "./Priority";
import { priorities } from "./lib/helper";
import { Save, Trash2, Edit } from "lucide-react";
import Tooltip from "./Tooltip";

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(todo.title);
  const [editedDescription, setEditedDescription] = useState<string>(
    todo.description || ""
  );
  const [editedPriority, setEditedPriority] = useState<PriorityType>(
    todo.priority
  );
  const [error, setError] = useState<boolean>(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTitle.trim() === "") {
      setError(true);
      return;
    }
    const updatedTodo = {
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      id: todo.id,
      completed: todo.completed,
    };
    editTodo(todo.id, updatedTodo);
    setIsEditing(false);
    setError(false);
  };

  const priorityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPriority(e.target.name as PriorityType);
  };

  return (
    <div
      className={`flex items-center w-full gap-5 px-3 py-1 bg-white border rounded-lg ${
        error ? "border-2 border-red-600" : ""
      }`}
    >
      {isEditing ? (
        <>
          <ul className="flex items-center justify-center gap-1.5">
            {priorities.map((priorityItem: PriorityType) => (
              <Priority
                key={priorityItem}
                priority={priorityItem}
                isSelected={priorityItem === editedPriority}
                onClick={priorityChangeHandler}
              />
            ))}
          </ul>
          <input
            type="text"
            placeholder="What is your next task?"
            value={editedTitle}
            onChange={(e) => {
              setError(false);
              setEditedTitle(e.target.value);
            }}
            className="p-1 w-[70%] outline-none"
          />
          <div className="flex gap-3 ml-auto">
            <button
              type="button"
              onClick={handleSave}
              data-tooltip-id={"save-todo"}
            >
              <Save color="#a18aff" size={16} />
            </button>
            <button
              type="button"
              onClick={handleDelete}
              data-tooltip-id={"delete-todo"}
            >
              <Trash2 color="#a18aff" size={16} />
            </button>
          </div>
        </>
      ) : (
        <>
          <Priority
            priority={editedPriority}
            isSelected={false}
            onClick={priorityChangeHandler}
          />
          <h3>{todo.title}</h3>
          <div className="flex gap-3 ml-auto">
            <button
              type="button"
              onClick={handleEdit}
              data-tooltip-id={"edit-todo"}
            >
              <Edit color="#a18aff" size={16} />
            </button>
            <button
              type="button"
              onClick={handleDelete}
              data-tooltip-id={"delete-todo"}
            >
              <Trash2 color="#a18aff" size={16} />
            </button>
          </div>
        </>
      )}{" "}
      <Tooltip id="delete-todo" content={"Delete Todo"} />
      <Tooltip id="edit-todo" content={"Edit Todo"} />
      <Tooltip id="save-todo" content={"Save Todo"} />
    </div>
  );
};

export default Todo;
