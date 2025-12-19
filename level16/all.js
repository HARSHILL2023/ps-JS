//191

function search(arry,k){
    count=0;
    for(let i=0;i<arry.length;i++){
        if(arry[i]==k){
            console.log(i);
            count++;
        }
    }
    if(count==0){
        console.log("-1");
    }
}

//192

function countoccurence(arry,k){
    let count=0;
    for(let i=0;i<arry.length;i++){
        if(arry[i]==k){
            count++;
        }
    }
    console.log(count);
}

//193

function sum(arry,k){
    for(let i=0;i<arry.length;i++){
        for(let j=0;j<arry.length;j++){
            if(arry[i]+arry[j]==k){
                console.log(arry[i],arry[j]);
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



