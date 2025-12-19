//191

function search(arry, k) {
    count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] == k) {
            console.log(i);
            count++;
        }
    }
    if (count == 0) {
        console.log("-1");
    }
}

//192

function countoccurence(arry, k) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] == k) {
            count++;
        }
    }
    console.log(count);
}

//193

function sum(arry, k) {
    for (let i = 0; i < arry.length; i++) {
        for (let j = 0; j < arry.length; j++) {
            if (arry[i] + arry[j] == k) {
                console.log(arry[i], arry[j]);
                return;
            }
        }
    }
}

//194

function triplet(arr, y) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == y) {
                    return true;
                }
            }
        }
    }
    return false;
}

//195

//196

//197

function firstNonRepeatingChar(str) {

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === char) {
                count++;
            }
        }
        if (count === 1) {
            return char;
        }
    }
    return null;
}

//198

function firstRepeatingChar(str) {

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === char) {
                count++;
            }
        }
        if (count !== 1) {
            return char;
        }
    }
    return null;
}

//199
function RemoveConsecutive(str) {
    let neww = '';
    let lastChar = '';
    for (let char of str) {
        if (char !== lastChar) {
            neww += char;
            lastChar = char;
        }
    }
    console.log(neww);
}

//200
function RemoveConsecutivearraY(arry) {
    let neww = [];
    let lastChar;
    for (let char of arry) {
        if (char !== lastChar) {
            neww.push(char)
            lastChar = char;
        }
    }
    console.log(neww);
}
RemoveConsecutivearraY([1, 1, 2, 1, 1, 3, 5, 8, 2])