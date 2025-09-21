import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";
import MainContent from "../app/components/MainContent";

export default function Home() {
  return (
    <Flex h="100vh" bg="brand.background">
      <Sidebar />
      <Flex direction="column" flex="1">
        <Header />
        <Box flex="1" overflowY="auto" bg="white" m={12}>
          <MainContent />
        </Box>
      </Flex>
    </Flex>
  );
}
