const Enclosure = function(){
  this.dinosaurs = []
}

Enclosure.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Enclosure.prototype.removeDinosaur = function (type) {
 for(var i = this.dinosaurs.length - 1; i >= 0 ; i--){
    dinosaur = this.dinosaurs[i];
   if( dinosaur.type === type){
     this.dinosaurs.splice(i, 1);
   }
 }
};


Enclosure.prototype.dinosaursWithOffspringCountOfMoreThan2 = function () {
  var dinosaursWithOffSpringMoreThan2 = [];
  for(var i = 0; i < this.dinosaurs.length ; i++){
     foundDinosaur = this.dinosaurs[i];
    if(foundDinosaur.offspringPerYear > 2){
      dinosaursWithOffSpringMoreThan2.push(foundDinosaur);
    }

  }return dinosaursWithOffSpringMoreThan2;

};

Enclosure.prototype.calculateFutureNumberOfDinosaurs = function (years) {
  var counter = this.dinosaurs.length * years;
  for(var i = 0; i < this.dinosaurs.length ; i++){
   foundDinosaur = this.dinosaurs[i];
   if(years === 1){
    counter += foundDinosaur.offspringPerYear * years;}
    else counter +=(foundDinosaur.offspringPerYear * years) + (foundDinosaur.offspringPerYear ** years -1);
  }
  return counter;
};


module.exports = Enclosure;
