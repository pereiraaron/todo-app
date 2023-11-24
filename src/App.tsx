import React, { useEffect, useState } from "react";
import { PriorityType, TodoType } from "./lib/types";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { dummyData, priorityMap, todoFilterOptions } from "./lib/helper";
import ToDoDropdown from "./ToDoDropdown";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [sortCriteria, setSortCriteria] = useState("default");

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

  const sortTodosByPriority = (criteria: string) => {
    let sortedTodos = [...todos];
    const priorityOrder = {
      low: priorityMap.low.priorityOrder,
      medium: priorityMap.medium.priorityOrder,
      high: priorityMap.high.priorityOrder,
    };

    sortedTodos.sort((a, b) => {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    if (criteria === "low") {
      sortedTodos.reverse();
    } else if (criteria === "medium") {
      sortedTodos = sortedTodos
        .filter((todo) => todo.priority === "medium")
        .concat(sortedTodos.filter((todo) => todo.priority !== "medium"));
    }

    setTodos(sortedTodos);
  };

  const toggleTodoCompletion = (todoId: string) => {
    const updatedTodos = todos.map((todo: TodoType) =>
      todo.id === todoId ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos);
  };

  const handleFilterSelection = (criteria: string) => {
    setSortCriteria(criteria);
    sortTodosByPriority(criteria);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" bg-[#a18aff] md:rounded-3xl md:border-[5px] md:px-8 px-2 md:py-2 md:max-h-[80%] h-full md:h-[80%] w-full overflow-auto flex flex-col gap-3 items-center md:w-[35%]">
        <h1 className="font-bold text-white text-[24px] md:py-0 py-4">
          Todo List
        </h1>
        <TodoForm addTodo={addTodo} />
        <div className="flex items-center justify-end w-full ml-auto">
          <ToDoDropdown
            options={todoFilterOptions}
            selected={sortCriteria}
            handleSelect={handleFilterSelection}
          />
        </div>
        <TodoList
          todos={todos}
          deleteTodo={removeTodo}
          editTodo={modifyTodo}
          toggleTodoCompletion={toggleTodoCompletion}
        />
      </div>
    </div>
  );
}

export default App;
