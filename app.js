const users = ['Anna', 'Vika', 'Kate'];
console.log(users);
users[2] = 'Kriss';
console.log(users);

users.push('Nikita');
users.unshift('Vasa');
console.log(users);
//Удвляют последнй и первый элементы в массиве и возвращают их
users.pop();
users.shift();
console.log(users);

