const CLS = require('continuation-local-storage');
const namespace = CLS.createNamespace('Sequelize');
const Sequelize = require('sequelize');

Sequelize.useCLS(namespace);

const sequelize = new Sequelize('lab_booking_transaction', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false,
  pool: {
    min: 2,
    max: 5
  }
});

module.exports = sequelize;