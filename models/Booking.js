const Sequelize = require('sequelize');
const SequelizeService = require('../services/sequelize');

const Booking = SequelizeService.define(
  'Booking', 
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
  },
  {
    timestamps: false,
    tableName: 'booking',
    underscored: true,
  }
);

Booking.associate = function (models) {
  Booking.belongsTo(models.Facility);
  Booking.belongsTo(models.Timeslot);
};

module.exports = Booking;