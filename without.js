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



const without = function (arr1,arr2) {
let newArr = arr1.concat(arr2);
let resultArr = [];
let filteredArr = [];

for(let i of newArr){
  if(resultArr.indexOf(i) === -1){
    resultArr.push(i);
  }
}
for(let j of resultArr){
 filteredArr=resultArr.filter((a,b) => a !== b);
 }
return filteredArr;
}
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));