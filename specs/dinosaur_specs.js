const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Dave", "T-rex", 4);
  });

  it('should have a name',function(){
    assert.strictEqual(dinosaur.name, "Dave");
  })

  it('check dinosaur type', function(){
    assert.strictEqual(dinosaur.type, "T-rex");
  })


});
