import type { User } from "./types.js";

export const userDetails = (users: User[]): string[] => {
  return users.map(
    (user) =>
      `${user.id}|${user.userName}|${user.firstName}|${user.lastName}|${user.studentId}`,
  );
};
