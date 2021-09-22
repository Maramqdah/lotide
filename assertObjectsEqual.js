const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
 } else {
   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
 } 
 
};

const eqObjects = function(object1, object2) {
  const obj1Keys=Object.keys(object1);
const obj2Keys=Object.keys(object2);
if(obj1Keys.length !== obj2Keys.length){
  return false;
}
for(let obj of obj1Keys){
  if(object1[obj] !==object2[obj]){
    return false;
  }
  return true;
}
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if(eqObjects(actual,expected)===true){
    return  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    return  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);
assertObjectsEqual(ab,ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertObjectsEqual(ab, abc);