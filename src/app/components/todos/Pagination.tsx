"use client";

import {
  Flex,
  HStack,
  Button,
  IconButton,
  Text,
  Select,
  Icon,
  Box,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { BsThreeDots } from "react-icons/bs";

export default function Pagination() {
  const currentPage = 1;
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <Flex
      p={4}
      justify="space-between"
      align="center"
      borderTop="1px solid"
      borderColor="gray.200"
    >
      <HStack bg="gray.50" p={1.5} borderRadius="full" spacing={1}>
        <IconButton
          aria-label="First page"
          variant="ghost"
          size="sm"
          icon={
            <Box position="relative" w="20px" h="20px">
              <Icon
                as={ChevronLeftIcon}
                boxSize={5}
                position="absolute"
                left="-3px"
              />
              <Icon
                as={ChevronLeftIcon}
                boxSize={5}
                position="absolute"
                left="2px"
              />
            </Box>
          }
        />
        <IconButton
          aria-label="Previous page"
          icon={<ChevronLeftIcon boxSize={5} />}
          variant="ghost"
          size="sm"
        />

        {pageNumbers.map((page) => (
          <Button
            key={page}
            borderRadius="full"
            size="sm"
            bg={currentPage === page ? "brand.Green" : "transparent"}
            color={currentPage === page ? "white" : "brand.Green"}
            variant="outline"
            borderColor="brand.Green"
          >
            {page}
          </Button>
        ))}

        <Button
          borderRadius="full"
          size="sm"
          variant="outline"
          borderColor="brand.Green"
          color="brand.Green"
        >
          <Icon as={BsThreeDots} />
        </Button>
        <Button
          borderRadius="full"
          size="sm"
          variant="outline"
          borderColor="brand.Green"
          color="brand.Green"
        >
          100
        </Button>

        <IconButton
          aria-label="Next page"
          icon={<ChevronRightIcon boxSize={5} />}
          variant="ghost"
          size="sm"
        />
        <IconButton
          aria-label="Last page"
          variant="ghost"
          size="sm"
          icon={
            <Box position="relative" w="20px" h="20px">
              <Icon
                as={ChevronRightIcon}
                boxSize={5}
                position="absolute"
                right="2px"
              />
              <Icon
                as={ChevronRightIcon}
                boxSize={5}
                position="absolute"
                right="-3px"
              />
            </Box>
          }
        />
      </HStack>

      <HStack>
        <Text fontSize="sm" color="gray.600" fontWeight="600">
          Rows Per page:
        </Text>
        <Select
          size="sm"
          borderRadius="full"
          borderColor="brand.Green"
          color="gray.700"
          fontWeight="600"
          w="70px"
          defaultValue="10"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </Select>
      </HStack>
    </Flex>
  );
}
