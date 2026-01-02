//191
//binary search

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
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
                right = mid - 1;
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
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    let first = findFirst();
    let last = findLast();
    if (first === -1 || last === -1) return 0;
    return last - first + 1;  // Correct count
}



//193

function sum(arry, k) {

    for (let i = 0; i < arry.length; i++) {

        for (let j = i + 1; j < arry.length; j++) {
            if (arry[i] + arry[j] == k) {

                return true;
            }
        }
    }
    return false;

}

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 1], 4));
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
// console.log(triplet([1,2,3,4,5],12));


//195

//optimised method

function maximumsubarray(arry) {
    let max = -Infinity;
    let currentsum = 0;

    for (let i = 0; i < arry.length; i++) {
        currentsum += arry[i];
        max = Math.max(max, currentsum)
    }
    if (currentsum < 0) {
        currentsum = 0;
    }
    console.log(max);
}


function maximun(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[i]

            if (max < sum) {
                max = sum;
            }
        }
    }
    console.log(max);

}
//196

//errored

// function non(arr,k){
//     let max=-Infinity;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<=i+k;j++){
//             let sum=0;
//             sum+=arr[j];
//             }
//              if(max<sum){
//                 max=sum;
//         }
//     }
//     console.log(max)
// }
// non( [1, 2, 3, 4, 5],2)

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
console.log(firstRepeatingChar('swiss'))

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
// RemoveConsecutivearraY([1, 1, 2, 1, 1, 3, 5, 8, 2])