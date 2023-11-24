import React, { useState } from "react";
import { PriorityType, TodoProps } from "../lib/types";
import { priorities } from "../lib/helper";
import Priority from "./Priority";
import IconButton from "./IconButton";

const Todo: React.FC<TodoProps> = ({
  todo,
  deleteTodo,
  editTodo,
  toggleTodoCompletion,
}) => {
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

  const handleComplete = () => {
    toggleTodoCompletion(todo.id);
  };

  const priorityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPriority(e.target.name as PriorityType);
  };

  return (
    <div
      className={`flex items-center w-full gap-5 px-3 py-1 ${
        todo.completed
          ? "bg-gray-300 opacity-1 cursor-not-allowed py-2"
          : "bg-white"
      }  rounded-lg ${error ? "border-2 border-red-600" : ""}`}
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
          <div className="w-[70%]">
            <input
              type="text"
              placeholder="What is your next task?"
              value={editedTitle}
              onChange={(e) => {
                setError(false);
                setEditedTitle(e.target.value);
              }}
              className="w-full p-1 text-sm"
            />
            {todo.description && (
              <input
                type="text"
                placeholder="What is your next task?"
                value={editedDescription}
                onChange={(e) => {
                  setError(false);
                  setEditedDescription(e.target.value);
                }}
                className="w-full p-1 text-xs "
              />
            )}
          </div>

          <div className="flex gap-3 ml-auto">
            <IconButton
              onIconClick={handleSave}
              tooltipId="save-todo"
              icon={"save"}
              tooltipContent="Save Todo"
            />
            <IconButton
              onIconClick={handleDelete}
              tooltipId="delete-todo"
              icon={"delete"}
              tooltipContent="Delete Todo"
            />
          </div>
        </>
      ) : (
        <>
          {!todo.completed && (
            <div>
              <Priority
                priority={editedPriority}
                isSelected={false}
                onClick={priorityChangeHandler}
              />
            </div>
          )}
          <div className="flex flex-col max-w-[70%] gap-1 py-1">
            <h3 className={`${todo.completed ? "line-through" : ""} text-sm`}>
              {todo.title}
            </h3>
            {todo.description && (
              <p className="text-xs text-gray-600 break-words">
                {todo.description}
              </p>
            )}
          </div>
          <div className="flex gap-3 ml-auto">
            {!todo.completed && (
              <>
                <IconButton
                  onIconClick={handleComplete}
                  tooltipId="completed-todo"
                  icon={"complete"}
                  tooltipContent={"Mark as completed"}
                />
                <IconButton
                  onIconClick={handleEdit}
                  tooltipId="edit-todo"
                  icon={"edit"}
                  tooltipContent={"Edit Todo"}
                />
              </>
            )}

            <IconButton
              onIconClick={handleDelete}
              tooltipId="delete-todo"
              icon={"delete"}
              tooltipContent={"Delete Todo"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
