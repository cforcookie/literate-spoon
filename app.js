const guyAge = 25;
const heHaveWork = true;
const haveMoney = 1500;

let cheakMoney = (money, credit) => {
    if (money + credit >= 2000) {
        return true;
    }
    return false;
}

function prufCredit(age, haveWork, money) {
    let credit;
    
    if (haveWork == true && age > 24) {
        credit = 500;
        return cheakMoney(money, credit);

    } if (haveWork == false && age > 24) {
        credit = 100;
        return cheakMoney(money, credit);
    }
    credit = 0;
    return cheakMoney(money, credit);
    
}

const result = prufCredit(guyAge, heHaveWork, haveMoney);

console.log(result);