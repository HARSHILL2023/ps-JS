//181

function sumofodd(arry) {
    let sum = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 != 0) {
            sum += arry[i]
        }
    }
    console.log(sum);
}

//182

function swapElements(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//183

function rotatearry(arry, k) {
    for (let i = 1; i <= k; i++) {
        let arr2 = arr.pop();
        arr.unshift(arr2);
    }
    console.log(arr);
}

//184
function rotatearryy(arry, k) {
    for (let i = 1; i <= k; i++) {
        let arr2 = arr.shift();
        arr.push(arr2);
    }
    console.log(arr);
}



