import { vi, expect, it, describe, afterEach } from "vitest";
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

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should use an environment variable when fetching data", async () => {
    const testUrl = process.env.REST_API_URL ?? "";

    vi.mocked(fetch).mockResolvedValue({
      async json(): Promise<User[]> {
        return response;
      },
      ok: true,
    } as Response);

    await fetchData();

    expect(fetch).toHaveBeenCalledWith(testUrl);

    it("should fetch the data from the REST API", async () => {
      vi.mocked(fetch).mockResolvedValue({
        async json(): Promise<User[]> {
          return response;
        },
        ok: true,
      } as Response);

      const resolved = await fetchData();

      expect(resolved).toEqual(response);
    });

    it("should throw an error message on network failure", async () => {
      vi.mocked(fetch).mockRejectedValueOnce(new Error("Network failure"));

      await expect(fetchData()).rejects.toThrowError("Network failure");
    });

    it("should throw an error if the webpage cannot be loaded", async () => {
      vi.mocked(fetch).mockResolvedValue({
        ok: false,
      } as Response);

      await expect(fetchData()).rejects.toThrowError(
        "The page containing information about Users cannot be loaded",
      );
    });
  });
});
