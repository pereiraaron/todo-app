import React from "react";
import { TodoListProps } from "./lib/types";
import Todo from "./Todo";

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul className="w-[87%] flex flex-col gap-4 mt-4">
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
