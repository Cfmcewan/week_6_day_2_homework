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
    const actual = park.addDinosaur([
      {species:'t-rex',
      diet: 'carnivore',
      guestsAttractedPerDay: 50
    }
  ]);
    assert.strictEqual(actual, 1);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    const actual = park.removeDinosaur();
    assert.strictEqual(actual, 0);
    });

   xit('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur([
      {species:'t-rex',
      diet: 'carnivore',
      guestsAttractedPerDay: 50
    }
    ]);
    const actual = park.attractsMostVisitors();
    assert.strictEqual(actual, 't-rex');
  });


  //
  xit('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur([
      {
      species:'t-rex',
      diet: 'carnivore',
      guestsAttractedPerDay: 50
      }
    ]);
    const actual = park.findSpecies();
    assert.strictEqual(actual, 't-rex');
  });

  xit('should be able to remove all dinosaurs of a particular species');

});
