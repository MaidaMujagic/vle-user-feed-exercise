import { vi, expect, it, describe, beforeEach } from "vitest";
import fetch from "node-fetch";
import type { Response } from "node-fetch";
import { fetchData } from "./fetch-data.js";
import type { User } from "./types.js";

vi.mock("node-fetch");

describe("fetchData()", () => {
  const response: User[] = [
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

  it("should fetch the data from the given url", async () => {
    vi.mocked(fetch).mockResolvedValue({
      json: () => Promise.resolve(response),
      ok: true,
    } as Response);

    const resolved = await fetchData();

    expect(resolved).toEqual(response);
  });

  it("should return an empty array on network failure", async () => {
    vi.mocked(fetch).mockRejectedValue(new Error("Network response issues"));

    const reject = await fetchData();

    expect(reject).toEqual([]);
  });

  it("should log an appropriate message to the console on network failure", async () => {
    console.error = vi.fn();

    vi.mocked(fetch).mockRejectedValue(new Error("Network response issues"));

    await fetchData();

    expect(console.error).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Network response issues" }),
    );
  });
});
