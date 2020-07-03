class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.hobbies = [];
    }

    addHobbies(hobby) {
        this.hobbies.push(hobby);
    }

    getHobbies() {
        console.log(this.hobbies);
    }

}

const a = new Student("darshan", 20);
a.addHobbies("Cricket");
a.addHobbies("Music");
console.log("------------- Student 1 ----------")
console.log(a.name);
console.log(a.rollNo);
console.log(a.getHobbies());

const b = new Student("Savan", 50);
console.log("------------- Student 2 -------------");
console.log(b.name);
console.log(b.rollNo);
console.log(b.getHobbies());

console.log("--------- Instance Of exa --------");
if (b instanceof Student) {
    console.log("It is object of student class");
}
