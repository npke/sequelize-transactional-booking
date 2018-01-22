const {
  Booking,
  Facility,
  Timeslot,
  BookingLock
} = require('../models');
const SequelizeService = require('../services/sequelize');

module.exports = {
  createWithoutTransaction(facilityId, timeslotId, date) {
    return Booking.destroy({ where: {} })
    .then(() => Promise.all([
      Facility.findById(facilityId),
      Timeslot.findById(timeslotId)
    ]))
    .then(([facility, timeslot]) => {
      if (!facility) {
        throw new Error('Invalid facility');
      }

      if (!timeslot) {
        throw new Error('Invalid timeslot');
      }

      return Booking.findOne({
        where: { facility_id: facilityId, timeslot_id: timeslotId, date }
      })
    })
    .then((existingBooking) => {
      if (existingBooking) {
        throw Error('The facility timeslot has been booked by another user. Please choose another timeslot or facility');
      }

      const booking = new Booking({
        date,
        facility_id: facilityId, 
        timeslot_id: timeslotId
      });
    
      return booking.save();
    })
    .then((createdBooking) => {
      if (createdBooking) {
        console.log(`New booking was created with id: ${createdBooking.id}`);
      } else {
        console.log('No booking was created :(');
      }
    })
    .catch((error) => {
      console.log(error);
    });
  },

  createWithTransaction(facilityId, timeslotId, date) {
    let transaction;

    return Booking.destroy({ where: {} })
    .then(() => Promise.all([
      Facility.findById(facilityId),
      Timeslot.findById(timeslotId)
    ]))
    .then(([facility, timeslot]) => {
      if (!facility) {
        throw new Error('Invalid facility');
      }

      if (!timeslot) {
        throw new Error('Invalid timeslot');
      }

      return SequelizeService.transaction()
    })
    .then((t) => {
      transaction = t;

      return BookingLock.getLock(facilityId, timeslotId, transaction)
    })
    .then((lock) => {
      if (!lock) {
        throw new Error('No lock was found on selected facility and timeslot');
      }

      return Booking.findOne({
        where: { facility_id: facilityId, timeslot_id: timeslotId, date }
      })
    })
    .then((existingBooking) => {
      if (existingBooking) {
        throw Error('The facility timeslot has been booked by another user. Please choose another timeslot or facility');
      }

      const booking = new Booking({
        date,
        facility_id: facilityId, 
        timeslot_id: timeslotId
      });
    
      return booking.save();
    })
    .then((createdBooking) => {
      if (createdBooking) {
        console.log(`New booking was created with id: ${createdBooking.id}`);
      } else {
        console.log('No booking was created :(');
      }

      return transaction.commit();
    })
    .catch((error) => {
      console.log(error);
      return transaction.rollback();
    });
  }
};
