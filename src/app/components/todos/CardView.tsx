"use client";

import { HStack, Box } from "@chakra-ui/react";
import { Todo } from "../../types";
import TodoColumn from "./TodoColumn";
import { TaskSquare, Clock, TickCircle } from "iconsax-react";

interface CardViewProps {
  todos: Todo[];
  onAddTaskClick: () => void;
}

const COLUMN_CONFIG = [
  {
    title: "To Do",
    status: "Todo",
    icon: TaskSquare,
    color: "brand.LightPurple",
    bgColor: "brand.VeryLightPurple",
  },
  {
    title: "In Progress",
    status: "In Progress",
    icon: Clock,
    color: "brand.Yellow",
    bgColor: "brand.LightYellow",
  },
  {
    title: "Complete",
    status: "Complete",
    icon: TickCircle,
    color: "brand.LightGreen",
    bgColor: "brand.VeryLightGreen",
  },
];

export default function CardView({ todos, onAddTaskClick }: CardViewProps) {
  return (
    <HStack spacing={6} align="start" overflowX="auto" pb={4}>
      {COLUMN_CONFIG.map((column) => {
        const columnTodos = todos.filter(
          (todo) => todo.status === column.status
        );
        return (
          <Box key={column.status} minW="350px">
            <TodoColumn
              bgColor={column.bgColor}
              title={column.title}
              icon={column.icon}
              color={column.color}
              count={columnTodos.length}
              todos={columnTodos}
              onAddTaskClick={onAddTaskClick}
            />
          </Box>
        );
      })}
    </HStack>
  );
}
