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
console.log(keepOnlyOdd([1, 2, 3, 4, 5])); 

//72

function RemoveDuplicate(arry){
  

}



