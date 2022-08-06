const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDaw: function (expenses) {
        this.money = this.money - expenses;
        console.log(this)
        return this.money;
    }
}

const alam = {
    id: 102,
    money: 4000,
    name: 'Alam'
}


kibria.treatDaw(100)
const heroTreatDaw = kibria.treatDaw.bind(alam);
heroTreatDaw(250)

const obj = {
    a: 1,
    b: 7,
    c: 3,
    length: 2
}

// console.log(Object.keys(obj).length)

const obj1 = {
    module: 35,
    video: 2
}
const obj2 = {
    module: 35,
    video: 2
}

// console.log(obj1 === obj2)

// const getGirlFriend = (name = "chokina") => "name";
// console.log(getGirlFriend())