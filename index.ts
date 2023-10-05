import type { User } from "./types.js";
import { printUserDetails } from "./print-users.js";

const student: User[] = [
  {
    id: 1,
    userName: "JS123",
    firstName: "John",
    lastName: "Smith",
    studentId: "JS12345",
  },
  {
    id: 2,
    userName: "BB123",
    firstName: "Bob",
    lastName: "Brown",
    studentId: "BB12345",
  },
];

printUserDetails(student);
