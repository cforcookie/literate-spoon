const arr = ['!', 'JS', 'love', 'I'];
let res = [];
for (let i = arr.length - 1; i >= 0; i-- ) {
    res.push(arr[i]);
}
console.log(res.join(' '));