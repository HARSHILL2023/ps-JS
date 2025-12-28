//21
function countDigits(n) {
    if (n === 0) {
        console.log('1');
    }
    else {
        n = Math.abs(n); //convert negative value to postive
        let count = 0;
        while (n > 0) {
            n = Math.floor(n / 10);
            count++;
        }
        console.log(count);
    }
}

//22
function sumOFDigit(num) {
    let sum = 0;
    num = Math.abs(num);
    if (num === 0) {
        console.log("0");

    }
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

sumOFDigit(12);

//23

function productOFdigit(num) {
    let product = 1;
    num = Math.abs(num);
    if (num == 0) {
        return 0;
    }
    while (num > 0) {
        product = product * (num % 10);
        num = Math.floor(num / 10);

    }
    console.log(product);
}

//24

function reversenumber(num) {
    let n = num;
    let check = 1;
    if (n < 0) {
        check = -1;
        n = Math.abs(n);
    }
    n = Number(String(n).split("").reverse().join("")) * check;
    console.log(n);


}

//25

function checkPalindrome(num) {
    let n = num;
    let temp = num;
    let check = 1;
    if (n < 0) {
        check = -1;
        n = Math.abs(n);
    }
    n = Number(String(n).split("").reverse().join("")) * check;
    console.log(n);


    if (n == temp) {
        console.log("yes it's plaindrome")
    }
    else {
        console.log("it not a palindrome");

    }
}

//26

function primeNumberCheck(num) {
    if (num == 2 || num == 3) {
        console.log("yes it prime");

    }
    else if (num % 2 != 0 && num % 3 != 0) {
        console.log(" yes it is  prime num");
    }
    else {
        console.log("it is not  prime number");
    }
}
primeNumberCheck(8);

//27

function printprimeNumber(num) {
    for (var i = 0; i <= num; i++) {
        if (i == 2 || i == 3) {
            console.log(i);

        }
        else if (i % 2 != 0 && i % 3 != 0) {
            console.log(i);
        }
    }


}

//28

function fibbonacci(num) {
    let a=0;
    let b=1;
    console.log(a)
    console.log(b);
        for(let i=3;i<=num;i++){
        let c=a+b;
            console.log(c);
            a=b;
            b=c;
        }
    
}

//29
function gCD(num1, num2) {
    var num = Math.min(num1, num2)
    for (var i = num; i >= 1; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            console.log(i);
            break;
        }
    }
}

//30

function lcm(f, s) {

    let max = Math.max(f, s);

    for (let i = max; i <= f * s; i++) {
        if (i % f == 0 && i % s == 0) {
            console.log(i);
            return;
        }
    }
}