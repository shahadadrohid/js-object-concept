const first = { a: 1, b: 2 };
const second = { b: 2, a: '1' };

if (first === second) {
    // console.log('they are equal')
}
else {
    // console.log('not equal')
}

// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));


function compareObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
        return true;
    }
}

const equal = compareObj(first, second)
// console.log(equal);


const first1 = { a: 1 };
const second1 = { a: 1 };
const third1 = first1;
if (first1 === third1) {
    console.log('equal')
}
else {
    console.log('not equal')
}