"use client";

import { useState } from "react";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  ButtonGroup,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {
  SearchNormal1,
  Notification,
  Link as LinkIcon,
  CloseCircle,
} from "iconsax-react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Header() {
  const [searchValue, setSearchValue] = useState("M91");

  return (
    <Flex
      as="header"
      align="center"
      justifyItems="space-between"
      justifyContent="space-between"
      p={4}
      pl={12}
      pr={12}
      bg="white"
      borderBottom="1px solid #CDD6E9"
    >
      <InputGroup w={{ base: "200px", md: "300px" }}>
        <InputLeftElement pointerEvents="none">
          <SearchNormal1 size="20" color="#6C7278" />
        </InputLeftElement>
        <Input
          placeholder="Search M91"
          borderRadius="lg"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          bg="brand.background"
          border="1px solid"
          borderColor="#CDD6E9"
        />
        {searchValue && (
          <InputRightElement>
            <IconButton
              aria-label="Clear search"
              icon={<CloseCircle size="20" color="#464B50" />}
              variant="ghost"
              isRound
              onClick={() => setSearchValue("")}
            />
          </InputRightElement>
        )}
      </InputGroup>

      <Flex align="center">
        <ButtonGroup
          spacing={2}
          ml={6}
          variant="outline"
          display={{ base: "none", md: "flex" }}
        >
          <IconButton
            aria-label="Custom Icon One"
            icon={
              <Image
                src="/icons/icon-one.png"
                alt="First custom icon"
                boxSize="20px"
              />
            }
          />
          <IconButton
            aria-label="Custom Icon Two"
            icon={
              <Image
                src="/icons/icon-two.png"
                alt="Second custom icon"
                boxSize="20px"
              />
            }
          />
          <IconButton
            aria-label="Custom Icon Three"
            icon={
              <Image
                src="/icons/icon-three.png"
                alt="Third custom icon"
                height="12px"
                width="20px"
              />
            }
          />
          <IconButton
            aria-label="Custom Icon Four"
            icon={
              <Image
                src="/icons/icon-four.png"
                alt="Fourth custom icon"
                boxSize="20px"
              />
            }
          />
        </ButtonGroup>
        <Flex
          align="center"
          bg="brand.background"
          border="1px solid #EEF1F9"
          borderColor="gray.200"
          borderRadius="lg"
          p="0.5"
          ml={4}
          mr={4}
          display={{ base: "none", lg: "flex" }}
        >
          <ButtonGroup spacing="2" color="white" padding={0.2}>
            <Button bg="brand.Purple" color="white" fontSize="13px" h="35px">
              Melding maken
            </Button>
            <Button bg="brand.Green" color="white" fontSize="13px" h="35px">
              VIM
            </Button>
            <Button bg="brand.Green" color="white" fontSize="13px" h="35px">
              LMS
            </Button>
            <Button bg="brand.Green" color="white" fontSize="13px" h="35px">
              BHV
            </Button>
            <Button bg="brand.Green" color="white" fontSize="13px" h="35px">
              DataLek
            </Button>
          </ButtonGroup>
        </Flex>
        <IconButton
          icon={<LinkIcon size="20px" color="#464B50" />}
          ml="0.5px"
          aria-label="Link"
          bg="brand.background"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="lg"
          display={{ base: "none", md: "flex" }}
          h="41px"
          w="41px"
        />
      </Flex>

      <ButtonGroup spacing={3} alignItems="center" ml={4}>
        <IconButton
          icon={<Notification size="20px" />}
          aria-label="Notifications"
          bg="brand.background"
          isRound
          h="42px"
          w="42px"
        />

        <Menu>
          <MenuButton
            h="42px"
            borderRadius="full"
            bg="brand.background"
            px={1}
            _hover={{ bg: "gray.100" }}
          >
            <Flex align="center" gap={2}>
              <Avatar size="sm" name="Paul" src="/icons/user-icon.jpg" />
              <Text
                fontSize="md"
                fontWeight="medium"
                color="gray.700"
                display={{ base: "none", md: "block" }}
              >
                Hi Paul
              </Text>
              <ChevronDownIcon color="gray.600" mr="1" />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </ButtonGroup>
    </Flex>
  );
}
