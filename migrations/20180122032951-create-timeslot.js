'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'timeslot',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        start_at: {
          type: Sequelize.TIME,
          allowNull: false
        },
        end_at: {
          type: Sequelize.TIME,
          allowNull: false
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('timeslot');
  }
};
