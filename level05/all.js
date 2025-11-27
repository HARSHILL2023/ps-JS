//41

function countWords(string){
    let temp=string;
    let arr=[];
    arry=temp.split(' ');
    console.log(arry.length);
}

//42

function replace(string){
    let temp=string;
    temp=temp.split('a').join("e");
    console.log(temp);

}

//43


function check(string, char) {
  if (string.includes(char)) {
    console.log(`yes ${char} is present in ${string}`);
  } else {
    console.log(`no ${char} is not present in ${string}`);
  }
}

//44

function checkString(string1,string2){

    if(string1===string2){
      console.log("yes it's the same");''
    }
    else{
      console.log("not it's not the same");
    }
}

//45

function countDigitsInString(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= '0' && char <= '9') {
      count++;
    }
  }
  console.log(count);
}


//48
function removeVowels(string){
  var neww =string.replace(/[aeiouAEIOU]/g,"");
  console.log(neww);
  

}
function removeNumber(string){
  var neww=string.replace(/[1234567890]/g,"");
  console.log(neww);  
}