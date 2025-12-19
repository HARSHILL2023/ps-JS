//51

function allElemnet(arry) {
    let result = '';
    for (let i = 0; i < arry.lenght; i++) {
        result += arry[i] + " ";
    }
    console.log(result);

}

//52

function sumOfArray(arry) {
    let result = 0;
    for (let i = 0; i < arry.length; i++) {
        result += arry[i];
    }
    console.log(result);
}

//53

function maximimInarray(arry) {
    let max = arry[1];
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > max) {
            max = arry[i];
        }
    }
    console.log(max);
}

//54

function minmumInarray(arry) {
    let min = arry[1];
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] < min) {
            min = arry[i];
        }
    }
    console.log(min);
}

//55
function countEven(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 == 0) {
            count++;
        }
    }
    console.log(count);
}

//56

function countodd(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 != 0) {
            count++;
        }
    }
    console.log(count);
}

//57

function positve(arry) {
    let result = "";
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > 0) {
            result += arry[i] + " ";
        }
    }
    console.log(result);
}

//58
function negative(arry) {
    let result = "";
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] < 0) {
            result += arry[i] + " ";
        }
    }
    console.log(result);
}

//59

function greaterThan10(arry) {
    let result = "";
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > 10) {
            result += arry[i];
        }
    }
    console.log(result);
}

//60

function average(arry) {
    let sum = 0;
    for (let i = 0; i < arry.length; i++) {
        sum += arry[i];
    }
    console.log(sum / arry.length);
}
