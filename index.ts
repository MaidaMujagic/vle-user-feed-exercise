import { printUserDetails } from "./print-users.js";
import { fetchData } from "./fetch-data.js";

const outputFetchedData = async () => {
  try {
    const result = await fetchData();
    printUserDetails(result);
  } catch (error) {
    console.error("Error printing data:", error);
  }
};

void outputFetchedData();
