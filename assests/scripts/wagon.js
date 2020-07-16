// The Wagon class should set the following properties for each instance:
//  -- a capacity, which must be provided to the constructor: this is 
//          the maximum number of passengers a wagon can hold.
//  -- a passengers list, which is initially an empty array.
// The Wagon class should have these methods:
//      -- getAvailableSeatCount() - Returns the number of empty seats, 
//          determined by the capacity set when the wagon was created, 
//          subtracted by the number of passengers currently on board.
//      -- join(traveler) - Adds the traveler to the wagon if there is 
//          space. If the wagon is already at maximum capacity, don't add them.
//      -- shouldQuarantine() - Returns true if there is at least one 
//          unhealthy person in the wagon. Return false if not.
//      -- totalFood() - Returns the total amount of food among all 
//          passengers in the wagon.

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index += 1){
            let currentPassenger = this.passengers[index]
                if (currentPassenger.isHealthy === false) {
                    return true
                } 
        } 
                    return false
    }
    totalFood() {
        let totalFood = 0
        for (let index = 0; index < this.passengers.length; index += 1){
            let currentPassenger = this.passengers[index] 
            totalFood = totalFood + currentPassenger.food
        }
        return totalFood
    }
}