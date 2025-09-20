"use client";

import { useState } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tabs,
  TabList,
  Tab,
  Flex,
  Text,
} from "@chakra-ui/react";
import { mockTodos } from "../data/mockTodos";
import { Todo, Status } from "../types";
import { FiCheckCircle } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const tabStatuses: Status[] = ["Todo", "In Progress", "Complete"];

export default function MainContent() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const currentStatus = tabStatuses[activeTabIndex];
  const filteredTodos = mockTodos.filter(
    (todo) => todo.status === currentStatus
  );

  return (
    <Box as="main" p={8} bg="#F9FAFB" flex="1">
      <Heading mb={6}>Afdeling Kwaliteit</Heading>

      <Box mb={6}>{/* Placeholder for Search and Buttons */}</Box>

      <Tabs
        variant="unstyled"
        index={activeTabIndex}
        onChange={(index) => setActiveTabIndex(index)}
      >
        <TabList>
          <Tab
            _selected={{
              color: "blue.600",
              bg: "blue.50",
              borderBottom: "2px solid",
              borderColor: "blue.600",
            }}
            borderRadius="md"
          >
            To Do
            <Text as="span" ml={2} bg="gray.200" px={2} borderRadius="md">
              20
            </Text>
          </Tab>
          <Tab
            _selected={{
              color: "blue.600",
              bg: "blue.50",
              borderBottom: "2px solid",
              borderColor: "blue.600",
            }}
            borderRadius="md"
          >
            <Flex align="center">
              <Box as={GoDotFill} color="orange.400" mr={2} />
              In Progress
              <Text as="span" ml={2} bg="gray.200" px={2} borderRadius="md">
                23
              </Text>
            </Flex>
          </Tab>
          <Tab
            _selected={{
              color: "blue.600",
              bg: "blue.50",
              borderBottom: "2px solid",
              borderColor: "blue.600",
            }}
            borderRadius="md"
          >
            <Flex align="center">
              <Box as={FiCheckCircle} color="green.400" mr={2} />
              Complete
              <Text as="span" ml={2} bg="gray.200" px={2} borderRadius="md">
                18
              </Text>
            </Flex>
          </Tab>
        </TabList>
      </Tabs>

      <TableContainer bg="white" borderRadius="lg" p={4} mt={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Assignee</Th>
              <Th>Priority</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTodos.map((todo: Todo) => (
              <Tr key={todo.id}>
                <Td>{todo.name}</Td>
                <Td>{todo.date}</Td>
                <Td>{/* Placeholder */}</Td>
                <Td>{todo.priority}</Td>
                <Td>{/* Placeholder */}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
