const FuelEntity = require('../entity/FuelEntity');
const FuelStrategyFactory = require('../patterns/FuelStrategyFactory');

class UseCase {
    constructor() {
      this.fuelEntity = new FuelEntity();
      this.fuelStrategy = null;
    }

    calculePriceFuel(typeFuel, liter) {
      this.fuelStrategy = FuelStrategyFactory.createStrategy(typeFuel);
      
      if(this.fuelStrategy == null)
        return this.fuelEntity.price = 0;

      this.fuelEntity.liter = liter;
      this.fuelEntity.applyPriceFuel(this.fuelStrategy);

      return this.fuelEntity.price;
    }
}
  
module.exports = UseCase;