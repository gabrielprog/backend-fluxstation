'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drivers', [
      {
        name: 'Motorista 1',
        email: 'example01@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Motorista 2',
        email: 'example02@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drivers', null, {});
  },
};
