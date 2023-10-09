import type { User } from "./types.js";
import { userDetails } from "./functions.js";

export const printUserDetails = (users: User[]) => {
  const userOutputs = userDetails(users);
  const consolidatedOutput =
    "EXTERNAL_PERSON_KEY|USER_ID|FIRSTNAME|LASTNAME|STUDENT_ID" +
    "\n" +
    userOutputs.join("\n");

  console.log(consolidatedOutput);
};
