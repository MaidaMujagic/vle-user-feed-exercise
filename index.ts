import {userDetails} from "./fileFunction";
import {User} from "./typeDeclaration";


const student: User = {
    id: 1,
    userName: "JS123",
    firstName: "John",
    lastName: "Smith",
    studentId: "JS12345"
}


console.log(userDetails(student))

