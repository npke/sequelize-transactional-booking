'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'timeslot',
      [{
        start_at: '07:00',
        end_at: '09:00'
      }]
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('timeslot', null, {});
  }
};
