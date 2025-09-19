"use client";

import { Box, Heading } from "@chakra-ui/react";

export default function MainContent() {
  // This is where all our Todo logic will go.
  return (
    <Box as="main" p={8}>
      <Heading>Afdeling Kwaliteit</Heading>
      {/* The rest of the page (search, tabs, table) will be built here */}
    </Box>
  );
}
