import {expect, it, describe} from 'vitest';
import {User} from "./types";
import {userDetails} from "./functions";


describe('userDetails()', () =>{

    it ('should return the details of type user joined with a vertical bar ', () => {
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
                userName: "TS123",
                firstName: "Test",
                lastName: "User",
                studentId: "TS12345"
            },
        ]

        const output = userDetails(testUsers)

        expect(output).toStrictEqual(['1|DS123|Dummy|User|DS12345','2|TS123|Test|User|TS12345'])
    });


    it ('should return the user details in the exact order as listed in type User ', () => {
        const testUsers: User []= [
            {
                studentId: "DS12345",
                id: 1,
                userName: "DS123",
                firstName: "Dummy",
                lastName: "User"

            },
            {
                id: 2,
                lastName: "User",
                userName: "TS123",
                firstName: "Test",
                studentId: "TS12345"
            },
        ]

        const output = userDetails(testUsers)

        expect(output).toStrictEqual(['1|DS123|Dummy|User|DS12345','2|TS123|Test|User|TS12345'])

    });

});