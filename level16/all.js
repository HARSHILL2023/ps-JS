//191
//binary search

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target){
            return mid;
        }
        if (arr[mid] < target){
             low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
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

//another method (binary search)

function countOccurrences(arr, target) {
    function findFirst() {
        let left = 0, right = arr.length - 1;
        let index = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                index = mid;
                right = mid - 1; // move left
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    function findLast() {
        let left = 0, right = arr.length - 1;
        let index = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                index = mid;
                left = mid + 1; // move right
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    let first = findFirst();
    if (first === -1) return 0;

    let last = findLast();
    return last - first + 1;
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