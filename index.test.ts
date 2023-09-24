import {vi, expect, it, describe} from "vitest";
import {User} from "./types";
import {printUserDetails} from "./index";
import {userDetails} from "./functions";


vi.mock('./functions')

describe('printUserDetails()', () => {
    it ('should call userDetails() with the expected argument', () => {

        const testUsers: User []= [
            {
                id: 1,
                userName: "DS123",
                firstName: "Dummy",
                lastName: "User",
                studentId: "DS12345"
            },
            {
                id: 2,
                userName: "TT123",
                firstName: "Test",
                lastName: "User",
                studentId: "TT12345"
            },
        ]

        console.log = vi.fn();

        printUserDetails(testUsers);

        expect(userDetails).toHaveBeenCalledWith(testUsers);

    });

    it ('should print the header row before outputting the user details', () => {

        const testUsers: User [] = [
            {
                id: 1,
                userName: "DS123",
                firstName: "Dummy",
                lastName: "User",
                studentId: "DS12345"
            },
            {
                id: 2,
                userName: "TT123",
                firstName: "Test",
                lastName: "User",
                studentId: "TT12345"
            },
        ]

        console.log = vi.fn();

        vi.mocked(userDetails).mockReturnValue(['1|DS123|Dummy|User|DS12345' + '\n' + '2|TS123|Test|User|TS12345']);

        printUserDetails(testUsers);

        expect(console.log).toHaveBeenCalledWith('EXTERNAL_PERSON_KEY|USER_ID|FIRSTNAME|LASTNAME|STUDENT_ID' + '\n' +
        '1|DS123|Dummy|User|DS12345' + '\n' + '2|TS123|Test|User|TS12345');

    });
});