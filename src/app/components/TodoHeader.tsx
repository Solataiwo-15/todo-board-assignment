"use client";

import {
  Button,
  Flex,
  Heading,
  IconButton,
  Switch,
  Box,
} from "@chakra-ui/react";
import { Add, ArrowLeft2, Calendar, Export, Filter } from "iconsax-react";

interface TodoHeaderProps {
  onAddTaskClick: () => void;
}

export default function TodoHeader({ onAddTaskClick }: TodoHeaderProps) {
  return (
    <Flex
      justify="space-between"
      align="center"
      px={8}
      py={8}
      pb={6}
      borderBottom="1px solid #CDD6E9"
    >
      <Flex align="center" gap={4}>
        <IconButton
          aria-label="Back"
          icon={<ArrowLeft2 size="24" />}
          variant="ghost"
          isRound
          size="lg"
          border="1px solid #E2E8F0"
        />
        <Heading as="h1" size="lg" fontWeight="medium">
          Afdeling Kwaliteit
        </Heading>
      </Flex>

      <Flex align="center" gap={3}>
        <Box
          bg="#F7F7F7"
          border="1px solid #CDD6E933"
          borderRadius="lg"
          h="50px"
          w="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Switch size="sm" />
        </Box>

        <IconButton
          aria-label="Filter by list"
          icon={<Filter size="20" />}
          bg="#F7F7F7"
          border="1px solid #CDD6E933"
          borderRadius="lg"
          h="50px"
          w="50px"
        />
        <IconButton
          aria-label="Filter by date"
          icon={<Calendar size="20" />}
          bg="#F7F7F7"
          border="1px solid #CDD6E933"
          borderRadius="lg"
          h="50px"
          w="50px"
        />

        <Button
          leftIcon={<Export size="20" />}
          variant="solid"
          bg="brand.Purple"
          color="white"
          h="50px"
          _hover={{ bg: "#4C28C0" }}
        >
          Export xlsx
        </Button>
        <Button
          leftIcon={<Add size="20" />}
          bg="brand.Green"
          color="white"
          h="50px"
          _hover={{ bg: "#29A385" }}
          onClick={onAddTaskClick}
        >
          Add Task
        </Button>
      </Flex>
    </Flex>
  );
}
