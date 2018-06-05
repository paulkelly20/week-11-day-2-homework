const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Enclosure = require('../enclosure.js');

describe('Enclosure', function(){

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var enclosure;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("Dave", "T rex", 2);
    dinosaur2 = new Dinosaur("Bill", "T rex", 2);
    dinosaur3 = new Dinosaur("Jeanie","Velociraptor", 8);
    enclosure = new Enclosure();
  });

  it('check that enclosure is empty', function(){
    assert.strictEqual(enclosure.dinosaurs.length, 0);
  });

  it('check enclosure size after adding dinosaur', function(){
    enclosure.addDinosaur(dinosaur1);
    enclosure.addDinosaur(dinosaur2);
    enclosure.addDinosaur(dinosaur3);
    assert.strictEqual(enclosure.dinosaurs.length, 3);
  });

  it('check enclosure can remove all t-rex', function () {
    enclosure.addDinosaur(dinosaur1);
    enclosure.addDinosaur(dinosaur2);
    enclosure.addDinosaur(dinosaur3);
    enclosure.removeDinosaur("T rex");
    assert.strictEqual(enclosure.dinosaurs.length, 1);
  });

  it('check enclosure for dinosaurs with offspring count of more than 2', function () {
    enclosure.addDinosaur(dinosaur1);
    enclosure.addDinosaur(dinosaur2);
    enclosure.addDinosaur(dinosaur3);
    assert.strictEqual(enclosure.dinosaursWithOffspringCountOfMoreThan2().length, 1);
  });


});
