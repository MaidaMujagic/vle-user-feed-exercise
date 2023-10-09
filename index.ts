import { printUserDetails } from "./print-users.js";
import { fetchData } from "./fetch-data.js";

const data = () => {
  fetchData()
    .then((result) => {
      printUserDetails(result);
    })
    .catch((error) => {
      console.error("Error printing data:", error);
    });
};

data();
