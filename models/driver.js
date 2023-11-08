module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    name: DataTypes.STRING,
  });

  Driver.associate = (models) => {
    Driver.hasMany(models.FuelRecord, {
      foreignKey: 'driverId',
      as: 'fuelRecords',
    });
  };

  return Driver;
};
