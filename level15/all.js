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
//another method
// let res=arr.reduce((sum,num=>{
//     if(num%2==0){
//         return sum+num;
//     }
//     else{
//         return sum;
//     }
// }
// ,0))

//182

function swapElements(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//another method

function swaap(arr,i,j){
    arr[i]=arr[i]+arr[j];
    arr[j]=arr[i]-arr[j];
    arr[i]=arr[i]-arr[j];

    console.log(arr);
}
//another way
[arr[i],arr[j]]=[arr[j],arr[i]];

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
    console.log(arry);
}


//Q-185

function arr(arr1, arr2) {
  let i=0,j=0;
  let res=[];

  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      res.push(arr1[i]);
      i++;
    }
    else{
      res.push(arr2[j]);
      j++;
    }
  }
  while(i<arr1.length){
    res.push(arr1[i]);
    i++;
  }
  while(j<arr2.length){
    res.push(arr2[j]);
    j++;
  }
  console.log(res);
}

arr([1,3,5],[2,4,6]);


//Q-186
function bubble(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
      let temp=arr[j];
      if(arr[j]>arr[j+1]){
        arr[j] = arr[j+1];
         arr[j+1] = temp;
         
       
      }
    }
  }
  console.log(arr);
}

//187