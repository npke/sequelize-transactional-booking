const Sequelize = require('sequelize');

const sequelize = new Sequelize('lab_booking_transaction', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false,
  pool: {
    min: 5,
    max: 10
  }
});

module.exports = sequelize;