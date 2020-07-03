let emp1 = {
    "name": "darshan",
    "emp-no": 1,
    "salary": 50000
};

let emp2 = {
    "name": "savan",
    "emp-no": 2,
    "salary": 150000
};
let emp3 = {
    "name": "amit",
    "emp-no": 3,
    "salary": 20000
};
let emp4 = {
    "name": "jaydip",
    "emp-no": 4,
    "salary": 5000
};
let emp5 = {
    "name": "darsh",
    "emp-no": 5,
    "salary": 250000
};
let emp6 = {
    "name": "deep",
    "emp-no": 6,
    "salary": 40000
};
let emp7 = {
    "name": "harsh",
    "emp-no": 7,
    "salary": 2500
};
let emp8 = {
    "name": "manish",
    "emp-no": 8,
    "salary": 54000
};

let emp = new Array();
emp.push(emp1);
emp.push(emp2);
emp.push(emp3);
emp.push(emp4);
emp.push(emp5);
emp.push(emp6);
emp.push(emp7);
emp.push(emp8);
console.log(emp);
let paidSalary = emp.map((emp) => emp['salary'])
    .reduce((total, current) => total + current);

console.log("Paid Salary :- ", paidSalary);
