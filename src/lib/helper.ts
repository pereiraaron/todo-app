import {
  DropDownOptionType,
  PriorityMapType,
  PriorityType,
  TodoType,
} from "./types";

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
  high: { color: "#f87171", tooltipContent: "High Priority", priorityOrder: 1 },
};

export const priorities: PriorityType[] = ["high", "medium", "low"];

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

export const todoFilterOptions: DropDownOptionType[] = [
  {
    value: "default",
    displayText: "Default",
  },
  {
    value: "high",
    displayText: "High",
  },
  {
    value: "medium",
    displayText: "Medium",
  },
  {
    value: "low",
    displayText: "Low",
  },
];
