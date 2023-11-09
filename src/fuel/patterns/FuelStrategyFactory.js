const FuelStrategies = require('./FuelStrategies');

class FuelStrategyFactory {
    static createStrategy(type) {
      return FuelStrategies[type] || null;
    }
}

module.exports = FuelStrategyFactory;