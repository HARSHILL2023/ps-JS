//181

function sumofodd(arry){
      let sum=0;
    for(let i=0;i<arry.length;i++){
        if(arry[i]%2!=0){
            sum+=arry[i]
        }
    }
    console.log(sum);
}

