//Object Initialization

let student = {
    name: "Darshan",
    age: 22,
    stream: "computer"
}
console.log("------------  Object Initialization -------------------");
console.log("let student = {\n" +
    "    name:\"Darshan\",\n" +
    "    age:22,\n" +
    "    stream:\"computer\"\n" +
    "}");
console.log(student);

//Execute Function from Object Initialization

let funExecutionFromObj = {
    name: "Darshan",
    age: 22,
    welcomeMsg: function () {
        return "Hello , Welcome all";
    }
}
console.log("----------------- Execution of function from Obj Ini.. -----------")
console.log(funExecutionFromObj.welcomeMsg());

// Object through Object() Constructor
console.log("----------------- Object through Object() Constructor -----------")
let laptop = new Object();
let priceProp = "price";
laptop.name = "Lenovo";
laptop.series = "G 5080";
laptop.generation = "4th generation";
laptop["resolution"] = "4K";
laptop[priceProp] = "40000";
console.log(laptop);
console.log("Name property :- " + laptop.name);
console.log("Resolution property :- " + laptop.resolution);
console.log("Price Of a Laptop :- " + laptop.price);

//Object Creation with .create() method

console.log("------------- Object creation with .create() Method  -----------")
let designation = {
    type: "none",
    display: function () {
        console.log(this.type);
    }
};

let developer = Object.create(designation);
developer.type = "Developer";
developer.display();

let stu = Object.create(designation);
stu.type = "Student";
stu.display();


// Cloning assigning appending and Merging of Object

let person = {
    name: "Darshan",
    age: 22
};

developer = Object.assign({}, person);
console.log("------------- Cloning ----------");
console.log("Person :- ", person);
console.log("Developer :- ", developer);

console.log("------------- Appending Address with Person Obj ----------");

let stu_1 = {
    name: "Darshan",
    age: 22
};
let address = {
    country: "India",
    state: "Gujarat",
    city: "Ahmedabad"
};
let highestQualification = {
    degree: "B.E"
};
let hobbies = {
    hobby: ['cricket', 'coding']
};

console.log("Student Before Append :- ", stu_1);
console.log("Address", address);
stu_1 = Object.assign({}, stu_1, address, highestQualification, hobbies);
console.log("Student After Append :- ", stu_1);
stu_2 = Object.assign({}, stu_1);
console.log("Student (copy) By returning value", stu_2);
let skills = {
    skill: ['HTML', 'CSS', 'JAVA', 'ANDROID']
};

stu_2 = Object.assign(stu_2, stu_2, skills);
console.log("------- Skills added ----- ")
console.log("Student (copy) Without returning value", stu_2);

// Delete the Object and it's prop
console.log("------  Delete prop ------");
let demo = new Object();
demo.a = 10;
demo.b = 15;
console.log("Before Delete -- ", demo);
delete demo.b;
console.log("After Deleting b -- ", demo);
delete demo;
console.log("After Deleting whole Obj -- ", demo);

// Compare of two instance  (Object)

let a = 1;
let b = 1;
console.log("\n\n");
console.log("Number exa .. ");
console.log("a==b", a == b);
console.log("a===b", a === b);

let c = 'c';
let d = 'c';
console.log("\n\n");
console.log("String exa ... ");
console.log("c==d", c == d);
console.log("c===d", c === d);
let x = new Object();
x.x = "X";
let y = new Object();
y.x = "X";
console.log("\n\n");
console.log("By .is() fun ..");
console.log(".is() fun .. ", Object.is(x, y));

let ob1 = new Object();
ob1.name = "Darshan";

let ob2 = ob1;
console.log("ob1 == ob2", ob1 == ob2);
console.log("ob1 === ob2", ob1 === ob2);
console.log(".is() fun", Object.is(ob1, ob2));

// Destructuring of an Object
let destructObject = new Object();
destructObject.name = "Darshan";
destructObject.age = 22;

let {name, age} = destructObject;
console.log("\n\n");
console.log("------- Destructuring -------");
console.log("Name " + name + " Description " + age);




