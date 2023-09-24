import {userDetails} from "./functions";
import {User} from "./types";

const student: User []=[
    {
        id: 1,
        userName: "JS123",
        firstName: "John",
        lastName: "Smith",
        studentId: "JS12345"
    },
    {
        id: 2,
        userName: "BB123",
        firstName: "Bob",
        lastName: "Brown",
        studentId: "BB12345"
    },
]

export const printUserDetails = (users: User []) => {
    let userOutputs  = userDetails(users)
    const consolidatedOutput = "EXTERNAL_PERSON_KEY|USER_ID|FIRSTNAME|LASTNAME|STUDENT_ID" + '\n' +
    userOutputs?.join('\n')

    console.log(consolidatedOutput)
};

printUserDetails(student)

