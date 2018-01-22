'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('booking_lock', [{
      facility_id: 1,
      timeslot_id: 1
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('booking_lock', null, {});
  }
};
