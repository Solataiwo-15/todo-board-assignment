"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { More } from "iconsax-react";

interface TodoActionMenuProps {
  onEdit: () => void;
}

export default function TodoActionsMenu({ onEdit }: TodoActionMenuProps) {
  const handleDelete = () => alert("Deleting...");

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<More />}
        bg="brand.background"
        borderRadius="md"
        h="30px"
        w="40px"
      />
      <MenuList>
        <MenuItem onClick={onEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete} color="red.500">
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
