//161

function countall(arry){
    let postive=0;
    let negative=0;
    let zero=0;
    for(let i=0;i<arry.length;i++){
        if(arry[i]==0){
            zero++;
        }
        else if(arry[i]>0){
            postive++;
        }
        else{
            negative++;
        }
    }
    console.log(`postive ${postive} negative ${negative} zero ${zero}`);
    

}

//162

function triple(arry){
    let triple=[];
    for(let i=0;i<arry.length;i++){
        triple[i]=arry[i]*3;
    }
    console.log(triple);
    
}


//163

function absoulte(arry){
    let neww=[];
    for(let i=0;i<arry.length;i++){
        neww[i]=Math.abs(arry[i]);
    }
    console.log(neww);
    
}
//164

function alleven(arry){
     let count=0;
     for(let i=0;i<arry.length;i++){
        if(arry[i]%2==0){
            count++;
        }
        
     }
     return arry.length==count;
}

//165

function atleatoneeven(arry){
     let count=0;
     for(let i=0;i<arry.length;i++){
        if(arry[i]%2==0){
            count++;
        }
        
     }
     return count>=1;
}
