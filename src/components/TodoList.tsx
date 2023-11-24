import React from "react";
import { TodoListProps, TodoType } from "../lib/types";
import Todo from "./Todo";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  editTodo,
  toggleTodoCompletion,
}) => {
  return (
    <ul className="w-full flex px-3 flex-col gap-4 max-h-[70%] overflow-auto">
      {todos.map((singleTodo: TodoType) => (
        <Todo
          key={singleTodo.id}
          todo={singleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodoCompletion={toggleTodoCompletion}
        />
      ))}
    </ul>
  );
};

export default TodoList;
