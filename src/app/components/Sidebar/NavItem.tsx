"use client";

import { useState } from "react";
import { Box, Flex, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { NavItem as NavItemType } from "../../config/sidebar";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ACTIVE_HREF = "/todos";

interface NavItemProps {
  item: NavItemType;
}

export default function NavItem({ item }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveChild = item.subItems?.some(
    (subItem) => subItem.href === ACTIVE_HREF
  );
  const isActive = item.href === ACTIVE_HREF || hasActiveChild;

  const handleClick = () => {
    if (item.subItems) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Box w="100%">
      <Flex
        as="a"
        href={item.href}
        align="center"
        p={3}
        borderRadius="lg"
        fontWeight="medium"
        cursor="pointer"
        bg={isActive && !hasActiveChild ? "teal.50" : "transparent"}
        color={isActive ? "gray.800" : "gray.600"}
        _hover={{
          bg: "gray.50",
          color: "gray.600",
        }}
        transition="background 0.2s, color 0.2s"
        onClick={handleClick}
      >
        {item.icon && <Icon as={item.icon} boxSize={5} mr={3} />}
        <Text flex="1">{item.label}</Text>{" "}
        {item.subItems && (
          <Icon
            as={ChevronDownIcon}
            transition="transform 0.2s"
            transform={isOpen ? "rotate(180deg)" : ""}
          />
        )}
      </Flex>

      {isOpen && item.subItems && (
        <VStack align="stretch" pl={8} pt={2} spacing={2}>
          {item.subItems.map((subItem) => {
            const isSubItemActive = subItem.href === ACTIVE_HREF;
            return (
              <Link
                key={subItem.label}
                href={subItem.href}
                bg={isSubItemActive ? "brand.VeryLightGreen" : "transparent"}
                color={isSubItemActive ? "brand.LightGreen" : "gray.500"}
                p={2}
                pl={3}
                borderRadius="md"
                fontWeight="500"
                _hover={{ color: "gray.600", bg: "gray.50" }}
              >
                {subItem.label}
              </Link>
            );
          })}
        </VStack>
      )}
    </Box>
  );
}
