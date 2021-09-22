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
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc);// =>ture
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);


