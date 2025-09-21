"use client";

import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { SearchNormal1 } from "iconsax-react";
import { HiOutlineViewColumns } from "react-icons/hi2";
import { TfiLayoutListThumb } from "react-icons/tfi";

type ViewMode = "table" | "card";

interface TodoToolbarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export default function TodoToolbar({
  viewMode,
  setViewMode,
}: TodoToolbarProps) {
  return (
    <Flex
      justify="space-between"
      align="center"
      bg="brand.VeryLightGreen"
      p={3}
      borderRadius="lg"
      mb={6}
    >
      <InputGroup maxW="400px">
        <InputLeftElement pointerEvents="none" h="100%">
          <SearchNormal1 size="22" color="#A0AEC0" />
        </InputLeftElement>
        <Input
          placeholder="Search for To-Do"
          variant="filled"
          fontSize="16px"
          bg="white"
          _hover={{ bg: "white" }}
          _focus={{ bg: "white" }}
          h="50px"
          pl="44px"
        />
      </InputGroup>

      <Flex p="8px" bg="white" borderRadius="lg" gap={2}>
        <IconButton
          aria-label="Card View"
          icon={<HiOutlineViewColumns size="20" />}
          onClick={() => setViewMode("card")}
          bg={viewMode === "card" ? "brand.Green" : "brand.background"}
          color={viewMode === "card" ? "white" : "#8A92A6"}
          size="md"
        />
        <IconButton
          aria-label="Table View"
          icon={<TfiLayoutListThumb size="18" />}
          onClick={() => setViewMode("table")}
          bg={viewMode === "table" ? "brand.Green" : "white"}
          color={viewMode === "table" ? "white" : "#8A92A6"}
          size="md"
        />
      </Flex>
    </Flex>
  );
}
