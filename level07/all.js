//61

function double(arry) {
    var arr = [];
    for (let i = 0; i < arry.length; i++) {
        arr[i] = arry[i] * 2;

    }
    console.log(arr);
}

//62

function square(arry) {
    var arr = [];
    for (let i = 0; i < arry.length; i++) {
        arr[i] = arry[i] * arry[i];

    }
    console.log(arr);
}

//63

function reversearray(arry) {
    let neww = [];
    for (let i = 0; i < arry.length; i++) {
        neww[i] = arry[arry.length - 1 - i];
    }
    console.log(neww);

}

//64

function copyarray(arry) {
    let copy = [];
    for (let i = 0; i < arry.length; i++) {
        copy[i] = arry[i];
    }
    console.log(copy);
}

//65

function check(arry, value) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] == value) {
            count++;
        }
    }
    if (count > 0) {
        console.log('yes it is there in array')
    }
    else {
        console.log("it is not in the array")
    }

}


//66

function indexPrint(arry, value) {
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] == value) {
            console.log(i);
        }

    }

}

//67
function checkFrequency(arry, value) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] == value) {
            count++;
        }
    }

    console.log(count)
}

//68

function checkSorted(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] < arry[i + 1]) {
            count++;
        }
    }
    if (count == arry.length - 1) {
        console.log("yes it is Sorted array");

    }
    else {
        console.log("no it is not sorted array");
    }
}

//69

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let a = arr[i];

        if (a > largest) {
            secondLargest = largest;
            largest = a;
        } else if (a > secondLargest && a != largest) {
            secondLargest = a;
        }
    }
    console.log(secondLargest);
}

//70

function findSecondSmallest(arr) {
    let smallest = arr[0];
    let secondSmallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let a = arr[i];

        if (a < smallest) {
            secondSmallest = smallest;
            smallest = a;
        } else if (a < secondSmallest && a != smallest) {
            secondSmallest = a;
        }
    }
    console.log(secondSmallest);
}
findSecondSmallest([10, 5, 8, 20]);



