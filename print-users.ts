import type { User } from "./types.js";
import { userDetails } from "./functions.js";
import { fetchData } from "./fetch-data.js";

const printUserDetails = (users: User[]) => {
  const userOutputs = userDetails(users);
  const consolidatedOutput =
    "EXTERNAL_PERSON_KEY|USER_ID|FIRSTNAME|LASTNAME|STUDENT_ID" +
    "\n" +
    userOutputs.join("\n");

  console.log(consolidatedOutput);
};

export const outputFetchedData = async () => {
  try {
    const result = await fetchData();
    printUserDetails(result);
  } catch (error) {
    console.error("Error printing data:", error);
  }
};
