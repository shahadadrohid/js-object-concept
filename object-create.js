// using object literal 
const student = { name: 'Shahadad', job: 'Developer' }

// Constructor 
const person = new Object();

// const human = Object.create(null) 
const human = Object.create(student);
console.log(human.job);

// // Systactical sugar 
class People {
    constructor(name) {
        this.name = name;
        this.age = age;
    }
};

const people = new People('Shahadad', 12);
console.log(people);

// Function 
function Manus(name) {
    this.name = name;
}
const man = new Manus('Shahadad');
console.log(man)