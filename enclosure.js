const Enclosure = function(){
  this.dinosaurs = []
}

Enclosure.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

module.exports = Enclosure;
