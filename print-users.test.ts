import { vi, expect, it, describe } from "vitest";
import type { User } from "./types.js";
import { userDetails } from "./functions.js";
import { printUserDetails } from "./print-users.js";

vi.mock("./functions");

describe("printUserDetails()", () => {
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

  it("should call userDetails() with the expected argument", () => {
    console.log = vi.fn();

    vi.mocked(userDetails).mockReturnValue([]);

    printUserDetails(testUsers);

    expect(userDetails).toHaveBeenCalledWith([
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
    ]);

    it("should print the header row before outputting the user details", () => {
      console.log = vi.fn();

      vi.mocked(userDetails).mockReturnValue([
        "1|DS123|Dummy|User|DS12345" + "\n" + "2|TS123|Test|User|TS12345",
      ]);

      printUserDetails(testUsers);

      expect(console.log).toHaveBeenCalledWith(
        "EXTERNAL_PERSON_KEY|USER_ID|FIRSTNAME|LASTNAME|STUDENT_ID" +
          "\n" +
          "1|DS123|Dummy|User|DS12345" +
          "\n" +
          "2|TS123|Test|User|TS12345",
      );
    });
  });
});
