import React from "react";
import { TodoListProps } from "./lib/types";
import Todo from "./Todo";

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul className="w-[87%] flex px-1 flex-col gap-4 mt-4  max-h-[70%] overflow-auto">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
