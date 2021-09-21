
const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;



// testing the code
// const array=["lighthouse","lab"];
//  console.log(tail(array));

describe ("#tail", () => {
  it("return lab for [lighthouse,lab ]", () =>{
    assert.deepEqual(tail(["lighthouse","lab"]),"lab")
  })
})


