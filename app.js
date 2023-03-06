const arr = [2, 4, 4, 10, 20];

function some (element, arr) {
    console.log(arr.find(el => el == element));
}

some(10, arr);
console.log(arr.some(el => el === 0))