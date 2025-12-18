//141

function middle(str){
    let check=str.length;
    if(check%2==0){
        console.log(str[((check/2)-1)]+str[(check/2)])
    }
    else{
        let temp2=Math.floor((check/2))
        console.log(temp2);
        
        console.log(str[temp2])
    }
}

//142

function startWitha(str){
     return (str[0]=='a' || str[0]=='A')
}

//143

function endwith(str){
    return str[str.length-1]== "!";

}

//144

function countspaces(str){
    let temp=str.split(' ');
   console.log(temp.length-1);
    
}

//145

function removespaces(str){
    let temp=str.split(' ').join('');
    console.log(temp);
    
}

//146

function replace(str){
    let temp = str.replaceAll('?', '!');  
    console.log(temp);  
}

//147

function joinstring(str1,str2){
    console.log(str1+' '+str2);
}

//148

function firstword(str){
    let temp=str.split(" ");
    console.log(temp[0]);
}

//149

function lastword(str){
    let temp=str.split(' ')
    console.log(temp[temp.length-1]);
    
}

//150

function longestWord(str){
    let temp=str.split(" ")
    let longest=temp[0].length
    for(let i=0;i<temp.length;i++){
        if(temp[i].length>longest.length){
            longest=temp[i].length;
        }
    }
    console.log(longest);
}

//151

function shortestWord(str){
      let temp=str.split(" ")
    let longest=temp[0]
    for(let i=0;i<temp.length;i++){
        if(temp[i].length<longest.length){
            longest=temp[i];
        }
    }
    console.log(longest);
}

//152

function counttheword(str){
    let count=0;
    let temp=str.split(" ");
    for(let i=0;i<temp.length;i++){
        if(temp[i]=="the"){
            count++;
        }
    }
    console.log(count);
}

//153

function countvowel(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'|| str[i]=='e'|| str[i]=='o'||str[i]=='u'){
            count++;
            break;
        }
    }
    return count>0;
}

//154

function containsdigit(str){
 let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='1'|| str[i]=='2'|| str[i]=='3'||str[i]=='4'||str[i]=='5'||str[i]=='6'||str[i]=='7'||str[i]=='8'||str[i]=='9'){
            count++;
            break;
        }
    }
    return count>0;
}


//155

function onlyalalpghabets(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='1'|| str[i]=='2'|| str[i]=='3'||str[i]=='4'||str[i]=='5'||str[i]=='6'||str[i]=='7'||str[i]=='8'||str[i]=='9' || str[i]==" "){
            count++;
            break;
        }
    }
    return count==0;
}

//156

function repeattwice(str){
    let temp="";

    for(let i=0;i<str.length;i++){
        temp=temp+str[i]+str[i];
    }
    console.log(temp);
    
}

//157

function removeSpecialCharacters(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= 'a' && char <= 'z') || 
            (char >= 'A' && char <= 'Z') || 
            (char >= '0' && char <= '9')) {
            result += char;
        }
    }
    console.log(result);
    
}

//158

function countwithlewnghtbiggertjan5(str){
    let count=0;
    let temp=str.split(" ");
    for(let i=0;i<temp.length;i++){
        if(temp[i].length>=5){
            count++;
        }
    }
    console.log(count);
    

}

//159

function anagram(str1,str2){
    let check1=str1;
    let check2=str2;
    let reverse=str2.split('').reverse().join('');
     
    return reverse==str1

}

