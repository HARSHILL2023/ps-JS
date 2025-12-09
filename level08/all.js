//71

function keepOnlyOdd(arr) {
  return arr.filter(num => num % 2 !== 0);
}

function keepOnlyOdd(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

//78



//79

function  countbinary( arry){
  let count0=0;
  let count1=0;
  for(let i=0;i<arry.length;i++){
    if(arry[i]==0){
      count0++;
    }
    else if(arry[i]==1){
      count1++;
    }

  }
  console.log(`${count0} zeros`)
  console.log(`${count1} ones`)
}


//80

function Evenodd(arry){
  let even=[];
  let odd=[];

  for(let i=0;i<arry.length;i++){
    if(arry[i]%2==0){
      even.push(arry[i]);
    }
    else{
      odd.push(arry[i]);
    }
  }
  console.log(even);
  console.log(odd);
}

r