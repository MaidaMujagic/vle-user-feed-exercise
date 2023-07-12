import {User} from "./typeDeclaration";


export const userDetails = (user: User): string => {

    const studentDetails: Array<string | number>= [];
    const keys: Array<keyof User> = ["id", "userName", "firstName", "lastName", "studentId"]

    for (let key of keys) {
            studentDetails.push(user[key])
    }
    return studentDetails.join("|");
}