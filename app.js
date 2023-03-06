const operactions = [100, 300, -100, -300];
console.log(operactions);

// ! Сортировка по возростанию
operactions.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
});

// ! Сортировка по убыванию
operactions.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
});

console.log(operactions);