const { DataTypes } = require('sequelize');

class FuelRecord {
  constructor(sequelize) {
    this.FuelRecordModel = sequelize.define('FuelRecord', {
      quantityLiters: DataTypes.FLOAT,
      fuelType: DataTypes.STRING,
      totalPrice: DataTypes.FLOAT,
      date: DataTypes.DATE,
    });

    this.FuelRecordModel.associate = (models) => {
      this.FuelRecordModel.belongsTo(models.Driver, {
        foreignKey: 'driverId',
        onDelete: 'CASCADE',
      });
    };
  }
}

module.exports = FuelRecord;