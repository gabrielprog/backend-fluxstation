const UseCase = require('../fuel/useCases/UseCase');

describe('UseCase', () => {
    it('should calculate the price of gasoline for 10 liters and return FuelEntity', () => {
      const useCase = new UseCase();
  
      const result = useCase.calculePriceFuel('gasoline', 10);
  
      expect(result).toBe(50);
    });

    it('should calculate the price of ethanol for 10 liters and return FuelEntity', () => {
      const useCase = new UseCase();
  
      const result = useCase.calculePriceFuel('ethanol', 10);
  
      expect(result).toBe(19.2);
    });

    it('should calculate the price of diesel for 10 liters and return FuelEntity', () => {
      const useCase = new UseCase();
  
      const result = useCase.calculePriceFuel('diesel', 10);
  
      expect(result).toBe(35.33);
    });

    it('should return a message when an unsupported fuel type is provided', () => {
      const useCase = new UseCase();
      const result = useCase.calculePriceFuel('unknownFuelType', 10);
      expect(result.message).toBe('This fuel type is not supported yet.');
    });
});
