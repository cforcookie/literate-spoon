const q = Number(prompt('Insert number'));
if (q === 7) {
    console.log('Currect');
}

else {
    console.log('Incurrect');
}

switch (q) {
    case 7:
        console.log('Currect');
        break;
    default:
        console.log('Incurrect');
}


const num = Number(prompt('Insert number'));

switch (true) {
    case num > 0:
        console.log('> 0');
        break;
    case num < 0:
        console.log('< 0');
        break;
    default:
        console.log('null');
}
