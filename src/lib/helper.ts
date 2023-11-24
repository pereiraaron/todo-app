import {
  Calendar,
  CheckSquare,
  Edit,
  PlusCircle,
  Save,
  Trash2,
  XCircle,
} from "lucide-react";
import {
  DropDownOptionType,
  IconMapType,
  PriorityMapType,
  PriorityType,
  TodoType,
} from "./types";

/**
 * Map defining priority settings for different priority levels.
 * @type {PriorityMapType}
 */
export const priorityMap: PriorityMapType = {
  low: {
    color: "#4ade80",
    tooltipContent: "Low Priority",
    priorityOrder: 3,
  },
  medium: {
    color: "#eab308",
    tooltipContent: "Medium Priority",
    priorityOrder: 2,
  },
  high: {
    color: "#f87171",
    tooltipContent: "High Priority",
    priorityOrder: 1,
  },
};

/**
 * List of available priority levels.
 * @type {PriorityType[]}
 */
export const priorities: PriorityType[] = ["high", "medium", "low"];

/**
 * Sample todo data for initial rendering.
 * @type {TodoType[]}
 */
export const dummyData: TodoType[] = [
  {
    id: "12345",
    title: "Low Priority Task",
    description: "",
    priority: "low",
    completed: false,
  },
  {
    id: "12346",
    title: "Medium Priority Task",
    description: "",
    priority: "medium",
    completed: true,
  },
  {
    id: "12347",
    title: "High Priority Task",
    description: "",
    priority: "high",
    completed: false,
  },
];

/**
 * Options for filtering todos.
 * @type {DropDownOptionType[]}
 */
export const todoFilterOptions: DropDownOptionType[] = [
  { value: "default", displayText: "Default" },
  { value: "high", displayText: "High" },
  { value: "medium", displayText: "Medium" },
  { value: "low", displayText: "Low" },
];

/**
 * Mapping of actions to corresponding icons.
 * @type {IconMapType}
 */
export const iconMap: IconMapType = {
  save: Save,
  delete: Trash2,
  edit: Edit,
  complete: CheckSquare,
  add: Calendar,
  shrink: XCircle,
  expand: PlusCircle,
};
