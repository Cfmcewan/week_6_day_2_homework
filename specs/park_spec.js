const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park ('Jurrasic Park', 20, []);
  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionDinosaurs;
    assert.deepEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    const actual = park.addDinosaur('Tyrannosaurus');
    assert.strictEqual(actual, 1);
  });

  xit('should be able to remove a dinosaur from its collection', function(){
    const actual = park.removeDinosaur();
    assert.strictEqual(actual, 0);
  });

  xit('should be able to find the dinosaur that attracts the most visitors');



  xit('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findSpecies();
    assert.strictEqual(actual, 2);
  });

  xit('should be able to remove all dinosaurs of a particular species');

});
