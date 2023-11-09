const FuelEntity = require('../entity/FuelEntity');
const FuelStrategyFactory = require('../patterns/FuelStrategyFactory');

class UseCase {
    constructor() {
      this.fuelEntity = new FuelEntity();
      this.fuelStrategy = null;
    }

    calculePriceFuel(typeFuel, liter) {
      this.fuelStrategy = FuelStrategyFactory.createStrategy(typeFuel);
      this.fuelEntity.liter = liter;
      this.fuelEntity.applyPriceFuel(this.fuelStrategy());

      return this.fuelEntity;
    }
}
  
module.exports = UseCase;