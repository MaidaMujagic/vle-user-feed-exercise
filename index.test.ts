import {vi, expect, it} from "vitest";
import {User} from "./types";
import {printUserDetails} from "./index";
import {userDetails} from "./functions";


vi.mock('./functions')

it ('printUserDetails() should call userDetails() once', () => {

    const testUser: User = {
        id: 1,
        userName: "DS123",
        firstName: "Dummy",
        lastName: "User",
        studentId: "DS12345"
    }

    printUserDetails(testUser);

    expect(userDetails).toHaveBeenCalledTimes(1);

});

it ('printUserDetails() should print the correct user details to the console', () => {

    const testUser: User = {
        id: 1,
        userName: "DS123",
        firstName: "Dummy",
        lastName: "User",
        studentId: "DS12345"
    }

    console.log = vi.fn();

    printUserDetails(testUser);

    expect(userDetails).toHaveBeenCalledWith(testUser);

});