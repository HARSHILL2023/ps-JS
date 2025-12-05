//31
function lengthOfString(string) {
  console.log(string.length);
}
//another apporach
let str="javascript";
let count=0;

while(str[count]){
count++;
}
// console.log(count)

//32

function charcterOnnewline(string){
    var temp=string.split("");
    let str="";
    for(var i=0;i<string.length;i++){
        str=str+ temp[i]+" ";
        
    }
    console.log(str);
}
charcterOnnewline("hello")

//33

let strr ="harshil";
let check="aeiouAEIOU";
let countt =0;
for(let i=0;i<strr.length;i++){
    if(check.includes(str[i])){
        countt++;
    }
}
// console.log(countt);

//another apporach
function vowelsCount(string){
    var temp=string.split("");
    let count=0;

    for(var i=0;i<string.length;i++){
        if(temp[i]=="a" || temp[i]=="e"|| temp[i]=="i"||temp[i]=="o"|| temp[i]=="u" ){
            count++;
        }
    }
    console.log(count);

}

//3rd approach

let obj={
    i:1,
    a:1,
    e:1,
    o:1,
    u:1,
    A:1,
    E:1,
    I:1,
    O:1,
    U:1,
}
let cut=0;
for(let char of strr){
    if(obj[char]==1){
        count++;
    }
}

//34
function countConsonants(string){
    var temp=string.split("");
    let count=0;

    for(var i=0;i<string.length;i++){
        if(temp[i]=="a" || temp[i]=="e"|| temp[i]=="i"||temp[i]=="o"|| temp[i]=="u" ){
            
        }
        else{
            count++;
        }
    }
    console.log(count);
}

//35
function upperCase(string){
    let temp=string.toUpperCase();
    console.log(temp);
    
}

//another approach 
function toUpperCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);
        if (ascii >= 97 && ascii <= 122) {  // Lowercase a-z
            result += String.fromCharCode(ascii - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

//36
function lowercase(string){
    let temp=string.toLowerCase();
    console.log(temp);
    
}

//37

function reverseString(string) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    console.log(reverse);
}

//38

function palindrome(string){
    let temp=string;
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    if(temp==reverse){
        console.log("yes it's a palindrome");
        
    }
    else{
        console.log("no it's not plaindrome");
        
    }
}

//39

function CountA(string){
    var count=0;
    var temp=string.split("");
    for(var i=0;i<string.length;i++){
        if(temp[i]=="a" ||temp[i]=="A"){
            count++;
        }
    }
    console.log(count);
}

//40
 
function removeSpaces(string) {
  let temp = string.split(" ").join("");
  console.log(temp);
}

//another approach

function removeSpace(string){
    let res='';
    for(let i=0;i<string.length;i++){
        if(string[i]==" "){
            continue;
        }
        res+=string[i];
    }
    console.log(res);
}