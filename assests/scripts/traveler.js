// The Traveler class (blueprint) should set the following
// properties for each instance:
//  ----- a name, which must be provided as a parameter to the constructor.
//  ----- an amount of food, with an initial value of 1.
//  ----- an isHealthy property, with an initial value of true, which
//      indicates whether a traveler is sick.
// The Traveler class should also have the following methods:
//      ----- hunt() - Increases the traveler's food by 2.
//      ----- eat() - Consumes 1 unit of the traveler's food. If the
//          traveler doesn't have any food left to eat, the traveler
//          is no longer healthy (set isHealthy to false).

//Extend :
// The Doctor class will extend the Traveler class and have one additional method:
//      - heal(traveler) - set the traveler's isHealthy property to true.
// The Hunter class will extend the Traveler class, but it will start with 2 food
// instead of 1. The Hunter class should also have the following methods:
//      - hunt() - Increase the hunter's food by 5. (A normal traveler gains only 2.)
//      - eat() - Consumes 2 units of food. If the hunter doesn't have 2 food when
//          they are instructed to eat, they eat as much as they can (0 or 1 unit),
//          but the hunter is no longer healthy.
//      - giveFood(traveler, numOfFoodUnits) - Transfers numOfFoodUnits from the
//          hunter to the traveler. If the hunter doesn't have enough food, then
//          no food should be transferred.
class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food = this.food + 2;
  }
  eat() {
    if (this.food >= 1) {
      this.food = this.food - 1;
    } else {
      this.isHealthy = false;
    }
  }
}

class Doctor extends Traveler {
  constructor(name) {
    super(name);
  }
  heal(traveler) {
    traveler.isHealthy = true;
  }
}

class Hunter extends Traveler {
  constructor(name) {
    super(name);
    this.food = 2;
  }
  hunt() {
    this.food = this.food + 5;
  }
  eat() {
    if (this.food >= 2) {
      this.food = this.food - 2;
    } else {
      this.isHealthy = false;
      this.food = 0;
    }
  }
  giveFood(traveler, numOfFoodUnits) {
    if (this.food >= numOfFoodUnits) {
      this.food = this.food - numOfFoodUnits;
      traveler.food = traveler.food + numOfFoodUnits;
    }
  }
}

// your doctor class needs to heal the traveler, not the doctor,
// and the hunter’s give food needs to check if the hunter has
// greater than or equal to the number of food units they are
// trying to give away.
// so traveler.isHealthy instead of this.isHealthy, and
// this.food>=numofFoodUnits
