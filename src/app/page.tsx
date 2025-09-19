import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";
import MainContent from "../app/components/MainContent";

export default function Home() {
  return (
    <Flex h="100vh" bg="gray.50">
      <Sidebar />

      <Box flex="1">
        <Header />
        <MainContent />
      </Box>
    </Flex>
  );
}
