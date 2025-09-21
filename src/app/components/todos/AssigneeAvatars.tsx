"use client";

import { Avatar, AvatarGroup, Text } from "@chakra-ui/react";
import { Assignee } from "../../types";

interface AssigneeAvatarsProps {
  assignees: Assignee[];
}

const AVATAR_LIMIT = 2;

export default function AssigneeAvatars({ assignees }: AssigneeAvatarsProps) {
  if (!assignees || assignees.length === 0) {
    return <Text color="gray.400">-</Text>;
  }

  const visibleAssignees = assignees.slice(0, AVATAR_LIMIT);
  const hiddenCount = assignees.length - AVATAR_LIMIT;

  return (
    <AvatarGroup size="sm" max={AVATAR_LIMIT + 1} spacing="-1.5">
      {visibleAssignees.map((assignee) => (
        <Avatar
          key={assignee.id}
          name={assignee.name}
          src={assignee.avatarUrl}
        />
      ))}
      {hiddenCount > 0 && (
        <Avatar
          name={`${hiddenCount} more`}
          bg="gray.200"
          color="gray.600"
          getInitials={() => `+${hiddenCount}`}
        />
      )}
    </AvatarGroup>
  );
}
