import {userDetails} from "./functions";
import {User} from "./types";

const student: User = {
    id: 1,
    userName: "JS123",
    firstName: "John",
    lastName: "Smith",
    studentId: "JS12345"
}

export const printUserDetails = (user: User) => {
    console.log(userDetails(user))
};

console.log(userDetails(student))

