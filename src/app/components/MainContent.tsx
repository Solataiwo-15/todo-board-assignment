"use client";

import { useState, useEffect } from "react";
import {
  Box,
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
  Icon,
} from "@chakra-ui/react";
import PriorityTag from "./todos/PriorityTag";
import AssigneeAvatars from "./todos/AssigneeAvatars";
import TodoActionsMenu from "./todos/TodoActionsMenu";
import { mockTodos } from "../data/mockTodos";
import { Todo, Status } from "../types";
import TodoHeader from "./TodoHeader";
import TodoToolbar from "./TodoToolbar";
import { TaskSquare, Clock, TickCircle, RecordCircle } from "iconsax-react";
import Pagination from "./todos/Pagination";
import CardView from "./todos/CardView";
import AddTaskModal from "./todos/AddTaskModal";

export default function MainContent() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.error("Failed to parse todos from localStorage", error);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isMounted]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Todo | null>(null);
  const [viewMode, setViewMode] = useState<"table" | "card">("table");
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);

  const TABS_CONFIG = [
    {
      label: "To Do",
      status: "Todo" as Status,
      icon: TaskSquare,
      count: todos.filter((t) => t.status === "Todo").length,
      defaultIconColor: "brand.primary",
      defaultIconBg: "brand.LightPurple",
      defaultCountBg: "brand.VeryLightPurple",
      defaultCountColor: "brand.PrimaryTextColor",
      activeBg: "brand.LightPurple",
      activeColor: "white",
      activeCountBg: "brand.VeryLightPurple",
      activeCountColor: "brand.PrimaryTextColor",
    },
    {
      label: "In Progress",
      status: "In Progress" as Status,
      icon: Clock,
      count: todos.filter((t) => t.status === "In Progress").length,
      defaultIconColor: "brand.primary",
      defaultIconBg: "brand.Yellow",
      defaultCountBg: "brand.LightYellow",
      defaultCountColor: "brand.PrimaryTextColor",
      activeBg: "brand.Yellow",
      activeColor: "white",
      activeCountBg: "brand.LightYellow",
      activeCountColor: "brand.PrimaryTextColor",
    },
    {
      label: "Complete",
      status: "Complete" as Status,
      icon: TickCircle,
      count: todos.filter((t) => t.status === "Complete").length,
      defaultIconColor: "brand.primary",
      defaultIconBg: "brand.LightGreen",
      defaultCountBg: "brand.VeryLightGreen",
      defaultCountColor: "brand.PrimaryTextColor",
      activeBg: "brand.LightGreen",
      activeColor: "white",
      activeCountBg: "brand.VeryLightGreen",
      activeCountColor: "brand.PrimaryTextColor",
    },
  ];

  const tabStatuses: Status[] = TABS_CONFIG.map((tab) => tab.status as Status);

  const handleOpenAddModal = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };
  const handleOpenEditModal = (task: Todo) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const handleStatusToggle = (taskId: string, currentStatus: Status) => {
    let nextStatus: Status = "In Progress";
    if (currentStatus === "Todo") nextStatus = "In Progress";
    if (currentStatus === "In Progress") nextStatus = "Complete";
    if (currentStatus === "Complete") nextStatus = "Todo"; // Cycle back to 'Todo'

    setTodos(
      todos.map((t) => (t.id === taskId ? { ...t, status: nextStatus } : t))
    );
  };

  const handleTaskSave = (taskData: Omit<Todo, "id">) => {
    if (taskToEdit) {
      setTodos(
        todos.map((t) =>
          t.id === taskToEdit.id ? { ...t, ...taskData, id: t.id } : t
        )
      );
    } else {
      const newTodo: Todo = {
        id: `todo-${Date.now()}`,
        ...taskData,
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    }
    handleCloseModal();
  };

  const filteredTodos =
    activeTabIndex === null
      ? todos
      : todos.filter((todo) => todo.status === tabStatuses[activeTabIndex!]);

  const handleTabChange = (index: number) => {
    setActiveTabIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box as="main" flex="1">
      <TodoHeader onAddTaskClick={handleOpenAddModal} />
      <Box p={8}>
        <TodoToolbar viewMode={viewMode} setViewMode={setViewMode} />

        {viewMode === "table" ? (
          <Box bg="brand.background" p={4} borderRadius="xl">
            <Tabs
              variant="unstyled"
              index={activeTabIndex ?? -1}
              onChange={handleTabChange}
            >
              <TabList gap={3}>
                {TABS_CONFIG.map((tab, index) => {
                  const isActive = index === activeTabIndex;
                  return (
                    <Tab
                      key={index}
                      borderRadius="lg"
                      pt={2}
                      pb={2}
                      pl={2.5}
                      bg={isActive ? tab.activeBg : "white"}
                      color={isActive ? tab.activeColor : "gray.800"}
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        w="100%"
                        minW="180px"
                      >
                        <Flex align="center" gap={2}>
                          <Flex
                            align="center"
                            justify="center"
                            h="32px"
                            w="32px"
                            borderRadius="md"
                            bg={isActive ? "white" : tab.defaultIconBg}
                          >
                            <Icon
                              as={tab.icon}
                              color={
                                isActive ? tab.activeBg : tab.defaultIconColor
                              }
                              boxSize={5}
                            />
                          </Flex>
                          <Text fontWeight="medium" fontSize="sm">
                            {tab.label}
                          </Text>
                        </Flex>
                        <Box
                          bg={isActive ? tab.activeCountBg : tab.defaultCountBg}
                          px={2}
                          py={0.5}
                          borderRadius="md"
                        >
                          <Text
                            fontWeight="bold"
                            fontSize="sm"
                            color={
                              isActive
                                ? tab.activeCountColor
                                : tab.defaultCountColor
                            }
                          >
                            ({tab.count})
                          </Text>
                        </Box>
                      </Flex>
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs>
          </Box>
        ) : (
          <CardView todos={todos} onAddTaskClick={handleOpenAddModal} />
        )}
      </Box>

      {viewMode === "table" && (
        <Box px={8} pb={8}>
          <TableContainer
            bg="white"
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
          >
            <Table variant="simple">
              <Thead bg="gray.50">
                <Tr>
                  <Th
                    borderRight="1px solid"
                    borderColor="gray.200"
                    fontWeight="700"
                    paddingTop="22px"
                    paddingBottom="20px"
                  >
                    Name
                  </Th>
                  <Th
                    borderRight="1px solid"
                    borderColor="gray.200"
                    fontWeight="700"
                  >
                    Date
                  </Th>
                  <Th
                    borderRight="1px solid"
                    borderColor="gray.200"
                    fontWeight="700"
                  >
                    Assignee
                  </Th>
                  <Th borderColor="gray.200" fontWeight="700">
                    Priority
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredTodos.map((todo: Todo) => (
                  <Tr key={todo.id}>
                    <Td fontWeight="400">{todo.name}</Td>
                    <Td color="gray.600">{todo.date}</Td>
                    <Td>
                      <AssigneeAvatars assignees={todo.assignees} />
                    </Td>
                    <Td>
                      <PriorityTag priority={todo.priority} />
                    </Td>
                    <Td isNumeric>
                      <TodoActionsMenu
                        onEdit={() => handleOpenEditModal(todo)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            <Pagination />
          </TableContainer>
        </Box>
      )}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onTaskSave={handleTaskSave}
        taskToEdit={taskToEdit}
      />
    </Box>
  );
}
