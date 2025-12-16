//81

function square(n){
    let str="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
           str=str+"*";
           
        }
        console.log(str);
        str="";
    }
}

//82

function righttriangle(n){
    let str="";
    for(let i=1;i<=n;i++){
        for(let j=1;i<=i;j++){
            str=str+'*';
        }
        console.log(str);
         str="";
    }
   
}
righttriangle(5);