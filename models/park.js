const Park = function(name, ticketPrice, collectionDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionDinosaurs = [];
}



Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionDinosaurs.push(dinosaur);
  return this.collectionDinosaurs.length;
}

Park.prototype.removeDinosaur = function (dinosaur) {
    this.addDinosaur(dinosaur);
    this.collectionDinosaurs.pop();
    return this.collectionDinosaurs.length;
}

//
// Park.prototype.attractsMostVisitors = function (dinosaur) {
//   this.addDinosaur(dinosaur);

// Park.prototype.findSpecies = function (dinosaur) {
//     this.addDinosaur(dinosaur);
//     for (var i = 0; i < this.collectionDinosaurs.length; i++) {
//       return this.collectionDinosaurs[i].species;
// }





module.exports = Park
