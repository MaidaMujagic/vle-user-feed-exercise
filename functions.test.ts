import {expect, it} from 'vitest';
import {User} from "./types";
import {userDetails} from "./functions";

it ('should return the details of type user joined with a vertical bar ', () => {
    const testUser: User = {
        id: 1,
        userName: "DS123",
        firstName: "Dummy",
        lastName: "User",
        studentId: "DS12345"
    }

    const output = userDetails(testUser)

    expect(output).toBe('1|DS123|Dummy|User|DS12345')
});


it ('should return the user details in the exact order as listed in type User ', () => {
    const testUser: User = {
        studentId: "DS12345",
        userName: "DS123",
        id: 1,
        firstName: "Dummy",
        lastName: "User"
    }

    const output = userDetails(testUser)

    expect(output).toBe('1|DS123|Dummy|User|DS12345')

});

