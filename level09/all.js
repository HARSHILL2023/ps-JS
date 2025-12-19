// 81
function square(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str = str + "* ";
        }
        console.log(str);
        str = "";
    }
}

// 82
function righttriangle(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str = str + '* ';
        }
        console.log(str);
        str = "";
    }
}

// 83
function numberTriangle(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str = str + j + " ";
        }
        console.log(str);
        str = "";
    }
}

// 84
function repeatRow(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str = str + i + " ";
        }
        console.log(str);
        str = "";
    }
}

// 85
function multiplicationTables() {
    for (let i = 1; i <= 10; i++) {
        let str = "";
        for (let j = 1; j <= 10; j++) {
            str = str + (i * j) + " ";
        }
        console.log(str);
    }
}

// 86
function rowSums(arr2d) {
    let result = [];
    for (let i = 0; i < arr2d.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr2d[i].length; j++) {
            sum += arr2d[i][j];
        }
        result.push(sum);
    }
    return result;
}

// 87
function isPerfectSquare(n) {
    for (let i = 1; i <= n; i++) {
        if (i * i === n) return true;
    }
    return false;
}

// 88
function isArmstrong(num) {
    let original = num;
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit * digit;
        num = Math.floor(num / 10);
    }
    return sum === original;
}

// 89
function stringLengths(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].length);
    }
    return result;
}

// 90
function longestString(arr) {
    if (arr.length === 0) return "";
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
