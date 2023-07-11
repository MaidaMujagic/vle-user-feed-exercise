import {User} from "./typeDeclaration";


export const userDetails = (user: User): string => {

    const studentDetails: Array<string | number>= [];
    for (let key in user) {
        if(user.hasOwnProperty(key)) {
            studentDetails.push(user[key as keyof User])
        }
    }
    return studentDetails.join("|");
}