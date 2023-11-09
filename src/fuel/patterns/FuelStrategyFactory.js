const FuelStrategies = require('./FuelStrategies');

class FuelStrategyFactory {
    static createStrategy(type) {
      if(type == "gasoline") return FuelStrategies.gasoline;

      if(type == "ethanol") return FuelStrategies.ethanol;

      if(type == "diesel") return FuelStrategies.diesel;
    }
}

module.exports = FuelStrategyFactory;