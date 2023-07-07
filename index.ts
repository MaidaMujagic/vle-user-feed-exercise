type User = {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    studentId: string;
}


const student: User = {
    id: 1,
    userName: "JS123",
    firstName: "John",
    lastName: "Smith",
    studentId: "JS12345"
}

const studentDetails: Array<string | number>= [];

for (let key in student) {
    if(student.hasOwnProperty(key)) {
        studentDetails.push(student[key as keyof User])
    }
}


console.log(studentDetails.join("|"));