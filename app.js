const operations = [1000, -700, 300, -500, 10000];
let balance = 100;
function FinalBalance () {
    for (let element of operations) {
        balance+=element;
    }
    console.log(balance);
}

function ZerolessBalance () {
    for (let element of operations) {
        balance+=element;
        if (balance < 0) {
            return false;
        }
    }
    console.log(true);
}
function Mid () {
    let i = 1;
    let j = 1;
    let less = 0;
    let more = 0;
    for (let element of operations) {
        if (element > 0) {
            more+=element;
            i++
        }
        if (element < 0) {
            less+=element;
            j++
        }
    }
    i = more / i;
    j = less / j;
    console.log(i, j);
}

FinalBalance();
ZerolessBalance();
Mid();