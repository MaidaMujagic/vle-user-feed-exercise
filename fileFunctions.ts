
export type User = {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    studentId: string;
}

export function printStudentDetails (user: User) {

    const studentDetails: Array<string | number>= [];
    for (let key in user) {
        if(user.hasOwnProperty(key)) {
            studentDetails.push(user[key as keyof User])
        }
    }
    console.log(studentDetails.join("|"));
}