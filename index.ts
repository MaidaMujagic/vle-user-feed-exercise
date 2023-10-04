import { userDetails } from "./functions.js";
import type { User } from "./types.js";

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

export const printUserDetails = (users: User[]) => {
  const userOutputs = userDetails(users);
  const consolidatedOutput =
    "EXTERNAL_PERSON_KEY|USER_ID|FIRSTNAME|LASTNAME|STUDENT_ID" +
    "\n" +
    userOutputs?.join("\n");

  console.log(consolidatedOutput);
};

printUserDetails(student);
