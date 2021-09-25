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

// eqArrays(["1", "2", "3"], ["1", "2", "3"])
// eqArrays(["1", "2", "3"], ["1", "2", 3])

module.exports = eqArrays;
