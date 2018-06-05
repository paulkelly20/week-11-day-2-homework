const assert = require('assert')
const Dinosaur = require('../dinosaur.js')
const Enclosure = require('../enclosure.js')

describe('Enclosure', function(){

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var enclosure;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("Dave", "T-rex", 2);
    dinosaur2 = new Dinosaur("Bill", "T-rex", 2);
    dinosaur2 = new Dinosaur("Jeanie", "Velociraptor", 8);
    enclosure = new Enclosure();
  });

  it('check that enclosure is empty', function(){
    assert.strictEqual(enclosure.dinosaurs.length, 0)
  })

});
