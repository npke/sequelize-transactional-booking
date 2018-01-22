const Sequelize = require('sequelize');
const SequelizeService = require('../services/sequelize');

const Facility = SequelizeService.define(
  'Facility', 
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'facility',
    underscored: true,
    timestamps: false,
  }
);

Facility.associate = function (models) {
  Facility.hasMany(models.Booking);
};

module.exports = Facility;