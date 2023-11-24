import { PriorityMapType, PriorityType, TodoType } from "./types";

export const priorityMap: PriorityMapType = {
  low: {
    color: "green-500",
    tooltipContent: "Low Priority",
  },
  medium: { color: "yellow-500", tooltipContent: "Medium Priority" },
  high: { color: "red-600", tooltipContent: "High Priority" },
};

export const priorities: PriorityType[] = ["high", "medium", "low"];

export const dummyData: TodoType[] = [
  {
    id: "12345",
    title: "Low Priority Task",
    description: "",
    priority: "low",
  },
  {
    id: "12346",
    title: "Medium Priority Task",
    description: "",
    priority: "medium",
  },
  {
    id: "12347",
    title: "High Priority Task",
    description: "",
    priority: "high",
  },
];
