const SequelizeService = require('../services/sequelize');
const Sequelize = require('sequelize');

const BookingLock = SequelizeService.define(
  'BookingLock',
  {
    facility_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    timeslot_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    }
  },
  {
    tableName: 'booking_lock',
    underscored: true,
    timestamps: false,
    primaryKey: true
  }
);

BookingLock.associate = function (models) {
  BookingLock.belongsTo(models.Facility);
  BookingLock.belongsTo(models.Timeslot);
};

BookingLock.getLock = function (facilityId, timeslotId, transaction) {
  return BookingLock.findOne({
    where: { facility_id: facilityId, timeslot_id: timeslotId },
    transaction,
    lock: transaction.LOCK.UPDATE
  });
}

module.exports = BookingLock;