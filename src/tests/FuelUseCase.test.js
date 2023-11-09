const UseCase = require('../fuel/useCases/UseCase');

describe('UseCase', () => {
    it('should calculate the price of gasoline for 10 liters and return FuelEntity', () => {
      const useCase = new UseCase();
  
      const result = useCase.calculePriceFuel('gasoline', 10);
  
      expect(result.price).toBe(50);
    });
});

describe('UseCase', () => {
  it('should calculate the price of ethanol for 10 liters and return FuelEntity', () => {
    const useCase = new UseCase();

    const result = useCase.calculePriceFuel('ethanol', 10);

    expect(result.price).toBe(19.2);
  });
});

describe('UseCase', () => {
  it('should calculate the price of diesel for 10 liters and return FuelEntity', () => {
    const useCase = new UseCase();

    const result = useCase.calculePriceFuel('diesel', 10);

    expect(result.price).toBe(35.33);
  });
});