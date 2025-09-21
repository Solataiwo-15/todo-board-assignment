"use client";

import { Flex, HStack, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { Todo } from "../../types";
import { Add } from "iconsax-react";
import TodoCard from "./TodoCard";
import { ElementType } from "react";

interface TodoColumnProps {
  title: string;
  icon: ElementType;
  color: string;
  bgColor: string;
  count: number;
  todos: Todo[];
  onAddTaskClick: () => void;
}

export default function TodoColumn({
  title,
  icon,
  color,
  bgColor,
  count,
  todos,
  onAddTaskClick,
}: TodoColumnProps) {
  return (
    <VStack
      align="start"
      bg="brand.background"
      borderRadius="xl"
      spacing={0}
      overflow="hidden"
    >
      <Flex w="100%" justify="space-between" align="center" p={4} bg={bgColor}>
        <HStack spacing={2}>
          <Flex
            align="center"
            justify="center"
            bg="brand.primary"
            h="30px"
            w="auto"
            pl="8px"
            pr="8px"
            gap="7px"
            borderRadius="md"
          >
            <Icon as={icon} color={color} boxSize={4} />
            <Text fontWeight="600" color="brand.PrimaryTextColor">
              {title}
            </Text>
          </Flex>
          <Text
            bg="brand.primary"
            px={2}
            borderRadius="md"
            fontWeight="600"
            h="30px"
            color="brand.PrimaryTextColor"
          >
            ({count})
          </Text>
        </HStack>
        <IconButton
          aria-label="Add task to column"
          icon={<Add color="#292D32" />}
          size="sm"
          h="30px"
          variant="ghost"
          bg="brand.primary"
          borderRadius="md"
          onClick={onAddTaskClick}
        />
      </Flex>

      <VStack w="100%" p={4} spacing={2}>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}

        <Flex
          as="button"
          w="100%"
          p={2.5}
          mt="5px"
          align="center"
          borderRadius="lg"
          bg="brand.primary"
        >
          <Icon as={Add} mr={3} color="#292D32" />
          <Text
            color="brand.PrimaryTextColor"
            fontWeight="500"
            onClick={onAddTaskClick}
          >
            Add Task
          </Text>
        </Flex>
      </VStack>
    </VStack>
  );
}
