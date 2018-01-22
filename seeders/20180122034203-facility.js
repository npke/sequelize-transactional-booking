'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'facility',
      [{
        name: 'Swimming Pool'
      }]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('facility', null, {});
  }
};
