"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

export default function Header() {
  // This is also static for now
  return (
    <Box as="header" bg="white" borderBottom="1px solid #E2E8F0" p={4}>
      <Flex justify="flex-end" align="center">
        <Text>Hi Paul</Text>
        {/* Placeholder for user avatar and other icons */}
      </Flex>
    </Box>
  );
}
