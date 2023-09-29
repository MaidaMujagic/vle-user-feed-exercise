import {expect, it, describe} from 'vitest';
import {User} from "./types";
import {userDetails} from "./functions";


it ('should return the user details in the same sequence as outlined in type User and joined with a vertical bar', () => {
    const testUsers: User []= [
        {
            studentId: "DS12345",
            id: 1,
            userName: "DS123",
            firstName: "Dummy",
            lastName: "User"

        },
        {
            firstName: "Test",
            lastName: "User",
            id: 2,
            userName: "TS123",
            studentId: "TS12345"
        },
    ]

    const output = userDetails(testUsers)

    expect(output).toStrictEqual(['1|DS123|Dummy|User|DS12345','2|TS123|Test|User|TS12345'])

});
