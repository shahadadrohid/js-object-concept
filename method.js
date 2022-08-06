const student = {
    id: 04,
    name: 'Shahadad',
    subjects: ['English', 'Math'],
    money: 5000,
    bestFriend: {
        name: 'Rafi',
        subjects: ['Texttile']
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDaw: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}

// student.takeExam();
// const reaminingBalance = student.treatDaw(1000);
// console.log(reaminingBalance);



const student1 = {
    id: 101,
    name: 'Shahadad Rohid',
    balance: 5000,
    major: 'Mathematics',
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'Rafi',
        major: 'Mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'Taking exam')
    },
    treatDaw: function (expense) {
        this.money = this.money - expense;
        return this.money
    }
}
student1.takeExam();
const remaining = student.treatDaw(500);
const remaining1 = student.treatDaw(400);
console.log(remaining)
console.log(remaining1)