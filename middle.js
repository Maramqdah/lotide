const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed ");
  }
  
};

const eqArrays= function(array1,array2) {
  if(JSON.stringify(array1)==JSON.stringify(array2)){
   return console.log("true");
  }else{
    console.log("not true");
  }
}

const assertArraysEqual=function (element1,element2){
  return console.log(eqArrays(element1,element2))
}

const middle = function(arr){
  let arraylength=arr.length;
  let newArray=[];
  let midArr= Math.floor(arraylength/2);

  if(arraylength<=2){
    return newArray;
  }else if(arraylength % 2 === 0){
    newArray.push(arr[midArr - 1] ,arr[midArr ])
    return newArray;
  }else {
    return arr[midArr];

  }

}

console.log(middle([1, 2, 3, 4, 5, 6]) );