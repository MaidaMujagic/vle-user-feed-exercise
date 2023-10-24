import fetch from "node-fetch";
import * as dotenv from "dotenv";
import type { User } from "./types.js";

dotenv.config({
  path: "./.env",
});

const environment = process.env.REST_API_URL;

const url = environment ?? "";

export const fetchData = async (): Promise<User[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "The page containing information about Users cannot be loaded",
    );
  }

  return (await response.json()) as User[];
};
