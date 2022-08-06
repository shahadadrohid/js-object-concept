const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
}
const keys = Object.keys(bottle)
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pairs = Object.entries(bottle);
// console.log(pairs);

Object.freeze(bottle)
// Object.seal(bottle);
// console.log(bottle)
bottle.price = 100;

delete bottle.isCleaned;
console.log(bottle)

