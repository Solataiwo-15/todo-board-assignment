"use client";

import {
  Box,
  Flex,
  Image,
  VStack,
  Switch,
  Text,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { sidebarConfig } from "../config/sidebar";
import NavItem from "./Sidebar/NavItem";

export default function Sidebar() {
  return (
    <Box
      as="nav"
      w="280px"
      bg="white"
      borderRight="1px solid #E2E8F0"
      h="100vh"
      p={6}
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Flex align="center" mb={8}>
        {" "}
        <Image src="../icons/Logo.png" alt="MKV Logo" h="60px" />
      </Flex>

      <IconButton
        aria-label="Collapse sidebar"
        position="absolute"
        top="42px"
        right="0px"
        zIndex="overlay"
        bg="brand.background"
        borderRadius="6px"
        h="30px"
        w="17px"
        icon={
          <Flex align="center" justify="center">
            <Box bg="gray.600" h="15px" w="1.6px" borderRadius="full" />
            <Icon as={ChevronLeftIcon} boxSize={5} color="gray.600" ml="-4px" />
          </Flex>
        }
      />

      <VStack spacing={6} align="stretch" flex="1" overflowY="auto">
        {sidebarConfig.map((group, index) => (
          <VStack key={index} align="stretch" spacing={2}>
            {group.items.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </VStack>
        ))}
      </VStack>

      <Box
        mt={10}
        p={3}
        bg="brand.background"
        borderRadius="xl"
        border="1px solid"
        borderColor="brand.BorderColor"
      >
        <Flex
          as="button"
          w="100%"
          align="center"
          justify="space-between"
          p={3}
          mb={2}
          bg="white"
          borderRadius="lg"
        >
          <Flex align="center">
            <Image
              src="../icons/flag-en.jpg"
              alt="English Flag"
              boxSize="24px"
              border="1px solid"
              borderColor="brand.BorderColor"
              borderRadius="full"
              mr={3}
            />
            <Text>English</Text>
          </Flex>
          <Icon as={ChevronDownIcon} />
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          p={3}
          bg="white"
          borderRadius="lg"
        >
          <Text>Dark mode</Text>
          <Switch size="md" />
        </Flex>
      </Box>
    </Box>
  );
}
