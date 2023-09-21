import {vi, expect, it, describe, Mock} from "vitest";
import {User} from "./types";
import {printUserDetails} from "./index";
import {userDetails} from "./functions";


vi.mock('./functions')

describe('printUserDetails()', () => {
    it ('should call userDetails() with the expected argument', () => {

        const testUser: User = {
            id: 1,
            userName: "DS123",
            firstName: "Dummy",
            lastName: "User",
            studentId: "DS12345"
        }

        printUserDetails(testUser);

        expect(userDetails).toHaveBeenCalledWith(testUser);

    });

    it ('should print the correct user details to the console', () => {

        const testUser: User = {
            id: 1,
            userName: "DS123",
            firstName: "Dummy",
            lastName: "User",
            studentId: "DS12345"
        }

        console.log = vi.fn();

        vi.mocked(userDetails).mockReturnValue('1|DS123|Dummy|User|DS12345');

        printUserDetails(testUser);

        expect(console.log).toHaveBeenCalledWith('1|DS123|Dummy|User|DS12345');

    });
});