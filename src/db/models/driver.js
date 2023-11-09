const { DataTypes } = require('sequelize');

class Driver {
  constructor(sequelize) {
    this.DriverModel = sequelize.define('Driver', {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    });

    this.DriverModel.associate = (models) => {
      this.DriverModel.hasMany(models.FuelRecord, {
        foreignKey: 'driverId',
        as: 'fuelRecords',
      });
    };
  }
}

module.exports = Driver;
