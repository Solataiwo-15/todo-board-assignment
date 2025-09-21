"use client";

import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { Todo } from "../../types";
import { Calendar, User } from "iconsax-react";
import AssigneeAvatars from "./AssigneeAvatars";
import PriorityTag from "./PriorityTag";

interface TodoCardProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoCardProps) {
  return (
    <Box p={3} bg="white" borderRadius="lg" w="100%">
      <VStack align="start" spacing={4}>
        <Text fontWeight="600" color="brand.PrimaryTextColor">
          {todo.name}
        </Text>

        <HStack color="gray.500">
          <Icon as={Calendar} boxSize={4} color="#BAC1CC" />
          <Text fontSize="sm" fontWeight="400" color="brand.PrimaryTextColor">
            {todo.date}
          </Text>
        </HStack>

        <HStack w="100%">
          <Icon as={User} boxSize={4} color="#BAC1CC" />
          <AssigneeAvatars assignees={todo.assignees} />
        </HStack>

        <PriorityTag priority={todo.priority} />
      </VStack>
    </Box>
  );
}
