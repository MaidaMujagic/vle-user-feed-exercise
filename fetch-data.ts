import fetch from "node-fetch";
import type { User } from "./types.js";

const url = process.env.REST_API_URL ?? "";

export const fetchData = async (): Promise<User[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "The page containing information about Users cannot be loaded",
    );
  }

  return (await response.json()) as User[];
};
