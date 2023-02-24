const url = 'https://purpleschool.ru/course/javascript';

function GetUrlParts (url) {
    const [protocol, _, host, ...path] = url.split('/');
    console.log(protocol, _, host, path);
    console.log(`Протокол:  ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${host}`);
    console.log(`Путь внутри сайта: /${path.join('/')}`);
} 

GetUrlParts(url);

// let arr = ['1', '2', '3'];
// console.log(arr.indexOf(1));
// let arr = ['1', '2', '3', '4'];
// console.log(arr.slice(2, -1));
// let arr = ['1', '2', '3', '4'];
// let [one, , three] = ['1', '2', '3', '4'];
// console.log(one, three);
let array = [1, 2, 3, 4];
const res = array.push(5);
console.log(res);