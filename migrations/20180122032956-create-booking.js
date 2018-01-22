'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'booking',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        facility_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false
        },
        timeslot_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false
        },
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('booking');
  }
};
