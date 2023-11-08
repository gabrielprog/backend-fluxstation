'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const drivers = await queryInterface.sequelize.query('SELECT id from Drivers;');

    const driverRows = drivers[0];

    return queryInterface.bulkInsert('FuelRecords', [
      {
        quantityLiters: 30.5,
        fuelType: 'Gasolina',
        totalPrice: 100.0,
        date: new Date(),
        driverId: driverRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantityLiters: 40.2,
        fuelType: 'Etanol',
        totalPrice: 80.0,
        date: new Date(),
        driverId: driverRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FuelRecords', null, {});
  },
};
