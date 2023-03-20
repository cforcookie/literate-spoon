'use strict';
/*
Создайте объект пользователя с паролем.
С помощью функции ниже удалить пароль сделав
функцию сброса пароля
*/

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    password: 1234
};

const resetPassword = removePassword.bind(user, true);
resetPassword();
console.log(user);