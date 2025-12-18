//121

function multipleof10(num){
    return num%10==0;
}

//122

function mimumoftwodigit(a,b){
    a<b?console.log(a):console.log(b);
}

//123

function mimumofthreenumber(a,b,c){
   let minum=a;
   if(b<minum){
    minum=b;
   }
   if(c<minum){
    minum=c;
   }
   console.log(minum);
}

//124

function nto1(n){
 for(let i=n;i>=1;i--){
    console.log(i);
 }
}

//125

function sumofalleven(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        if(i%2==0){
            sum+=i;
        }
    }
    console.log(sum);
}

//126

function sumofallodd(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        if(i%2!=0){
            sum+=i;
        }
    }
    console.log(sum);
}

//127

function divisibleby2or3(num){
    let count=0;
    for(let i=0;i<=num;i++){
    if(i%2==0 || i%3==0){
        count++;
    }
}
console.log(count);
}

//128

function divisibleby2and5(num){
    let count=0;
    for(let i=0;i<=num;i++){
    if(i%2==0 && i%5==0){
        count++;
    }
}
console.log(count);
}

//131

function largestNumber(n) {
  let big = 0;

  while (n > 0) {
    let digit = n % 10;       
    if (digit > big) {
      big = digit;
    }
    n = Math.floor(n / 10);    
  }

  console.log(big);
}

//132

function smalestNumber(n) {
  let small= 9;

  while (n > 0) {
    let digit = n % 10;       
    if (digit < small) {
      small = digit;
    }
    n = Math.floor(n / 10);    
  }

  console.log(small);
}

//133

function countevendigits(n){
     let count= 0;

  while (n > 0) {
    let digit = n % 10;       
    if (digit%2==0) {
      count++;
    }
    n = Math.floor(n / 10);    
  }

  console.log(count);

}



//134

function countodddigits(n){
     let count= 0;

  while (n > 0) {
    let digit = n % 10;       
    if (digit%2!=0) {
      count++;
    }
    n = Math.floor(n / 10);    
  }

  console.log(count);

}

//135

function difference(a,b){
    console.log(Math.abs(a-b));
}

//136

function between100and999(n){
    return n>=100||n<=999
}


//137

function sumofsquares(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i*i;
    }
    console.log(sum);
}

//138

function sumofcubes(n){
     let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i*i*i;
    }
    console.log(sum);
}

//139
 function harshad(num){
  let original=num;
  let sum=0;
    while(num>0){
      sum=sum+(num%10);
      num=Math.floor(num/10);
    }
   
    return original%sum==0
    
 }

 //140

 function automorphic(num){
  let original=num;
  let check=0;
  check=(num*num)%10;
  
  return check==original;
 }

console.log(automorphic(7));

