module.exports = (sequelize, DataTypes) => {
  const FuelRecord = sequelize.define('FuelRecord', {
    quantityLiters: DataTypes.FLOAT,
    fuelType: DataTypes.STRING,
    totalPrice: DataTypes.FLOAT,
    date: DataTypes.DATE,
  });

  FuelRecord.associate = (models) => {
    FuelRecord.belongsTo(models.Driver, {
      foreignKey: 'driverId',
      onDelete: 'CASCADE',
    });
  };

  return FuelRecord;
};
