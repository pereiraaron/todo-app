export interface TodoFormProps {
  addTodo: (newTodo: TodoType) => void;
}

export interface TodoListProps {
  todos: TodoType[];
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string, updatedTodo: TodoType) => void;
}

export interface TodoProps {
  todo: TodoType;
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string, updatedTodo: TodoType) => void;
}

export interface PriorityProps {
  isSelected: boolean;
  priority: PriorityType;
  onClick: (e: any) => void;
}

export interface TooltipProps {
  id: string;
  content: string;
  align?: PlacesType;
}

export type PriorityType = "high" | "medium" | "low";

export type PlacesType =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";

export type TodoType = {
  id: string;
  title: string;
  description?: string;
  priority: PriorityType;
};

export type PriorityMapType = {
  [key in PriorityType]: {
    color: string;
    tooltipContent: string;
  };
};