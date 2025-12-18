// 71
function removeEven(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0) result.push(arr[i]);
    }
    return result;
}

// 72
function removeDuplicates(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        let isDuplicate = false;
        for(let j=0; j<result.length; j++){
            if(result[j] === arr[i]){ isDuplicate = true; break; }
        }
        if(!isDuplicate) result.push(arr[i]);
    }
    return result;
}

// 73
function concatenate(arr1, arr2){
    let result = [];
    for(let i=0; i<arr1.length; i++) result.push(arr1[i]);
    for(let i=0; i<arr2.length; i++) result.push(arr2[i]);
    return result;
}

// 74
function intersection(arr1, arr2){
    let result = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                let exists = false;
                for(let k=0; k<result.length; k++){
                    if(result[k] === arr1[i]){ exists = true; break; }
                }
                if(!exists){ result.push(arr1[i]); break; }
            }
        }
    }
    return result;
}

// 75
function rotateRight(arr){
    if(arr.length === 0) return [];
    let result = [];
    result.push(arr[arr.length-1]);
    for(let i=0; i<arr.length-1; i++) result.push(arr[i]);
    return result;
}

// 76
function rotateLeft(arr){
    if(arr.length === 0) return [];
    let result = [];
    for(let i=1; i<arr.length; i++) result.push(arr[i]);
    result.push(arr[0]);
    return result;
}

// 77
function countGreaterThanAvg(arr){
    if(arr.length === 0) return 0;
    let sum = 0;
    for(let i=0; i<arr.length; i++) sum += arr[i];
    let avg = sum / arr.length;
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > avg) count++;
    }
    return count;
}

// 78
function findExtremes(arr){
    let largestPos = null, smallestNeg = null;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0 && (largestPos === null || arr[i] > largestPos))
            largestPos = arr[i];
        if(arr[i] < 0 && (smallestNeg === null || arr[i] < smallestNeg))
            smallestNeg = arr[i];
    }
    return {largestPos, smallestNeg};
}

// 79
function countBinary(arr){
    let zeros = 0, ones = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0) zeros++;
        else if(arr[i] === 1) ones++;
    }
    return {zeros, ones};
}

// 80
function separateEvenOdd(arr){
    let evens = [], odds = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0) evens.push(arr[i]);
        else odds.push(arr[i]);
    }
    return {evens, odds};
}

