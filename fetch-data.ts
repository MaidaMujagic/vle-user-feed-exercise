import fetch from "node-fetch";
import type { User } from "./types.js";

const url = "https://webhook.site/12267765-da13-48fc-b243-9836e4877577";

export const fetchData = async (): Promise<User[]> => {

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("The page containing information about Users cannot be loaded")
  }

  return (await response.json()) as User[];
};