'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FuelRecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantityLiters: {
        type: Sequelize.FLOAT
      },
      fuelType: {
        type: Sequelize.STRING
      },
      totalPrice: {
        type: Sequelize.FLOAT
      },
      driverId: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'Drivers',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FuelRecords');
  }
};