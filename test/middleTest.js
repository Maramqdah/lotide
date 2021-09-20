const middle = require('../middle');
const assert = require('chai').assert;

//console.log(middle([1, 2, 3, 4, 5, 6]) );

describe("#middle", () => {
  it("return [3,4] for [1,2,3,4,5,6] ", () =>{
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  })
})
