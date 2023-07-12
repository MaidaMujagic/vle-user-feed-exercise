import {User} from "./typeDeclaration";


// Define a function that takes the User object as a parameter
export const getUserDetails = (user: User): string => {

    const studentDetails: Array<string | number>= [];
    const keys: Array<keyof User> = ["id", "userName", "firstName", "lastName", "studentId"]

    for (let key of keys) {
            studentDetails.push(user[key])
    }
    return studentDetails.join("|");
}