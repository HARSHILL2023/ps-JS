//161

function countall(arry) {
    let postive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] == 0) {
            zero++;
        }
        else if (arry[i] > 0) {
            postive++;
        }
        else {
            negative++;
        }
    }
    console.log(`postive ${postive} negative ${negative} zero ${zero}`);


}

//162

function triple(arry) {
    let triple = [];
    for (let i = 0; i < arry.length; i++) {
        triple[i] = arry[i] * 3;
    }
    console.log(triple);

}


//163

function absoulte(arry) {
    let neww = [];
    for (let i = 0; i < arry.length; i++) {
        neww[i] = Math.abs(arry[i]);
    }
    console.log(neww);

}
//164

function alleven(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 == 0) {
            count++;
        }

    }
    return arry.length == count;
}

//165

function atleatoneeven(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 == 0) {
            count++;
        }

    }
    return count >= 1;
}

//166

function allpostive(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] >= 0) {
            count++;
        }

    }
    return arry.length == count;

}

//167

function elmentsgreatrerthank(k, arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > k) {
            count++;
        }
    }
    console.log(count);
}


//168

function indexofmaximum(arry) {
    let max = arry[1];

    for (let i = 0; i < arry.length; i++) {
        if (arry[i] >= max) {
            max = arry[i];
            print = i;
        }
    }
    console.log(print);
}


//169

function minumindex(arry) {
    let max = arry[1];

    for (let i = 0; i < arry.length; i++) {
        if (arry[i] <= max) {
            max = arry[i];
            print = i;
        }
    }
    console.log(print);
}

//170
function duplicate(arry) {
    for (let i = 0; i < arry.length; i++) {
        for (let j = i + 1; j < arry.length; j++) {
            if (arry[i] === arry[j]) {
                return true;
                break;
            }
        }
    }
    return false;
}

//another method 

// let arry=[1,2,24,5];
// let obj={}
// for(let i=0;i<arry.length;i++){
//     if(obj[arry[i]]){
//         console.log(true);
//         return;
//     }
//     else{
//         obj[arry[i]]=1;
//     }
    
// }
// console.log(false);
//171

function uniqueElements(arr) {
    let arrNew = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            continue;
        } else {
            obj[arr[i]] = 1;
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}

//172

function increasigarray(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] < arry[i + 1]) {
            count++;
        }
    }
    return count == arry.length - 1;
}

//173
function allnegativefirts(arry) {
    let converted = []
    for (let j = 0; j < arry.length; j++) {
        if (arry[j] <= 0) {
            converted.push(arry[j])
        }
    }
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > 0) {
            converted.push(arry[i]);
        }
    }

    console.log(converted);

}

//174

function maximumdiffereence(arry) {
    let max = arry[0];
    let min = arry[0];

    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > max) {
            max = arry[i]
        }
        if (arry[i] < min) {
            min = arry[i];
        }
    }
    let diff = max - min;
    console.log(diff);

}

//175

function evenindices(arry) {
    let even = [];
    for (let i = 0; i < arry.length; i++) {
        if (i % 2 == 0) {
            even.push(arry[i]);
        }

    }
    console.log(even);

}

//176

function oddindeces(arry) {
    let odd = [];
    for (let i = 0; i < arry.length; i++) {
        if (i % 2 != 0) {
            odd.push(arry[i]);
        }

    }
    console.log(odd);
}
//177

function stringabove3(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i].length > 3) {
            count++;
        }
    }
    console.log(count);
}


//178

function firstindex(arry) {
    let neww = []
    for (let i = 0; i < arry.length; i++) {
        neww.push(arry[i][0])
    }
    console.log(neww);

}

//179

function removespaces(arry) {
    let neww = [];
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] != " ") {
            neww.push(arry[i]);
        }
    }
    console.log(neww);
}

//180

function sumofeven(arry) {
    let sum = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 == 0) {
            sum += arry[i]
        }
    }
    console.log(sum);
}
