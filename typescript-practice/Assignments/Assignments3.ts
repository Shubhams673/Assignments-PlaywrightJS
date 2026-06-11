// Assignment -3 (Arrays/Datatypes/Operators)

// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0

// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"]
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];

// 1st way of storing two arrays directly
let studentsMarks: (string | number)[] = ["Suresh",75, "Mahesh",80, "Naresh",82];
//console.log("Old Student Marks - " + studentsMarks);
console.log(`1st way : Old Student's Marks - ${studentsMarks}`)

// 2nd way of storing and mapping key value 
let studentOldMarks: Map<string, number> = new Map();
for (let i = 0; i < studentNames.length; i++) {
    studentOldMarks.set(studentNames[i]!, marks[i]!);
}
console.log("2nd way : Old Marks of Students are mapped : ");
console.log(studentOldMarks);


// To increase each marks obtained by 10
let extra: number[] = [];
for (let k: number = 0; k < marks.length; k++) {
    extra[k] = marks[k]! + 10;
    console.log(`Direct printing Student's & their Marks after increasing by 10 - ${studentNames[k]} : ${extra[k]}`); // Direct printing the vale by hard cording the indexes of the two strings.
}

// To calculate the average of the marks
let totalOld: number = 0;
let totalNew: number = 0;
let avgOld: number = 0;
let avgNew: number = 0;
for (let k: number = 0; k < marks.length; k++) {
    totalOld = totalOld + marks[k]!;
    totalNew = totalNew + extra[k]!;
    avgOld = totalOld / marks.length;
    avgNew = totalNew / marks.length;

}
console.log(`Total of the Old marks obtained is -  ${totalOld}`);
console.log(`Average of the Old marks obtained is -  ${avgOld}`);

console.log(`Total of the New marks obtained is -  ${totalNew}`);
console.log(`Average of the Old marks obtained is -  ${avgNew}`);



 

let studentExtraMarks: Map<string, number> = new Map();
for (let j: number = 0; j < studentNames.length; j++) {
    studentExtraMarks.set(studentNames[j]!, extra[j]!);
}
console.log("New Marks of Students are mapped : ");
console.log(studentExtraMarks);




