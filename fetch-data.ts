import fetch from "node-fetch";
import type { User } from "./types.js";


export const fetchData = async (): Promise<User[]> => {
  try {
    const url = "https://webhook.site/12267765-da13-48fc-b243-9836e4877577";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response issues");
    }

    return (await response.json()) as User[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
