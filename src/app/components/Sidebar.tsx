"use client";

import { Box, Text } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box
      as="nav"
      w="280px"
      bg="white"
      borderRight="1px solid #E2E8F0"
      h="100vh"
      p={6}
      display={{ base: "none", md: "block" }}
    >
      <Text fontSize="2xl" fontWeight="bold" color="brand.LightPurple">
        MKV
      </Text>
    </Box>
  );
}
