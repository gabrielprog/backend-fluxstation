class FuelEntity {
    constructor(liter, price) {
      this.liter = liter;
      this.price = price;
    }

    get liter() {
        return this._liter;
    }

    set liter(liter) {
        this._liter = liter;
    }

    get price() {
      return this._price;
    }

    set price(price) {
        this._price = price;
    }

    applyPriceFuel(price) {
        this._price = (price * this.liter);
    }
  }
  
module.exports = FuelEntity;