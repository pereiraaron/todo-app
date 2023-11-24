import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

/** Props for TodoForm component */
export interface TodoFormProps {
  /** Function to add a new todo */
  addTodo: (newTodo: TodoType) => void;
}

/** Props for TodoList component */
export interface TodoListProps {
  /** List of todos */
  todos: TodoType[];
  /** Function to delete a todo */
  deleteTodo: (todoId: string) => void;
  /** Function to edit a todo */
  editTodo: (todoId: string, updatedTodo: TodoType) => void;
  /** Function to toggle todo completion status */
  toggleTodoCompletion: (todoId: string) => void;
}

/** Props for Todo component */
export interface TodoProps {
  /** Todo data */
  todo: TodoType;
  /** Function to delete a todo */
  deleteTodo: (todoId: string) => void;
  /** Function to edit a todo */
  editTodo: (todoId: string, updatedTodo: TodoType) => void;
  /** Function to toggle todo completion status */
  toggleTodoCompletion: (todoId: string) => void;
}

/** Props for Priority component */
export interface PriorityProps {
  /** Flag indicating if the priority is selected */
  isSelected: boolean;
  /** Priority value */
  priority: PriorityType;
  /** Click handler for priority change */
  onClick: (e: any) => void;
}

/** Props for Tooltip component */
export interface TooltipProps {
  /** Unique identifier for the tooltip */
  id: string;
  /** Content to be displayed in the tooltip */
  content: string;
  /** Alignment of the tooltip */
  align?: PlacesType;
}

/** Props for ToDoDropdown component */
export interface ToDoDropdownProps {
  /** Selected value */
  selected: any;
  /** Function to handle selection */
  handleSelect: (criteria: string) => void;
  /** Options for dropdown */
  options: DropDownOptionType[];
}

/** Props for IconButton component */
export interface IconButtonProps {
  /** Icon identifier */
  icon: string;
  /** Click handler for the icon */
  onIconClick: (e?: any) => void;
  /** ID for the tooltip */
  tooltipId?: string;
  /** Content for the tooltip */
  tooltipContent?: string;
  /** Color of the icon */
  color?: string;
  /** Size of the icon */
  size?: number;
  /** Type of button */
  type?: "submit" | "button" | "reset";
}

/** Type for todo priority */
export type PriorityType = "high" | "medium" | "low";

/** Type for tooltip alignment */
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

/** Type for Todo data */
export type TodoType = {
  id: string;
  title: string;
  description?: string;
  priority: PriorityType;
  completed: boolean;
};

/** Type for priority settings */
export type PriorityMapType = {
  [key in PriorityType]: {
    color: string;
    tooltipContent: string;
    priorityOrder: number;
  };
};

/** Type for dropdown options */
export type DropDownOptionType = {
  displayText: string;
  value: any;
};

/** Type for icon mapping */
export type IconMapType = {
  [key: string]: ForwardRefExoticComponent<LucideProps>;
};
