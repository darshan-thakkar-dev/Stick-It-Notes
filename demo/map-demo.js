let student1 = {
    "name": "darshan",
    "maths-marks": 95
}
let student2 = {
    "name": "savan",
    "maths-marks": 85
}
let student3 = {
    "name": "amit",
    "maths-marks": 75
}
let student4 = {
    "name": "jaydip",
    "maths-marks": 95
}
let student5 = {
    "name": "darsh",
    "maths-marks": 25
}
let student6 = {
    "name": "deep",
    "maths-marks": 95
}
let student7 = {
    "name": "harsh",
    "maths-marks": 15
}
let student8 = {
    "name": "manish",
    "maths-marks": 5
}

let student = new Array();
student.push(student1);
student.push(student2);
student.push(student3);
student.push(student4);
student.push(student5);
student.push(student6);
student.push(student7);
student.push(student8);
console.log("Student array before gracing :- ", student);
let stuCopy = new Array();
stuCopy = student.map(stu => {
    if (stu["maths-marks"] < 35) {
        stu["maths-marks"] += (35 - stu["maths-marks"])
    }
    stuCopy.push(stu);
    return stu;
});
console.log("Student after gracing :- ", stuCopy);
