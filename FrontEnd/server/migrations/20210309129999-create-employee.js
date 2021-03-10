'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      birth_date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Id_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      gender: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      PositionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Positions',
          key: 'id'
        },
        unUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};