"use client";

import { ElementType, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  VStack,
  Flex,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Avatar,
  Checkbox,
  MenuDivider,
} from "@chakra-ui/react";
import { Todo, Status, Priority, Assignee } from "../../types";
import {
  Calendar,
  User,
  Flag,
  DocumentText,
  RecordCircle,
  Forbidden2,
  TaskSquare,
  Clock,
  TickCircle,
} from "iconsax-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import PriorityTag from "./PriorityTag";
import AssigneeAvatars from "./AssigneeAvatars";

const mockUsers: Assignee[] = [
  { id: "u1", name: "Maria Vetrovs", avatarUrl: "/icons/avatar1.jpg" },
  { id: "u2", name: "Adison Mango", avatarUrl: "/icons/avatar2.jpg" },
  { id: "u3", name: "Gustavo Culhane", avatarUrl: "/icons/avatar1.jpg" },
];

const statusOptions: {
  label: string;
  value: Status;
  icon: ElementType;
  color: string;
  bgColor: string;
}[] = [
  {
    label: "To Do",
    value: "Todo",
    icon: TaskSquare,
    color: "white",
    bgColor: "brand.LightPurple",
  },
  {
    label: "In Progress",
    value: "In Progress",
    icon: Clock,
    color: "white",
    bgColor: "brand.Yellow",
  },
  {
    label: "Complete",
    value: "Complete",
    icon: TickCircle,
    color: "white",
    bgColor: "brand.LightGreen",
  },
];

const priorityOptions: { label: string; value: Priority }[] = [
  { label: "Urgent", value: "Urgent" },
  { label: "Important", value: "Important" },
  { label: "Medium", value: "Medium" },
];

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTaskSave: (taskData: Omit<Todo, "id">) => void;
  taskToEdit?: Todo | null;
}

export default function AddTaskModal({
  isOpen,
  onClose,
  onTaskSave,
  taskToEdit,
}: AddTaskModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("Todo");
  const [priority, setPriority] = useState<Priority | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [assignees, setAssignees] = useState<Assignee[]>([]);

  useEffect(() => {
    if (taskToEdit && isOpen) {
      setName(taskToEdit.name);
      setDescription(taskToEdit.description || "");
      setStatus(taskToEdit.status);
      setPriority(taskToEdit.priority);
      setAssignees(taskToEdit.assignees || []);
      setSelectedDate(
        new Date(taskToEdit.date.split(" - ")[0].split("/").reverse().join("-"))
      );
    } else {
      setName("");
      setDescription("");
      setStatus("Todo");
      setPriority(null);
      setAssignees([]);
      setSelectedDate(new Date());
    }
  }, [taskToEdit, isOpen]);

  const handleSave = () => {
    if (!name || !priority) {
      alert("Please enter a task name and select a priority.");
      return;
    }
    onTaskSave({
      name,
      description,
      status,
      priority,
      date: selectedDate ? format(selectedDate, "dd/MM/yyyy") : "N/A",
      assignees,
    });
    onClose();
  };

  const StatusTag = ({ status }: { status: Status }) => {
    const option = statusOptions.find((opt) => opt.value === status);
    if (!option) return null;

    return (
      <HStack bg={option.bgColor} p={2} borderRadius="md" spacing={2}>
        <Icon as={option.icon} color={option.color} boxSize={4} />
        <Text color="white" fontWeight="medium">
          {option.label}
        </Text>
      </HStack>
    );
  };

  const StatusSelector = () => (
    <Menu>
      <MenuButton as={Button} variant="ghost" p={0} h="auto">
        <StatusTag status={status} />
      </MenuButton>
      <MenuList borderRadius="5px">
        {statusOptions.map((opt) => (
          <MenuItem key={opt.value} onClick={() => setStatus(opt.value)}>
            <StatusTag status={opt.value} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );

  const PrioritySelector = () => (
    <Menu>
      <MenuButton as={Button} variant="ghost">
        {priority ? (
          <PriorityTag priority={priority} />
        ) : (
          <Text color="gray.500" fontWeight="normal">
            Select Priority
          </Text>
        )}
      </MenuButton>
      <MenuList>
        {priorityOptions.map((opt) => (
          <MenuItem key={opt.value} onClick={() => setPriority(opt.value)}>
            <PriorityTag priority={opt.value} />
          </MenuItem>
        ))}
        <MenuDivider />
        <MenuItem onClick={() => setPriority(null)}>
          <HStack>
            <Icon as={Forbidden2} color="gray.400" />
            <Text>Clear</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );

  const AssigneeSelector = () => {
    const handleToggleAssignee = (user: Assignee) => {
      setAssignees((prevAssignees) => {
        const isSelected = prevAssignees.some((a) => a.id === user.id);
        if (isSelected) {
          return prevAssignees.filter((a) => a.id !== user.id);
        } else {
          return [...prevAssignees, user];
        }
      });
    };

    return (
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} variant="ghost">
          {assignees.length > 0 ? (
            <AssigneeAvatars assignees={assignees} />
          ) : (
            <Text color="gray.500" fontWeight="normal">
              Select Assignee
            </Text>
          )}
        </MenuButton>
        <MenuList>
          {mockUsers.map((user) => {
            const isSelected = assignees.some((a) => a.id === user.id);
            return (
              <MenuItem
                key={user.id}
                onClick={() => handleToggleAssignee(user)}
              >
                <HStack w="100%">
                  <Checkbox isChecked={isSelected} mr={3} />
                  <Avatar size="sm" name={user.name} src={user.avatarUrl} />
                  <Text flex="1">{user.name}</Text>
                </HStack>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent borderRadius="xl" p={4} maxW="600px">
        <ModalHeader>
          <Input
            placeholder="Task Name"
            variant="unstyled"
            fontSize="2xl"
            fontWeight="bold"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={6} align="start">
            <Flex align="center" w="100%">
              <Icon as={RecordCircle} color="gray.400" boxSize={6} mr={4} />
              <Text w="100px">Status</Text>
              <StatusSelector />
            </Flex>
            <Flex align="center" w="100%">
              <Icon as={Calendar} color="gray.400" boxSize={6} mr={4} />
              <Text w="100px">Dates</Text>
              <Popover>
                <PopoverTrigger>
                  <Button variant="ghost">
                    {selectedDate
                      ? format(selectedDate, "dd/MM/yyyy")
                      : "Select Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody>
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Flex align="center" w="100%">
              <Icon as={User} color="gray.400" boxSize={6} mr={4} />
              <Text w="100px">Assignees</Text>
              <AssigneeSelector />
            </Flex>
            <Flex align="center" w="100%">
              <Icon as={Flag} color="gray.400" boxSize={6} mr={4} />
              <Text w="100px">Priority</Text>
              <PrioritySelector />
            </Flex>
            <VStack align="start" w="100%" spacing={3}>
              <HStack color="gray.400">
                <Icon as={DocumentText} boxSize={6} mr={2} />
                <Text fontWeight="400" color="brand.PrimaryTextColor">
                  Description
                </Text>
              </HStack>
              <Textarea
                placeholder="Write something or type"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                bg="brand.background"
                borderColor="brand.BorderColor"
                minH="120px"
              />
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="brand.Green"
            color="white"
            onClick={handleSave}
            _hover={{ bg: "brand.LightGreen" }}
            px={6}
          >
            {taskToEdit ? "Save Changes" : "Create Task"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
