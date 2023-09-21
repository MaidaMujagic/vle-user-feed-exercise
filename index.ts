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
    console.log('EXTERNAL_PERSON_KEY|USER_ID|FIRSTNAME|LASTNAME|STUDENT_ID')
    console.log(userDetails(user))
};

printUserDetails(student)

