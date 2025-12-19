// 11
function onetoten() {
    let str = "";
    for (var i = 1; i <= 10; i++) {
        str = str + i + " ";
    }
    console.log(str);
}



// 12

function onetoN(number) {
    let str = "";
    for (var i = 1; i <= number; i++) {
        str = str + i + " ";
    }
    console.log(str);
}



//  13

function Even1t0N(num) {
    let str = "";
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            str = str + i + " ";
        }
    }
    console.log(str);
}



//14

function odd1toN(num) {
    let str = "";
    for (var i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            str = str + i + " ";
        }
    }
    console.log(str);
}


//15

function sum1toN(nmu) {

    var sum = 0;
    for (var i = 1; i <= nmu; i++) {
        sum += i;
    }
    console.log(sum);
}


//16
function product(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
        product = product * i;
    }
    console.log(product);
}


//17

function table(num) {
    let str = "";

    for (var i = 1; i <= 10; i++) {
        str = str + (i * num) + " ";
    }
    console.log(str);
}


//18

function divisbleby3(num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            count++;
        }
    }
    console.log(count);
}



//19
function factorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;

    }
    console.log(factorial);
}
//20
function multiplesof7(num) {
    let str = "";
    for (var i = 1; i <= num; i++) {
        str = str + (7 * i) + " ";
    }
    console.log(str);
}
