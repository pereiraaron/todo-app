import React, { useEffect, useState } from "react";
import { TodoType } from "./lib/types";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { dummyData } from "./lib/helper";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    initializeTodos();
  }, []);

  const initializeTodos = () => {
    const storedTodos = localStorage.getItem("todoData");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      localStorage.setItem("todoData", JSON.stringify(dummyData));
      setTodos(dummyData);
    }
  };

  const updateLocalStorage = (updatedTodos: TodoType[]) => {
    localStorage.setItem("todoData", JSON.stringify(updatedTodos));
  };

  const addTodo = (newTodo: TodoType) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos);
  };

  const removeTodo = (todoId: string) => {
    const updatedTodos = todos.filter((todo: TodoType) => todo.id !== todoId);
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos);
  };

  const modifyTodo = (todoId: string, updatedTodo: TodoType) => {
    const updatedTodos = todos.map((todo: TodoType) =>
      todo.id === todoId ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#a18aff] rounded-3xl border-[5px] p-2 max-h-[80%] h-[80%] overflow-auto flex flex-col items-center w-[35%]">
        <h1 className="font-bold text-white text-[24px]">Todo List</h1>

        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={removeTodo} editTodo={modifyTodo} />
      </div>
    </div>
  );
}

export default App;
