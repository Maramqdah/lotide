const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 

}; 

const tail = function(arr) {
  let newArr = arr.slice(1);
  assertEqual(arr.length,newArr.length);
  return newArr;

};

const array=["hi","bye"];
console.log(tail(array));
