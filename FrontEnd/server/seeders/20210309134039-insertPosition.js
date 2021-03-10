'use strict';

let position = require('../files/positionList.json');
position.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Positions', position, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Positions', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
