const BookingController = require('./controllers/booking');

const  facilityId = 1;
const  timeslotId = 1;
const  date = new Date();

return Promise.resolve()
  .then(() => {
    console.log(`Creating 5 bookings`);

    // const createBookingsWithoutTransaction = Promise.all([
    //   BookingController.createWithoutTransaction(facilityId, timeslotId, date),
    //   BookingController.createWithoutTransaction(facilityId, timeslotId, date),
    //   BookingController.createWithoutTransaction(facilityId, timeslotId, date),
    //   BookingController.createWithoutTransaction(facilityId, timeslotId, date),
    //   BookingController.createWithoutTransaction(facilityId, timeslotId, date),
    // ]);

    const createBookingsWithTransaction = Promise.all([
      BookingController.createWithTransaction(facilityId, timeslotId, date),
      BookingController.createWithTransaction(facilityId, timeslotId, date),
      BookingController.createWithTransaction(facilityId, timeslotId, date),
      BookingController.createWithTransaction(facilityId, timeslotId, date),
      BookingController.createWithTransaction(facilityId, timeslotId, date),
    ]);


    // return createBookingsWithoutTransaction
    return createBookingsWithTransaction
    .then(() => {
      console.log('Done!!!');
    });
  });