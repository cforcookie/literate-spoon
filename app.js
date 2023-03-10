const users = [
    {name: 'Alex', age: 20},
    {name: 'Roma', age: 18},
    {name: 'Alina', age: 22},
    {name: 'Vova', age: 30}
];

console.log(users.sort((a, b) => a.age - b.age));