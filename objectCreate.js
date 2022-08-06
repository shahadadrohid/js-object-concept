// using object literal 
const person = { name: 'Shahadad', job: 'Developer' };

// Constructor
const person1 = new Object();
console.log(person1);

// 3
// const human = Object.create(null);
const human = Object.create(person);
console.log(human.job);

// 4. Systactical sugar
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const people = new People('Shahadad', 12);
console.log(people);

// Function 
function Manus(name) {
    this.name = name;
}
const man = new Manus('Shahadad');
console.log(man)