"use client";

import { Flex, Icon, Text } from "@chakra-ui/react";
import { Flag } from "iconsax-react";
import { Priority } from "../../types/index";

interface PriorityTagProps {
  priority: Priority;
}

const priorityColors: Record<Priority, string> = {
  Urgent: "#FF515D",
  Important: "#F6BE38",
  Medium: "#75C5C1",
};

export default function PriorityTag({ priority }: PriorityTagProps) {
  const color = priorityColors[priority] || "gray.500";

  return (
    <Flex align="center">
      <Icon as={Flag} color={color} mr={2} variant="Bold" />
      <Text color="brand.PrimaryTextColor" fontWeight="400">
        {priority}
      </Text>
    </Flex>
  );
}
