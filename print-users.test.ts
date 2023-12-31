import { vi, expect, it, describe, afterEach } from "vitest";
import type { User } from "./types.js";
import { outputFetchedData } from "./print-users.js";
import { fetchData } from "./fetch-data.js";

describe("outputFetchedData", () => {
  vi.mock("./fetch-data");

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const testUsers: User[] = [
    {
      id: 1,
      userName: "DS123",
      firstName: "Dummy",
      lastName: "User",
      studentId: "DS12345",
    },
    {
      id: 2,
      userName: "TS123",
      firstName: "Test",
      lastName: "User",
      studentId: "TS12345",
    },
  ];

  it("should print the user details to the console", async () => {
    console.log = vi.fn();

    vi.mocked(fetchData).mockResolvedValue(testUsers);

    await outputFetchedData();

    expect(console.log).toHaveBeenCalledWith(
      "EXTERNAL_PERSON_KEY|USER_ID|FIRSTNAME|LASTNAME|STUDENT_ID" +
        "\n" +
        "1|DS123|Dummy|User|DS12345" +
        "\n" +
        "2|TS123|Test|User|TS12345",
    );
  });

  it("should log an error to the console if the user details cannot be output", async () => {
    console.error = vi.fn();

    await outputFetchedData();

    expect(console.error).toHaveBeenCalledWith(
      "Error printing data:",
      expect.any(Error),
    );
  });
});
